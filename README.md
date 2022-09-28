# elepub web build

多看漫画生成器，[elepub](https://github.com/taiyuuki/elepub)的Web版，可以将图片打包成适配多看的EPUB，建议用于条漫，传统页漫虽然也能用，但如果存在跨页，阅读体验不会好。

🚀[在线地址](https://taiyuuki.github.io/elepub-web-build/)

- 支持PWA，采取缓存优先策略，离线可用，支持将网页安装到设备（PC或手机）桌面。
- 保存到本地也能用，但需要挂载本地服务器（可以使用VS Code的Live server插件打开），否则会跨域报错。
- 请务必使用Chrome浏览器，文件大小不要超过2GB（参考[FileSaver](https://github.com/eligrey/FileSaver.js)）。
- 文件较多、较大时，可能需要等待较长时间。
  - 文件太大的话，建议用[桌面版](https://github.com/taiyuuki/elepub)，没有文件大小的限制，速度也更快。

