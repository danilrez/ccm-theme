export const tokenColors = [
	{
		scope: [
			'variable.parameter',
			'token.variable.parameter',
			'variable.other.jsdoc',
			'variable.language.arguments',
			'function.parameter',
			'entity.name.variable.parameter',
			'meta.function.c',
			'punctuation.vararg-ellipses',
			'variable.other.block.ruby',
			'meta.arguments',
			'entity.name.type.template',
		],
		settings: {
			foreground: '#E4BF7F',
		},
	},
	{
		scope: ['variable.parameter.url.css'],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['variable.other.less', 'variable.other.sass', 'variable.scss', 'meta.function.calc.css', 'source.sass variable.other'],
		settings: {
			foreground: '#E4BF7F',
		},
	},
	{
		scope: [
			'variable.other.readwrite.alias',
			'entity.name.type.module',
			'entity.name.package',
			'variable.other',
			'support.variable',
			'meta.definition.variable',
			'variable.other.object',
			'variable.other.readwrite',
			'entity.name.type.enum',
			'meta.method.body',
			'entity.name.variable',
			'variable.other.object.property.cs',
			'meta.block.c',
			'source.c',
			'source.cpp',
			'source.ruby',
			'source.go',
			'meta.class-struct-block',
			'source.dart',
			'source.python',
			'meta.item-access.python',
			'meta.function-call.arguments.python',
			'meta.item-access.arguments.python',
			'variable.parameter.keyframe-list.css',
			'meta.property-value.css',
			'source.css.less',
			'variable',
		],
		settings: {
			foreground: '#CABCD0',
		},
	},
	{
		scope: ['comment', 'comment.markup.link', 'punctuation.definition.comment', 'markup.quote.markdown'],
		settings: {
			fontStyle: 'italic',
			foreground: '#676E95',
		},
	},
	{
		scope: ['invalid'],
		settings: {
			fontStyle: 'underline',
			foreground: '#676E95',
		},
	},
	{
		scope: ['variable.other.property'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['variable.other.object.property', 'variable.other.constant.property'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: [
			'punctuation.separator.key-value',
			'keyword.operator.type.annotation',
			'punctuation.definition.section.case-statement',
			'punctuation.separator.colon',
			'punctuation.separator.other',
			'punctuation.definition.parameters',
			'punctuation.definition.constant.ruby',
			'punctuation.separator.dictionary.key-value',
			'keyword.operator.ternary.dart',
			'punctuation.section.function.begin.python',
			'meta.property-list.css.sass',
			'sass-script-maps',
			'punctuation.colon',
			'punctuation.separator.initializers',
		],
		settings: {
			foreground: '#8E99B1',
		},
	},
	{
		scope: ['keyword.operator.key.php'],
		settings: {
			foreground: '#8E99B1',
		},
	},
	{
		scope: [
			'punctuation.separator.comma',
			'punctuation.separator.delimiter',
			'punctuation.separator.list.comma',
			'punctuation.separator.parameter',
			'meta.array.php',
			'punctuation.separator.parameters',
			'punctuation.separator.arguments.python',
			'punctuation.separator.object',
			'meta.function.method.with-arguments.ruby',
			'punctuation.comma',
			'punctuation.separator.element.python',
			'comment.punctuation.comma.sass',
			'meta.at-rule.keyframes.body.css',
			'meta.delimiter.object.comma',
		],
		settings: {
			foreground: '#79859D',
		},
	},
	{
		scope: [
			'punctuation.terminator',
			'punctuation.terminator.statement',
			'punctuation.terminator.rule',
			'punctuation.terminator.expression',
			'punctuation.separator.statement',
			'meta.using-namespace-declaration.cpp',
			'invalid.deprecated.semicolon',
			'constant.character.end',
		],
		settings: {
			foreground: '#676E95',
		},
	},
	{
		scope: [
			'punctuation.accessor',
			'punctuation.separator.period',
			'punctuation.separator.dot-access',
			'punctuation.separator.method',
			'punctuation.other.period',
			'punctuation.dot',
			' meta.delimiter.property.period',
		],
		settings: {
			fontStyle: 'bold',
			foreground: '#838FA7',
		},
	},
	{
		scope: ['meta.parameters.js'],
		settings: {
			foreground: '#838FA7',
		},
	},
	{
		scope: ['support.constant.font-name'],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['support.constant.property-value.scss', 'support.constant.property-value.css', 'support.constant.vendored.property-value.css'],
		settings: {
			foreground: '#C57BDB',
		},
	},
	{
		scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end'],
		settings: {
			foreground: '#6495EE',
		},
	},
	{
		scope: [
			'meta.object-literal.key',
			'meta.object-literal.key string.quoted',
			'variable.object.property',
			'keyword.operator.optional',
			'support.type.map.key',
			'meta.at-rule.each.scss',
			'meta.property-value.scss',
		],
		settings: {
			fontStyle: 'italic',
			foreground: '#E06C75',
		},
	},
	{
		scope: [
			'keyword.operator.negetion.regexp',
			'keyword.control.anchor.regexp',
			'punctuation.definition.group.capture.regexp',
			'keyword.operator.quantifier.regexp',
		],
		settings: {
			foreground: '#E4BF7F',
		},
	},
	{
		scope: [
			'support.variable.dom',
			'support.variable.property',
			'support.variable.property.dom',
			'storage.modifier.import',
			'constant.other.php',
			'variable.other.object.cs',
			'entity.name.type.namespace',
			'variable.other.member.c',
			'meta.using-namespace-declaration.cpp entity.name.type.cpp',
			'meta.class-struct-block.cpp meta.namespace-block.cpp entity.name.type.cpp',
			'variable.other.source.dart',
			'entity.name.namespace.cpp',
		],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['punctuation.definition.comment'],
		settings: {
			foreground: '#676E95',
		},
	},
	{
		scope: ['keyword.operator.expression.typeof', 'keyword.other.typeof'],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: ['keyword.operator.assignment', 'meta.property-value.css keyword.operator.less'],
		settings: {
			foreground: '#7C88B4',
		},
	},
	{
		scope: [
			'punctuation.definition.tag',
			'meta.tag.inline.any',
			'meta.tag.block.any',
			'meta.tag.any ',
			'meta.tag.structure.any',
			'meta.tag.metadata.script',
			'punctuation.definition.tag.begin',
			'punctuation.definition.tag.end',
			'meta.tag.preprocessor.xml',
			'punctuation.separator.key-value.html',
			'meta.tag.metadata.style.html',
			'meta.tag.attributes.js keyword.operator.assignment',
			'meta.tag.other.html',
			'meta.tag.inline.any.html source.directive.vue meta.brace',
			'punctuation.definition.tag.begin source.js',
			'punctuation.definition.tag.end source.js',
		],
		settings: {
			foreground: '#8792AA',
		},
	},
	{
		scope: [
			'keyword.operator',
			'keyword.operator.arithmetic',
			'keyword.operator.decrement',
			'keyword.operator.increment',
			'keyword.operator.assignment.compound',
			'keyword.operator.less',
			'meta.property-list.css',
			'keyword.operator.sass',
			'keyword.operator.increment-decrement',
			'keyword.operator.css',
			'entity.name.tag.wildcard.scss',
			'keyword.operator.string',
			'keyword.operator.bitwise',
			'keyword.operator.assignment.augmented',
			'storage.type.variable.ruby',
			'keyword.operator.assignment.arithmetic',
			'punctuation.definition.list.begin.markdown',
			'variable.language.import-all',
			'constant.language.import-export-all',
			'storage.modifier.reference',
			'storage.modifier.pointer',
		],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: [
			'keyword.operator.ternary',
			'keyword.operator.logical',
			'keyword.operator.comparison',
			'keyword.operator.relational',
			'keyword.operator.or.regexp',
			'keyword.operator.class',
			'keyword.operator.type',
			'keyword.operator.other.ruby',
			'keyword.operator.conditional',
			'punctuation.separator.question-mark',
			'keyword.operator.null-coalescing',
			'punctuation.tilde',
			'punctuation.separator.pointer-access',
			'punctuation.separator.namespace',
			'keyword.operator.dart',
		],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: ['keyword.operator.expression.instanceof', 'keyword.operator.instanceof'],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: [
			'support.function',
			'meta.function-call',
			'support.function.construct.output',
			'invalid.deprecated.gradient.function.css',
			'invalid.deprecated.function.css',
			'support.function.console',
			'support.function.dom',
		],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: ['variable.other.global.safer.php', 'variable.other.global.php'],
		settings: {
			foreground: '#E4BF7F',
		},
	},
	{
		scope: [
			'support.function.any-method.builtin.url',
			'support.function.any-method.builtin',
			'support.function.url',
			'support.function.misc',
			'support.function.transform',
			'support.function.calc',
			'support.function.var',
			'support.function.string',
			'support.function.basic_functions',
			'support.function.array',
			'support.function.construct',
			'support.function.datetime',
			'support.function.file',
			'support.function.network',
			'support.function.session',
			'support.function.mail',
			'support.function.filter',
			'support.function.errorfunc',
			'support.function.mysql',
			'support.function.php_odbc',
			'support.function.xml',
			'support.function.math',
		],
		settings: {
			foreground: '#6495EE',
		},
	},
	{
		scope: ['entity.name.type.class'],
		settings: {
			foreground: '#FF6AB3',
		},
	},
	{
		scope: 'support.class',
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['support.class.console', 'support.class.component'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['support.class.builtin'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['entity.name.class'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['meta.method.declaration'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['storage.type.function.arrow'],
		settings: {
			foreground: '#A78CFA',
		},
	},
	{
		scope: [
			'keyword.operator.new',
			'keyword.other.new',
			'storage.modifier.c',
			'keyword.control.directive.define',
			'keyword.control.def',
			'keyword.control.class',
			'keyword.control.directive.define punctuation.definition.directive',
			'keyword.control.module',
			'keyword.control.new',
			'keyword.preprocessor.define',
			'meta.preprocessor.cs punctuation.separator.hash.cs',
		],
		settings: {
			foreground: '#9D7EF9',
		},
	},
	{
		scope: ['keyword.operator.expression.in', 'keyword.operator.expression.of'],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: [
			'keyword.control',
			'keyword.other.using',
			'keyword.preprocessor.elif',
			'keyword.preprocessor.if',
			'keyword.preprocessor.else',
			'keyword.preprocessor.endif',
			'storage.modifier.extends',
			'keyword.control.directive',
			'punctuation.definition.directive',
			'punctuation.separator.hash',
			'storage.type.modifier',
			'keyword.control.export',
			'keyword.control.import',
			'keyword.control.at-rule.import.css',
			'keyword.control.at-rule.import.less',
			'keyword.control.at-rule.import.sass',
			'keyword.other.import',
			'keyword.import',
			'keyword.package',
			'keyword.control.flow',
			'keyword.other.special-method.ruby',
			'keyword.input',
			'keyword.type.graphql',
			'entity.name.function.definition.special.constructor.cpp',
			'keyword.cmake',
		],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: ['keyword.control.from', 'entity.other.keyframe-offset'],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: [
			'entity.name.function',
			'support.type.pthread',
			'entity.name.scope-resolution.function',
			'meta.block.class.cpp meta.body.class.cpp meta.block.class.cpp entity.name.function.definition.special.constructor.cpp',
		],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: [
			'keyword.other.package',
			'keyword.other.class',
			'keyword.other.namespace',
			'keyword.other.enum',
			'keyword.other.operator-decl',
			'keyword.other.interface',
			'keyword.preprocessor',
			'keyword.other.delegate',
			'storage.type.cpp',
			'storage.type.namespace',
			'storage.modifier',
			'storage.type.modifier.cpp',
			'storage.type.language.primitive.cpp',
			'storage.type.built-in.primitive.c',
			'storage.type.struct',
			'storage.type.template',
			'support.type.built-in.posix-reserved.pthread',
		],
		settings: {
			foreground: '#A78CFA',
		},
	},
	{
		scope: ['keyword.control.default'],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: [
			'support.type.primitive',
			'support.type.builtin',
			'entity.name.type.instance',
			'entity.name.type.alias.ts',
			'storage.type.string',
			'storage.type.numeric',
			'storage.type.boolean',
			'storage.type.primitive',
			'meta.type.annotation',
			'meta.method.identifier',
			'entity.other.inherited-classentity.name.type.interface',
			'meta.return.type',
			'meta.type.parameters',
			'keyword.interface',
			'storage.type.generic',
			'entity.name.type.interface',
			'entity.other.inherited-class',
			'storage.type.cs',
			'entity.name.type.struct',
			'keyword.type',
			'entity.name.type.type-parameter',
			'storage.type.object.array',
			'storage.type.java',
			'entity.name.type.delegate',
			'storage.type.c',
			'support.class.dart',
			'meta.declaration.dart',
			'meta.type.declaration',
			'meta.block.ts',
			'meta.class-struct-block.cpp entity.name.type.cpp',
			'support.type.graphql',
			'meta.function.definition.parameters storage.type.built-in.primitive.c',
			'meta.function.definition.parameters.cpp storage.type.language.primitive.cpp',
			'meta.function.definition.parameters.cpp storage.type.struct.cpp',
			'meta.function.constructor.cpp storage.type.language.primitive.cpp',
			'storage.type.template.argument',
		],
		settings: {
			foreground: '#FF80BD',
		},
	},
	{
		scope: ['entity.name.type.js', 'new.expr.ts'],
		settings: {
			foreground: '#6495EE',
		},
	},
	{
		scope: ['string', 'punctuation.definition.string.begin.html', 'punctuation.definition.string.end.html'],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['constant.language', 'constant.language.boolean', 'keyword.operator.expression.void'],
		settings: {
			fontStyle: 'italic',
			foreground: '#94F',
		},
	},
	{
		scope: [
			'constant.numeric',
			'keyword.other.unit',
			'support.constant.dom',
			'constant.other.character-class.regexp',
			'meta.attribute.id.html entity.other.attribute-name.html',
			'entity.other.attribute-name.id',
			'support.constant.math',
			'support.constant.property.math',
			'support.constant.ext',
			'support.constant.core',
			'variable.other.enummember',
			'constant.other.enum',
			'entity.name.variable.enum-member',
			'entity.name.variable.preprocessor.symbol',
			'entity.name.function.preprocessor.c',
			'entity.other.keyframe-offset.percentage.css',
			'variable.other.constant',
			'constant.other.js',
		],
		settings: {
			foreground: '#FF9070',
		},
	},
	{
		scope: ['markup.bold.markdown', 'punctuation.definition.bold.markdown'],
		settings: {
			foreground: '#E4BF7F',
		},
	},
	{
		scope: ['punctuation.definition.markdown'],
		settings: {
			foreground: '#676E95',
		},
	},
	{
		scope: ['beginning.punctuation.definition.quote.markdown'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['fenced_code.block.language'],
		settings: {
			foreground: '#FF6AB3',
		},
	},
	{
		scope: ['entity.name.tag', 'punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: [
			'text.html.basic',
			'text.html.markdown',
			'meta.paragraph.markdown',
			'text.html.php',
			'text.html.derivative',
			'text.html.wxml',
			'text.xml',
			'text.html',
			'source.js',
			'source.ignore',
			'source.nginx',
			'text',
		],
		settings: {
			foreground: '#C0C7D3',
		},
	},
	{
		scope: ['meta.jsx.children'],
		settings: {
			foreground: '#8792AA',
		},
	},
	{
		scope: [
			'punctuation.section.block.begin.bracket',
			'punctuation.section.block.end.bracket',
			'punctuation.definition.block',
			'punctuation.section.embedded.begin',
			'punctuation.section.embedded.end',
			'meta.brace',
			'punctuation.bracket',
			'punctuation.definition.parameters.ruby',
			'punctuation.definition.parameters.begin',
			'punctuation.definition.parameters.end',
			'punctuation.section.function.begin.bracket',
			'punctuation.section.function.end.bracket',
			'punctuation.definition.typeparameters.begin',
			'punctuation.definition.typeparameters.end',
			'punctuation.section.array.end',
			'punctuation.section.array.begin',
			'punctuation.definition.array.end',
			'punctuation.definition.array.begin',
			'punctuation.section.scope.end',
			'punctuation.section.scope.begin',
			'meta.parameter.object-binding-pattern',
			'punctuation.definition.binding-pattern.object',
			'punctuation.definition.arguments.end',
			'punctuation.definition.arguments.begin',
			'punctuation.definition.begin.bracket',
			'punctuation.definition.end.bracket',
			'punctuation.curlybrace.open',
			'punctuation.curlybrace.close',
			'punctuation.parenthesis.open',
			'punctuation.parenthesis.close',
			'punctuation.squarebracket.open',
			'punctuation.squarebracket.close',
			'punctuation.section.method.begin',
			'punctuation.section.method.end',
			'punctuation.section.class.begin',
			'punctuation.section.class.end',
			'punctuation.section.enum.begin',
			'punctuation.section.enum.end',
			'punctuation.section.parameters.begin.bracket',
			'punctuation.section.parameters.end.bracket',
			'punctuation.section.parens.begin.bracket',
			'punctuation.section.parens.end.bracket',
			'punctuation.section.arguments.begin.bracket',
			'punctuation.section.arguments.end.bracket',
			'punctuation.separator.arguments',
			'punctuation.section.function.ruby',
			'punctuation.definition.dictionary.begin',
			'punctuation.definition.dictionary.end',
			'punctuation.separator.dictionary.pair',
			'punctuation.separator.array',
			'punctuation.definition.map.begin.bracket',
			'punctuation.definition.map.end.bracket',
			'punctuation.section.function',
			'punctuation.definition.parameters.end.bracket',
			'punctuation.definition.parameters.begin.bracket',
			'punctuation.section.property-list.begin.bracket',
			'punctuation.section.property-list.end.bracket',
			'punctuation.definition.list.begin',
			'punctuation.definition.list.end',
			'punctuation.definition.binding-pattern.array',
			'punctuation.section.embedded.end.ruby source.ruby',
			'punctuation.section.embedded.begin.ruby source.ruby',
			'source.cs',
			'punctuation.definition.generic.begin.html',
			'punctuation.definition.generic.end.html',
			'punctuation.definition.function.body.begin.bracket',
			'punctuation.definition.function.body.end.bracket',
			'punctuation.definition.modules.begin',
			'punctuation.definition.modules.end',
			'constant.character.brace',
			'punctuation.operation.graphql',
			'punctuation.definition.optional.arguments.begin',
			'punctuation.definition.optional.arguments.end',
			'punctuation.definition.brackets',
			'punctuation.math.begin.bracket',
			'punctuation.math.end.bracket',
			'punctuation.section.angle-brackets',
			'keyword.operator.delete.array.bracket',
		],
		settings: {
			foreground: '#838FA7',
		},
	},
	{
		scope: [
			'meta.brace.round.css',
			'punctuation.section.property-list.begin.bracket.curly.css',
			'punctuation.section.property-list.end.bracket.curly.css',
			'punctuation.section.function.begin.bracket.round.css',
			'punctuation.section.function.end.bracket.round.css',
			'punctuation.section.media.begin.bracket.curly.css',
			'punctuation.section.media.end.bracket.curly.css',
			'punctuation.definition.parameters.begin.bracket.round.css',
			'punctuation.definition.parameters.end.bracket.round.css',
			'punctuation.section.keyframes.begin.bracket.curly.css',
			'punctuation.section.keyframes.end.bracket.curly.css',
		],
		settings: {
			foreground: '#838FA7CC',
		},
	},
	{
		scope: [
			'support.constant.color.w3c-standard-color-name',
			'constant.other.color.rgb-value.hex',
			'constant.other.rgb-value',
			'support.constant.color.w3c-extended-color-name.css',
		],
		settings: {
			foreground: '#B0B7C3',
		},
	},
	{
		scope: [
			'support.type.property-name.css',
			'support.type.vendored.property-name.css',
			'meta.at-rule.each.scss support.constant.property-value.css',
			'source.css.scss',
		],
		settings: {
			foreground: '#8A97C3',
		},
	},
	{
		scope: ['meta.property-name.css'],
		settings: {
			foreground: '#676E95',
		},
	},
	{
		scope: ['entity.other.attribute-name', 'invalid.deprecated.entity.other.attribute-name'],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: ['entity.other.attribute-name.class.mixin'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: [
			'entity.other.attribute-name.class.css',
			'selector.sass',
			'entity.other.attribute-name.parent-selector.css',
			'meta.at-rule.extend.scss',
		],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['entity.other.attribute-name.pseudo-class.css', 'support.type.property-name.media.css', 'support.constant.media.css'],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: ['entity.other.attribute-name.pseudo-element.css'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['entity.name.section.markdown', 'markup.heading', 'punctuation.definition.heading.markdown'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['markup.italic', 'punctuation.definition.italic'],
		settings: {
			fontStyle: 'italic',
			foreground: '#C57BDB',
		},
	},
	{
		scope: ['beginning.punctuation.definition.list.markdown', 'beginning.punctuation.definition.quote.markdown'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['markup.inline.raw.markdown'],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['markup.quote.markdown'],
		settings: {
			foreground: '#676E95',
		},
	},
	{
		scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown', 'punctuation.definition.metadata.markdown'],
		settings: {
			foreground: '#96D0FF',
		},
	},
	{
		scope: [
			'string.other.link.title.markdown',
			'string.other.link.description.markdown',
			'punctuation.definition.string.begin.markdown',
			'punctuation.definition.string.end.markdown',
		],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['string.regexp'],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['keyword.other'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: ['constant.character.escape'],
		settings: {
			foreground: '#56B7C3',
		},
	},
	{
		scope: ['invalid.illegal', 'invalid.illegal.expected-dictionary-separator.json', 'invalid.broken', 'invalid.deprecated'],
		settings: {
			foreground: '#8E99B1',
		},
	},
	{
		scope: ['source.json meta.structure.dictionary.json > string.quoted.json'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: [
			'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
			'source.json meta.structure.array.json > value.json > string.quoted.json',
			'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
			'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
		],
		settings: {
			foreground: '#7DD99D',
		},
	},
	{
		scope: ['support.type.property-name.json'],
		settings: {
			foreground: '#E06C75',
		},
	},
	{
		scope: [
			'variable.language.self',
			'variable.language.this',
			'variable.language.super',
			'variable.language.special.self.python',
			'variable.language.dart',
			' keyword.operator.delete',
			' keyword.operator.expression.delete',
		],
		settings: {
			foreground: '#F02B77',
		},
	},
	{
		scope: ['token.info-token'],
		settings: {
			foreground: '#6494ed',
		},
	},
	{
		scope: ['token.warn-token'],
		settings: {
			foreground: '#F5625C',
		},
	},
	{
		scope: ['token.error-token'],
		settings: {
			foreground: '#E51400',
		},
	},
	{
		scope: ['token.debug-token'],
		settings: {
			foreground: '#CF68E1',
		},
	},
	{
		scope: [
			'meta.var.expr',
			'storage.type.function',
			'keyword.function',
			'keyword.var',
			'keyword.const',
			'keyword.channel',
			'keyword.struct',
			'keyword.other.struct',
			'keyword.map',
			'keyword.reserved',
			'storage.type.class',
			'storage.type.php',
			'storage.type.interface',
			'storage.type.object',
			'storage.type.primitive.dart',
			'keyword.declaration',
			'keyword.operator.closure.dart',
			'storage.type.enum',
			'storage.type.type',
			'keyword.control.at-rule.function',
			'keyword.control.at-rule.mixin',
			'storage.type.const',
		],
		settings: {
			foreground: '#9D7EF9',
		},
	},
	{
		scope: [
			'punctuation.definition.block.tag.jsdoc',
			'storage.type.class.jsdoc',
			'keyword.ccontrol.at-rule.keyframes.css',
			'keyword.control.at-rule.keyframes.css',
		],
		settings: {
			foreground: '#A78CFA',
		},
	},
	{
		scope: ['support.module.node.js', 'support.type.object.module.js', 'support.type.object.module.ts', 'support.module.node.ts'],
		settings: {
			foreground: '#A78CFA',
		},
	},
	{
		scope: [
			'markup.inline.raw.string.markdown',
			'punctuation.definition.raw.markdown',
			'markup.fenced_code.block.markdown',
			'markup.fenced_code.block.markdown punctuation',
			'markup.raw.block.markdown',
		],
		settings: {
			foreground: '#B78AFF',
		},
	},
	{
		scope: ['markup.underline'],
		settings: {
			fontStyle: 'underline',
		},
	},
	{
		scope: ['markup.strikethrough'],
		settings: {
			fontStyle: 'strikethrough',
		},
	},
];
