import { BufferHook } from "../types";
/**
 * Custom hook that updates with the current token buffer.
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
 *
 * @category Hooks
 */
export declare const useTextBuffer: BufferHook<string>;
