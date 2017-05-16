const path = require('path');

module.exports = {
  exclude: /should-be-ignore/,
  theme: './bisheng-theme-biu',
  htmlTemplate: './bisheng-theme-biu/static/template.html',
  
  themeConfig: {
    home: '/',
    hue: 'candy',
    title: 'jazzysnail',
    startyear: '2016',
    nav: [{
      label: 'Journal',
      uri: 'http://jazzysnail.github.io/blog'
    },{
      label: 'Art',
      uri: 'http://jazzysnail.github.io/blog'
    },{
      label: 'JS',
      uri: 'http://jazzysnail.github.io/blog'
    },{
      label: 'About',
      uri: 'http://jazzysnail.github.io/blog'
    },{
      label: 'Findme',
      uri: 'http://jazzysnail.github.io/blog'
    }]
  },

  root: '/blog/'
}
