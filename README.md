# elepub web build

多看漫画生成器，可以将图片打包成多看阅读支持的EPUB格式，建议用于条漫，传统页漫不推荐使用。

- [elepub](https://github.com/taiyuuki/elepub)的Web版。
- [在线生成器](https://taiyuuki.github.io/elepub-web-build/)
- 保存到本地也能用，但需要挂载到本地服务器（可以使用VS Code的Live server插件打开），否则会跨域报错。
- 请使用Chrome浏览器，文件大小不要超过2GB（参考[FileSaver](https://github.com/eligrey/FileSaver.js)），为了预览时的渲染效率，文件较多、较大时，生成epub可能需要等待较长时间，这种情况建议使用[elepub](https://github.com/taiyuuki/elepub)，效率相对会高一些。
  - 不要使用IE。
  - 其他浏览器也尽量别用，实测效率大都低于Chrome。

