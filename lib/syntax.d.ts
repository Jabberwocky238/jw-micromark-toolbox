/**
 * Create an extension for `micromark` to support GitHub autolink literal
 * syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   autolink literal syntax.
 */
export function jwObsidian(): Extension;
export type Code = import('micromark-util-types').Code;
export type ConstructRecord = import('micromark-util-types').ConstructRecord;
export type Event = import('micromark-util-types').Event;
export type Effects = import('micromark-util-types').Effects;
export type Extension = import('micromark-util-types').Extension;
export type Previous = import('micromark-util-types').Previous;
export type State = import('micromark-util-types').State;
export type TokenizeContext = import('micromark-util-types').TokenizeContext;
export type Tokenizer = import('micromark-util-types').Tokenizer;
