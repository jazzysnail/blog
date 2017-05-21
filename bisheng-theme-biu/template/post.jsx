import React from 'react';
// style
import '../static/style';
// components
import Layout from './layout';
import 'gitment/style/default.css';
import Gitment from 'gitment';

// 评论区
class Comments extends React.Component {
  componentDidMount() {
    const gitment = new Gitment({
      id: 'jazzysnail',
      owner: 'jazzysnail',
      repo: 'blog',
      title: '666',
      oauth: {
        client_id: '43639d4bf6cd906e8b5f',
        client_secret: 'fc798d7c539ae7f1d2888443b2ec364334d4aa5f',
      }
    });
    gitment.renderHeader('commentsH');
    gitment.renderComments('commentsC');
    gitment.renderEditor('commentsE');
  }

  render() {
    return (
     <div>
        <div id="commentsH"></div>
        <div id="commentsC"></div>
        <div id="commentsE"></div>
     </div>
    );
  }
}


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
        <span>⌘+e back to archive  ⌘+enter post comment</span>

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