const applyEachLine = (applier, { applyToBlankline } = {}) => (input, ...args) =>
  input.split('\n').map(line => (applyToBlankline || line) && applier(line, ...args));

export const prepend = (input, target) => target + ' ' + input;

export const prependEachLine = ({ applyToBlankline } = {}) => (input, target) =>
  applyEachLine(prepend, { applyToBlankline })(input, target);

export const append = (input, target) => input + ' ' + target;

export const wrap = (input, start, end = start) => start + input + end;

export const wrapEachLine = ({ applyToBlankline } = {}) => (input, start, end = start) =>
  applyEachLine(wrap, { applyToBlankline })(input, start, end)

export const linkify = (url) => `[](${url})`;

export const linkifyEachLine = ({ applyToBlankline } = {}) => (url) => applyEachLine(linkify, { applyToBlankline })(url);
