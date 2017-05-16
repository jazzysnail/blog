import React from 'react';

// style
import '../static/style';

// components
import Layout from './layout';

export default function (props) {

  const postName = props.router.params.post;
  const { toReactComponent } = props.utils;
  const pageData = props.pageData;

  console.log(pageData)

  let Content = function() {
    return React.createElement(
      'div',
      { className: 'entry-content' },
      toReactComponent(pageData.content)
    )
  }
  return (
    <Layout themeConfig={props.themeConfig}>
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