/**
 * @fileoverview
 *
 * This is meant to be the simplest component that can read text from a stream
 * and render it using a fade-in animation.
 *
 * I was both depressed and inspired by how uncooperative React is with such a
 * simple use case, especially for Safari. We did the best we could.
 */
import { FC, HTMLAttributes } from "react";
import { FetchBufferOptions } from "../../hooks/types";
export interface StreamingTextProps extends HTMLAttributes<HTMLElement> {
    /**
     * The buffer of all text chunks received so far, updated as new chunks are
     * received.
     */
    buffer: string[];
    /**
     * The HTML element to render the text as. Defaults to `p`.
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * The duration of the fade-in animation in milliseconds. Defaults to 600.
     */
    fade?: number;
}
/**
 * StreamingText renders the chunks of an updating buffer of text with a fade-in
 * animation.
 *
 * @category Components
 *
 * @example
 * ```tsx
 * const { buffer, refresh, cancel, done } = useTextBuffer(url, 500);
 *
 * return (
 *  <div>
 *    <StreamingText buffer={buffer} />
 *    <button onClick={refresh} disabled={!done}>Refresh</button>
 *    <button onClick={cancel} disabled={done}>Cancel</button>
 *  </div>
 * )
 * ```
 */
export declare const StreamingText: FC<StreamingTextProps>;
export type StreamingTextURLProps = Omit<StreamingTextProps, "buffer"> & FetchBufferOptions;
/**
 * Wrapper around `<StreamingText>` that fetches the text stream from a URL.
 *
 * If you need to be able to refresh or cancel this stream, use `const { buffer,
 * refresh, cancel } = useTextBuffer()` alongside `<StreamingText
 * buffer={buffer}>` instead.
 *
 * @category Components
 *
 * @example
 * ```tsx
 * return (
 *  <StreamingTextURL url="/api/demo" fade={600} throttle={100} />
 * );
 * ```
 */
export declare const StreamingTextURL: FC<StreamingTextURLProps>;
