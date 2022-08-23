import * as process from "process"
import { processExit } from "./etc"

export function runProgram(
    $i: (
        $: {
            argument?: string
        },
        // $i: {
        //     onDone: ($: {
        //         success: boolean,
        //     }) => void
        // }
    ) => void
): void {
    const pa = process.argv
    // let isDone = false
    // process.on("beforeExit", () => {
    //     if (!isDone) {
    //         throw new Error("process did not terminate properly, isDone() is never called")
    //     }
    // })
    if (pa.length > 3) { //expected format is 'node <scriptname> <argument>'
        console.error("expecting either 0 or 1 argument, not more")
        processExit(1)
    } else {
        $i(
            {
                argument: pa[2],
            },
            // {
            //     onDone: ($) => {
            //         if (isDone) {
            //             throw new Error("process did not terminate properly, isDone() is called multiple times")
            //         }
            //         if (!$.success) {
            //             process.exit(1)
            //         }
            //     }
            // }
        )
    }
}