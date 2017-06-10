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
      uri: '/tag/Journal',
      disabled: true,
      mobile: true
    },{
      label: 'Artwork',
      uri: '/tag/Art',
      disabled: true,
      mobile: false
    },{
      label: 'JS',
      uri: '/tag/JS',
      disabled: true,
      mobile: true
    },{
      label: 'About',
      uri: '/about'
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
