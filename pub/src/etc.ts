import * as stream from "stream"

export type IStreamConsumer<DataType, EndDataType> = {
    onData(data: DataType): void;
    onEnd(data: EndDataType): void;
}

// export function subscribeToProcessBeforeExit(
//     $i: ($: number) => void,
// ) {
//     process.on("beforeExit", ($) => {
//         $i($)
//     })
// }


export function processExit(code: number): never {
    process.exit(code)
}
