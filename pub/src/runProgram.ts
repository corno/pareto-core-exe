
import * as pt from "pareto-core-types"

import * as process from "process"
import * as stream from "stream"

export type ProgramMain = (
    $: {
        arguments: pt.Array<string>
    },
    $i: {
        stdout: {
            write: ($: string) => void
        },
        stderr: {
            write: ($: string) => void
        }
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
    }
) => void

export function runProgram(
    $c: ProgramMain
): void {

    //process.stderr.setEncoding('utf-8')
    const sc = $c(
        {
            arguments: process.argv.slice(2) //strip 'node' and the script name
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
        },
        {
            startAsync: ($) => {
                $.execute(() => {

                })
            }
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