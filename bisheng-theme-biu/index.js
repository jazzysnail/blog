'use strict';
const path = require('path');

module.exports = {
  lazyLoad: false,

  // pick: {
  //   posts: function posts(markdownData) {
  //     return {
  //       meta: markdownData.meta,
  //       description: markdownData.description
  //     };
  //   }
  // },

  plugins: [
    path.join(__dirname, '..', 'node_modules', 'bisheng-plugin-description')
  ],

  routes: [{
    path: '/',
    component: './template/home'
  }, {
    path: '/posts/:post',
    dataPath: '/:post',
    component: './template/post'
  }]
};