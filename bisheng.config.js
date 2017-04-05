const path = require('path');

module.exports = {
  exclude: /should-be-ignore/,
  theme: './theme',
  // htmlTemplate: './theme/static/template.html',
  themeConfig: {
    home: '/blog/',
    sitename: 'One',
    tagline: 'The one theme for bisheng',
    // navigation: [{
    //   title: 'BiSheng',
    //   link: 'https://github.com/benjycui/bisheng',
    // }],
    // footer: 'Copyright and so on...',
    // hideBisheng: true,
    github: 'https://github.com/benjycui/bisheng',
  },
  root: '/blog/'
};
