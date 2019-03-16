(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),e("h2",{attrs:{id:"为什么我导入的模块在编译后被删除了？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么我导入的模块在编译后被删除了？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我导入的模块在编译后被删除了？")]),t._v(" "),e("blockquote",[e("p",[t._v("我写了一些这样的代码")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" someModule "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./myMod'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" someModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SomeType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* something */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("有这样的输出")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expected to see \"var someModule = require('./myMod');\" here!")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* something */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("TypeScript")]),t._v(" 假定导入的模块没有副作用，所以它移除了不用于任何表达式的模块导入。")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v('import "mod"')]),t._v(" 语法来强制加载模块")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./myMod'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For side effects")]),t._v("\n")])])]),e("p",[t._v("你也可以简单调用模块，这是最常见的解决办法。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" someModule "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./myMod'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsomeModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used for side effects")]),t._v("\n")])])]),e("h2",{attrs:{id:"为什么不跨模块文件合并命名空间？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不跨模块文件合并命名空间？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么不跨模块文件合并命名空间？")]),t._v(" "),e("p",[t._v("TODO：本小节内容请查看："),e("a",{attrs:{href:"https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules"),e("OutboundLink")],1)])])},[],!1,null,null,null);s.default=r.exports}}]);