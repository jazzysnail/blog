'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('bisheng/router');

var _collect = require('bisheng/collect');

var _collect2 = _interopRequireDefault(_collect);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Post = function Post(props) {
  var pageData = props.pageData,
      utils = props.utils;
  var meta = pageData.meta,
      description = pageData.description,
      content = pageData.content;

  return _react2.default.createElement(
    _reactDocumentTitle2.default,
    { title: meta.title + ' | BiSheng Theme One' },
    _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(
        'div',
        { className: 'hentry' },
        _react2.default.createElement(
          'h1',
          { className: 'entry-title' },
          meta.title
        ),
        !description ? null : _react2.default.createElement(
          'div',
          { className: 'entry-description' },
          utils.toReactComponent(description)
        ),
        _react2.default.createElement(
          'div',
          { className: 'entry-content' },
          utils.toReactComponent(content)
        ),
        _react2.default.createElement(
          'div',
          { className: 'entry-meta' },
          _react2.default.createElement(
            'time',
            { className: 'updated' },
            meta.publishDate.slice(0, 10) + ' '
          ),
          !meta.tags ? null : _react2.default.createElement(
            'span',
            null,
            'in ',
            _react2.default.createElement(
              'span',
              { className: 'entry-tags' },
              meta.tags.map(function (tag, index) {
                return _react2.default.createElement(
                  _router.Link,
                  { to: '/tags#' + tag, key: index },
                  tag
                );
              })
            )
          ),
          !meta.source ? null : _react2.default.createElement(
            'a',
            { className: 'source sep', href: meta.source },
            meta.source
          )
        )
      )
    )
  );
};

exports.default = (0, _collect2.default)(function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(nextProps) {
    var pageData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (nextProps.pageData) {
              _context.next = 2;
              break;
            }

            throw 404;

          case 2:
            _context.next = 4;
            return nextProps.pageData();

          case 4:
            pageData = _context.sent;
            return _context.abrupt('return', { pageData: pageData });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())(Post);

// TODO
// {%- if config.disqus %}
// {%- include "_disqus.html" %}
// {%- endif %}
// {%- if config.duoshuo %}
// {%- include "_duoshuo.html" %}
// {%- endif %}