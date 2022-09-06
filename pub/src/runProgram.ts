

import * as main from "api-pareto-main"
import * as process from "process"
import * as pi from "pareto-core-internals"


export function runProgram(
    $c: main.PProgramMain
): void {

    //process.stderr.setEncoding('utf-8')
    const sc = $c(
        {
            arguments: pi.wrapRawArray(process.argv.slice(2))//strip 'node' and the script name
        },
        {
            stderr: {
                write: ($) => {
                    process.stderr.write($)
                }
            },
            stdout: {
                write: ($) => {
                    process.stdout.write($)
                }
            },
            setExitCodeToFailed: () => {
                process.exit(1)
            }
        },
        ($, $c) => {
            $._execute($c)
        },
    )

    // process.stdin.setEncoding("utf-8")
    // process.stdin.pipe(
    //     new stream.Writable({
    //         defaultEncoding: "utf-8",
    //         write: function (data, _encoding, callback) {
    //             //eslint-disable-next-line
    //             sc.onData(data.toString())
    //             callback()
    //         },
    //     })
    // ).on('finish', () => {
    //     sc.onEnd(null)
    // })
}