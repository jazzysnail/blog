'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('bisheng/router');

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTags(posts) {
  var tags = {};
  Object.keys(posts).forEach(function (filename) {
    var post = posts[filename];
    var postTags = post.meta.tags;
    if (postTags) {
      postTags.forEach(function (tag) {
        if (tags[tag]) {
          tags[tag].push(post);
        } else {
          tags[tag] = [post];
        }
      });
    }
  });
  return tags;
}

exports.default = function (props) {
  var toReactComponent = props.utils.toReactComponent;
  var tags = getTags(props.picked.posts);

  return _react2.default.createElement(
    _reactDocumentTitle2.default,
    { title: 'Tag Cloud | BiSheng Theme One' },
    _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(
        'h1',
        { className: 'entry-title' },
        'Tags'
      ),
      _react2.default.createElement(
        'div',
        { className: 'tagcloud' },
        Object.keys(tags).map(function (tag, index) {
          return _react2.default.createElement(
            'a',
            { href: '#' + tag, key: index },
            tag,
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'count' },
              tags[tag].length
            )
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'entry-list' },
        Object.keys(tags).map(function (tag) {
          return [_react2.default.createElement(
            'a',
            { className: 'item-tag', href: '#' + tag, id: tag, key: 'tag' },
            tag
          )].concat(tags[tag].map(function (_ref, index) {
            var meta = _ref.meta,
                description = _ref.description;
            return _react2.default.createElement(
              'div',
              { className: 'item', key: index },
              _react2.default.createElement(
                'h2',
                { className: 'item-title' },
                _react2.default.createElement(
                  'time',
                  null,
                  meta.publishDate.slice(0, 10)
                ),
                _react2.default.createElement(
                  _router.Link,
                  { to: '' + meta.filename.replace(/\.md/, '') },
                  meta.title
                )
              ),
              !description ? null : _react2.default.createElement(
                'div',
                { className: 'item-description' },
                toReactComponent(description)
              )
            );
          }));
        })
      )
    )
  );
};