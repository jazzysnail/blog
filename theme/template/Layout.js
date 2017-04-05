'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('bisheng/router');

require('../static/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var themeConfig = _ref.themeConfig,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'brand' },
          _react2.default.createElement(
            _router.Link,
            { className: 'home', to: themeConfig.home },
            themeConfig.sitename
          ),
          !themeConfig.tagline ? null : _react2.default.createElement(
            'span',
            null,
            '- ',
            _react2.default.createElement(
              'span',
              { className: 'tagline' },
              themeConfig.tagline
            )
          )
        ),
        !themeConfig.navigation ? null : _react2.default.createElement(
          'div',
          { className: 'menu', role: 'navigation' },
          themeConfig.navigation.map(function (item, index) {
            return _react2.default.createElement(
              _router.Link,
              { to: item.link, key: index },
              item.title
            );
          })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'document yue' },
      children
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      themeConfig.footer ? themeConfig.footer : null,
      themeConfig.hideBisheng ? null : _react2.default.createElement(
        'p',
        { className: 'copyright' },
        'powered by ',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/benjycui/bisheng' },
          'BiSheng'
        )
      )
    ),
    !themeConfig.github ? null : _react2.default.createElement(
      'div',
      { className: 'github' },
      _react2.default.createElement(
        'a',
        { className: 'github-link', href: themeConfig.github },
        'Fork me on GitHub'
      )
    )
  );
};