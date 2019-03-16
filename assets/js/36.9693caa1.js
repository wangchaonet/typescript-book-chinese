(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{308:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"编译上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译上下文")]),t._v(" "),a("p",[t._v("编译上下文算是一个比较花哨的术语，它用来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文也包含了有哪些编译选项正在使用。定义这种逻辑分组，一个比较好的方式是使用 "),a("code",[t._v("tsconfig.json")]),t._v(" 文件。")]),t._v(" "),a("h2",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json","aria-hidden":"true"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),a("h3",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("p",[t._v("开始使用 "),a("code",[t._v("tsconfig.json")]),t._v(" 是一件比较容易的事，你仅仅需要写下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("例如在你项目的根目录下创建一个空 json 文件。通过此种方式，TypeScript 将会把此目录下（和子目录）的所有 "),a("code",[t._v(".ts")]),t._v(" 文件做为编译上下文的一部分，它还会包含一部分默认的编译选项。")]),t._v(" "),a("h3",{attrs:{id:"编译选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译选项")]),t._v(" "),a("p",[t._v("你可以通过 "),a("code",[t._v("compilerOptions")]),t._v(" 来定制你的编译选项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基本选项 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要包含在编译中的库文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowJs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许编译 javascript 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checkJs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报告 javascript 文件中的错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preserve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成相应的 '.d.ts' 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成相应的 '.map' 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将输出文件合并为一个文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定输出目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来控制输出目录结构 --outDir.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除编译后的所有的注释")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noEmit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不生成输出文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 tslib 导入辅助工具函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isolatedModules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 严格的类型检查选项 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用所有严格类型检查选项")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在表达式和声明上有隐含的 any类型时报错")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用严格的 null 检查")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noImplicitThis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当 this 表达式值为 any 类型的时候，生成一个错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以严格模式检查每个模块，并在每个文件里加入 'use strict'")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 额外的检查 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noUnusedLocals"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有未使用的变量时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noUnusedParameters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有未使用的参数时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noImplicitReturns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并不是所有函数里的代码都有返回值时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noFallthroughCasesInSwitch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 模块解析选项 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于解析非相对模块名称的基目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块名到基于 baseUrl 的路径映射的列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rootDirs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根文件夹列表，其组合内容表示项目运行时的结构内容")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typeRoots"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含类型声明的文件列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"types"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要包含的类型声明文件名列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowSyntheticDefaultImports"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许从没有设置默认导出的模块中默认导入。")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Source Map Options */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceRoot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定调试器应该找到 TypeScript 文件而不是源文件的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapRoot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定调试器应该找到映射文件而不是生成文件的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inlineSourceMap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inlineSources"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他选项 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用装饰器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"emitDecoratorMetadata"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为装饰器提供元数据的支持")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这些（或者更多）编译选项，将会在稍后讨论。")]),t._v(" "),a("h3",{attrs:{id:"typescript-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-编译","aria-hidden":"true"}},[t._v("#")]),t._v(" TypeScript 编译")]),t._v(" "),a("p",[t._v("好的 IDE 支持对 TypeScript 的即时编译。但是，如果你想在使用 "),a("code",[t._v("tsconfig.json")]),t._v(" 时从命令行手动运行 TypeScript 编译器，你可以通过以下方式：")]),t._v(" "),a("ul",[a("li",[t._v("运行 tsc，它会在当前目录或者是父级目录寻找 "),a("code",[t._v("tsconfig.json")]),t._v(" 文件。")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("tsc -p ./path-to-project-directory")]),t._v(" 。当然，这个路径可以是绝对路径，也可以是相对于当前目录的相对路径。")])]),t._v(" "),a("p",[t._v("你甚至可以使用 "),a("code",[t._v("tsc -w")]),t._v(" 来启用 TypeScript 编译器的观测模式，在检测到文件改动之后，它将重新编译。")]),t._v(" "),a("h2",{attrs:{id:"哪个文件？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪个文件？","aria-hidden":"true"}},[t._v("#")]),t._v(" 哪个文件？")]),t._v(" "),a("p",[t._v("你也可以显式指定需要编译的文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./some/file.ts"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者，你可以使用 "),a("code",[t._v("include")]),t._v(" 和 "),a("code",[t._v("exclude")]),t._v(" 选项来指定需要包含的文件，和排除的文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./folder"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./folder/**/*.spec.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./folder/someSubFolder"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("globs")]),t._v("："),a("code",[t._v("**/*")]),t._v(" （一个示例用法："),a("code",[t._v("some/folder/**/*")]),t._v("）意味着匹配所有的文件夹和所有文件（扩展名为 "),a("code",[t._v(".ts/.tsx")]),t._v("，当开启了 "),a("code",[t._v("allowJs: true")]),t._v(" 选项时，扩展名可以是 "),a("code",[t._v(".js/.jsx")]),t._v("）。")])])])},[],!1,null,null,null);s.default=e.exports}}]);