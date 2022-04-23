# elepub web build

多看漫画生成器，可以将图片打包成多看阅读支持的EPUB格式，建议用于条漫，传统页漫不推荐使用。

* [在线地址](https://taiyuuki.github.io/elepub-web-build/)
* 相当于[elepub](https://github.com/taiyuuki/elepub)的Web版，elepub的核心依赖是[Nodepub](https://github.com/kcartlidge/nodepub)，它只能在Node.js环境下运行，我将它重构为浏览器能用的版本，但效率可能会略低于elepub。
* 保存到本地也能用，但需要挂载到本地服务器（可以使用VS Code的Live server插件打开），否则会跨域报错。
* 请使用Chrome浏览器，文件大小不要超过2GB（参考[FileSaver](https://github.com/eligrey/FileSaver.js)）。
  * 不要使用IE。
  * 其他浏览器也尽量别用，实测效率大都低于Chrome。