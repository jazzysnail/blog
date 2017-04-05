'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _reactDocumentTitle2.default,
    { title: 'Not Found | BiSheng Theme One' },
    _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(
        'h1',
        { className: 'entry-title' },
        '404 Not Found!'
      )
    )
  );
};