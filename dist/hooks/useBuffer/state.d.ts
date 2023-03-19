export type State = {
    done: boolean;
    buffer: Uint8Array[];
    refreshCount: number;
    aborted: boolean;
    controller: AbortController | null;
};
export type Action = {
    type: "cancel";
} | {
    type: "refresh";
} | {
    type: "add";
    payload: Uint8Array;
} | {
    type: "done";
} | {
    type: "setController";
    payload: AbortController;
};
export declare const streamState: (prevState: State, action: Action) => State;
