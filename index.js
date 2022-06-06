import alfy from 'alfy';
import clipboardy from 'clipboardy';
import {markdownTable} from 'markdown-table';
import {wrap, prependEachLine, wrapEachLine, linkifyEachLine} from './transform.js';

const input = clipboardy.readSync();

const items = [
	{
		title: 'Cancel',
		subtitle: '',
		arg: wrapEachLine()(input, '~~'),
	},
	{
		title: 'Underline',
		subtitle: '',
		arg: wrapEachLine()(input, '<u>', '</u>'),
	},
	{
		title: 'Emphasize',
		subtitle: '',
		arg: wrapEachLine()(input, '**'),
	},
	{
		title: 'Make italics',
		subtitle: '',
		arg: wrapEachLine()(input, '*'),
	},
	{
		title: 'Make italics and emphasize',
		subtitle: '',
		arg: wrapEachLine()(input, '***'),
	},
	{
		title: 'Linkify',
		subtitle: '',
		arg: linkifyEachLine()(input),
	},
	{
		title: 'Make markdown table',
		subtitle: '',
		arg: markdownTable(input.split('\n').map(line => line.split(/ {2}\s+|\t/).filter((Boolean)))),
	},
	{
		title: 'Make blockquote',
		subtitle: '',
		arg: prependEachLine({applyToBlankline: true})(input, '>'),
	},
	{
		title: 'Make email, URL',
		subtitle: '',
		arg: wrapEachLine()(input, '<', '>'),
	},
	{
		title: 'Make code block',
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

