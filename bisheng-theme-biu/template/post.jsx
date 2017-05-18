import React from 'react';

// style
import '../static/style';

// components
import Layout from './layout';

export default function (props) {

  const postName = props.router.params.post;
  const { toReactComponent } = props.utils;
  const pageData = props.pageData;

  let Content = function() {
    return React.createElement(
      'div',      { className: 'entry-content' },
      toReactComponent(pageData.content)
    )
  }

  let Tags = pageData.meta.tags.map((val,index) => {
    return <a href="/" key={val + index}>{val}</a>
  });

  return (
    <Layout themeConfig={props.themeConfig}>

      <div className="post-info">
        <i className="mineicon mineicon-clock"></i>
        <time>{pageData.meta.date.slice(0, 10)}</time>
        <i className="mineicon mineicon-sale"></i>
        <span className="tags">{Tags}</span>
      </div>

      <h1>{pageData.meta.title}</h1>
      <Content />
      <div className="post-footer">
        <a className="previous">← previous post</a>
        <span>⌘+e back to news  ⌘+enter post comment</span>
        <a className="next">next post →</a>
      </div>
    </Layout>
  )
}