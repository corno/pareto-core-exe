
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

    $c(
        {
            arguments: process.argv.slice(2) //strip 'node' and the script name
        },
        {
            stderr: {
                write: process.stderr.write
            },
            stdout: {
                write: process.stdout.write
            },
        },
        {
            startAsync: ($) => {
                $.execute(() => {

                })
            }
        },
    )

}