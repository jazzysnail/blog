const path = require('path');

module.exports = {
  theme: './bisheng-theme-biu',
  htmlTemplate: './bisheng-theme-biu/static/template.html',
  themeConfig: {
    home: '/',
    logo: 'http://oaul0t4t1.bkt.clouddn.com/imgs/blog-logo.jpg',
    startyear: '2016',
    nav: [{
      label: 'Journal',
      uri: '/',
      disabled: true
    },{
      label: 'Artwork',
      uri: '/',
      disabled: true
    },{
      label: 'JS',
      uri: '/',
      disabled: true
    },{
      label: 'About',
      uri: '/',
      disabled: true
    },{
      label: 'Vita',
      uri: '/',
      disabled: true
    }],
    linkup: [{
      link: 'http://github.com/jazzysnail',
      icon: 'github'
    },{
      link: 'http://2017.zcool.com.cn/u/2061043',
      icon: 'zcool'
    }]
  }
}
