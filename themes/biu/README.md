##  安装 Installation

``` bash
hexo init <folder>
cd <folder>
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
cd themes
git clone https://github.com/jazzysnail/biu.git
```

##  使用 Usage
修改hexo根目录下 `_config.yml` 的 `theme` 属性配置为 `biu`:

open up `_config.yml` in hexo root directory and set `theme` to `'biu'`:

``` yaml
theme: biu
```

##  更新 Update

``` bash
cd themes/biu
git pull
```
##  文档 Docs
后期将会加入

Late will be added


##  版权 License

The MIT License ([MIT](https://opensource.org/licenses/MIT))

Copyright (c) 2016 leon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
