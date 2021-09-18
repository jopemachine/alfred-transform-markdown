export function prepend(input, target) {
  return target + ' ' + input;
}

export function prependEachLine(input, target) {
  return input.split('\n').map(line => prepend(line, target));
}

export function append(input, target) {
  return input + ' ' + target;
}

export function wrap(input, start, end) {
  return (start + input + (end ? end : start));
}

export function linkify(url) {
  return `[](${url})`;
}
