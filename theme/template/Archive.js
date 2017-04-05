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

function getTime(date) {
  return new Date(date).getTime();
}

exports.default = function (props) {
  var toReactComponent = props.utils.toReactComponent;
  var posts = props.picked.posts.sort(function (a, b) {
    return getTime(b.meta.publishDate) - getTime(a.meta.publishDate);
  });

  var year = NaN;
  var entryList = [];
  posts.forEach(function (_ref, index) {
    var meta = _ref.meta,
        description = _ref.description;

    var publishYear = meta.publishDate.slice(0, 4);
    if (year !== publishYear) {
      year = publishYear;
      entryList.push(_react2.default.createElement(
        'a',
        { className: 'item-year', href: '#' + publishYear, key: publishYear, id: publishYear },
        publishYear
      ));
    }

    entryList.push(_react2.default.createElement(
      'div',
      { className: 'item', key: index },
      _react2.default.createElement(
        'h2',
        { className: 'item-title', id: meta.title },
        _react2.default.createElement(
          'time',
          null,
          meta.publishDate.slice(0, 10) + ' '
        ),
        _react2.default.createElement(
          _router.Link,
          { to: '/' + meta.filename.replace(/\.md$/i, '') },
          meta.title
        )
      ),
      !description ? null : _react2.default.createElement(
        'div',
        { className: 'item-description' },
        toReactComponent(description)
      )
    ));
  });
  return _react2.default.createElement(
    _reactDocumentTitle2.default,
    { title: 'leon\'s blog' },
    _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(
        'h1',
        { className: 'entry-title' },
        'Archive'
      ),
      _react2.default.createElement(
        'div',
        { className: 'entry-list' },
        entryList
      )
    )
  );
};

// TODO
// <div class="pagination">
//   {%- if pagination.has_prev %}
//   <a class="newer" href="{{ pagination_url(pagination.prev_num) }}">Newer</a>
//   {%- endif %}

//   {%- if pagination.has_next %}
//   <a class="older" href="{{ pagination_url(pagination.next_num) }}">Older</a>
//   {%- endif %}
// </div>