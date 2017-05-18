import React from 'react';
// style
import '../static/style';
// components
import Layout from './layout';

export default function (props) {
  const postName = props.router.params.post;
  const { toReactComponent } = props.utils;
  const pageData = props.pageData;
  // 日期
  const Date = function(props) {
    if (props.date) {
      return (
        <span>
          <i className="mineicon mineicon-clock"></i>
          <time>{props.date.slice(0, 10)}</time>
        </span>
      )
    }else{
      return null
    }
  }
  // 标签
  const Tags = function(props) {
    if (props.tags) {
      return (
        <span>
          <i className="mineicon mineicon-sale"></i>
          <span className="tags">
            {
              props.tags.map((val,index) => {
                return <a href="/" key={val + index}>{val}</a>
              })
            }
          </span>
        </span>
      )
    }else{
      return null
    }
  }
  // 内容
  const Content = function(props) {
    return React.createElement(
      'div',
      { className: 'entry-content' },
      toReactComponent(pageData.content)
    )
  }
  // 分页
  const Pager = function(props) {
    return (
      <div className="post-footer">
        <a className="previous">
          <i className="mineicon mineicon-arrowleft"></i>
          &nbsp;prev
        </a>
        <span>⌘+e back to news  ⌘+enter post comment</span>

        <a className="next">next&nbsp;
          <i className="mineicon mineicon-arrowright"></i>
        </a>
      </div>
    )
  }

  return (
    <Layout themeConfig={props.themeConfig}>
      <div className="post-info">
        <Date date={pageData.meta.date}/>
        <Tags tags={pageData.meta.tags} />
      </div>
      <h1>{pageData.meta.title}</h1>
      <Content />
      <Pager />
    </Layout>
  )
}