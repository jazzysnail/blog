const path = require('path');

module.exports = {
  exclude: /should-be-ignore/,
  theme: './theme',
  htmlTemplate: './theme/static/template.html',

  
  themeConfig: {
    home: '/',
    sitename: "mineblog",
    tagline: 'mineblog with bisheng',
    navigation: [{
      title: 'archive',
      link: '/archive'
    },{
      title: 'github',
      link: '/github'
    }],
    footer: 'Page building...',
    hideBisheng: true,
    github: 'https://github.com/benjycui/bisheng',
  },


  root: '/blog/'
};
