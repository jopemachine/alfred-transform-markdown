import alfy from 'alfy';
import clipboardy from 'clipboardy';
import { markdownTable } from 'markdown-table';
import { linkify, wrap, prependEachLine } from './transform.js';

const input = clipboardy.readSync();

const items = [
  {
    title: 'Cancel the line',
    subtitle: '',
    arg: wrap(input, '~~'),
  },
  {
    title: 'Underline',
    subtitle: '',
    arg: wrap(input, '<u>', '</u>'),
  },
  {
    title: 'Emphasize',
    subtitle: '',
    arg: wrap(input, '**'),
  },
  {
    title: 'Make italics',
    subtitle: '',
    arg: wrap(input, '*'),
  },
  {
    title: 'Make italics and emphasize',
    subtitle: '',
    arg: wrap(input, '***'),
  },
  {
    title: 'Linkify',
    subtitle: '',
    arg: linkify(input),
  },
  {
    title: 'Make table',
    subtitle: '',
    arg: markdownTable(input.split('\n').map((line) => line.split(/\s+/))),
  },
  {
    title: 'Emphasize',
    subtitle: '',
    arg: wrap(input, '*'),
  },
  {
    title: 'Make Blockquote',
    subtitle: '',
    arg: prependEachLine(input, '>'),
  },
  {
    title: 'Make Email, URL',
    subtitle: '',
    arg: wrap(input, '<', '>'),
  },
  {
    title: 'Make Code block',
    subtitle: '',
    arg: wrap(input, '```\n', '\n```'),
  },
  // {
  //   title: 'Imagify',
  //   subtitle: '',
  //   arg: '!' + linkify(input),
  // },
].sort((a, b) => a.title > b.title ? 1 : -1);

alfy.output(items);

