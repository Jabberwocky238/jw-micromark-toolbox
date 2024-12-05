
import type { ConstructRecord, Extension } from 'micromark-util-types';

import { codes } from 'micromark-util-symbol';
import { imageConstruct } from './declare_image.js';
import { linkConstruct } from './declare_link.js';
import { highlightConstruct } from './declare_mark.js';

const text: ConstructRecord = {};
text[codes.exclamationMark] = imageConstruct;
text[codes.leftSquareBracket] = linkConstruct
text[codes.equalsTo] = highlightConstruct;

export function jwObsidian(): Extension {
  return {text};
}

