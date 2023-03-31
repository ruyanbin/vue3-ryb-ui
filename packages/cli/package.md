"name" 字段定义包的名称。发布到 NPM 注册表时，这是软件包将在其中显示的名称。它不能超过 214 个字符，只能是小写字母，并且必须是 URL 安全的（允许连字符和下划线，但 URL 中不允许使用空格或其他字符）
"main" 定义项目入口文件，通常是用于启动项目的文件
“description“当用户搜索 NPM 注册表时，该字符串用于帮助了解软件包。这应该是软件包的简短摘要。就是一个项目的简单的文档
“license“字段的值通常是许可证的标识符代码——例如 MIT 或 ISC 之类的字符串，它们代表 MIT 许可证和 ISC 许可证。如果你不想提供许可证，或者明确不想授予使用私有或未发布的软件包的权限，则可以将 UN

“author“和“contributors“它们都是 people 字段，可以是"Name"格式的字符串，也可以是具有 name，email，url 字段的对象。email 和 url 都是可选的。这些字段是列出公共项目的联系人以及与贡献者共享信用的有用方法
“keywords“字段是一个字符串数组，其作用与描述相似。 NPM 注册表会为该字段建立索引，能够在有人搜索软件包时帮助找到它们。数组中的每个值都是与你的程序包关联的一个关键字
“scripts“字段是 package.json 中的另一种元数据功能。scripts 属性接受一个对象，它的值为可以通过 npm run 运行的脚本，其键为实际运行的命令。这些通常是终端命令，把它们放入 scripts 字段，可以既可以记录它们又可以轻松地重用
”repository“可以通过提供 repository 字段来记录项目代码所在的资源库。该字段是一个对象，用于定义源代码所在的 url 及其使用的版本控制系统的类型。对于开源项目，可能是以 Git 作为版本控制系统的 GitHub 或 Bitbucket
“dependencies“这是 package.json 中最重要的字段之一，它列出了项目使用的所有依赖项（项目所依赖的外部代码）。使用 npm CLI 安装软件包时，它将下载到你的 node_modules/文件夹中，并将一个条目添加到你的依赖项属性中，注意软件包的名称和已安装的版本
“devDependencies“这里列出的包仅在开发期间需要，而在生产中不需要
“browserslist“用于告知要支持哪些浏览器（及其版本）。 Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器
“private“如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上。无法通过 npm publish 发布代码
type“值为'moduel'则当作 es 模块处理；值为'commonjs'则被当作 commonJs 模块处理，如果没有定义则默认 commonJs 规范处理。不管 type 定义什么值，.mjs 的文件都按照 es 模块来处理，.cjs 的文件都按照 commonJs 模块来处理
