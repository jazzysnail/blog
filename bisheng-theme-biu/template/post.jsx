import React from 'react';
// style
import '../static/style';
// components
import Layout from './layout';
import 'gitment/style/default.css';
import Gitment from 'gitment';
const Rlink = require('bisheng/router').Link;

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

const aimInArray = function(array, value, ...keys) {
  let _array = array.slice();
  
  keys.forEach(key => {
    _array = _array.map(val => val[key]);
  });

  _array = _array.map(val => val.slice(0,val.length-3));

  for (var i = 0; i < _array.length; i++) {
    if (_array[i] == value) {
      return {
        prev: i == 0 ? _array.length-1 : i-1,
        next: i == _array.length-1 ? 0 : i+1
      }
    }
  }
}

export default function (props) {
  const sortedPosts = props.picked.posts.sort((a,b) => {
    a = new Date(a.meta.date);
    b = new Date(b.meta.date);
    if (a < b) {
      return 1
    }else if(a > b){
      return -1
    }else{
      return 0
    }
  });
  const {prev, next} = aimInArray(
    sortedPosts,
    'posts/' + props.params.post,
    'meta',
    'filename'
  );
  const postName = props.router.params.post;
  const { toReactComponent } = props.utils;
  const pageData = props.pageData;
  // 日期
  const Dateofpost = function(props) {
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
    let prevFilename = props.prevPost.meta.filename;
    let nextFilename = props.nextPost.meta.filename;
    return (
      <div className="post-footer">
        <div className="post-footer-line"></div>
        <Rlink to={prevFilename.slice(0,prevFilename.length-3)} className="previous">
          <i className="mineicon mineicon-arrowleft"></i>
          &nbsp;
          <span className="label">prev</span>
          <span className="post-title">{props.prevPost.meta.title}</span>
        </Rlink>

        <div className="comment-tip">
          <span>⌘+enter post comment</span>
        </div>

        <Rlink to={nextFilename.slice(0,nextFilename.length-3)} className="next">
          <span className="post-title">{props.nextPost.meta.title}</span>
          <span className="label">next</span>
          &nbsp;
          <i className="mineicon mineicon-arrowright"></i>
        </Rlink>
      </div>
    )
  }

  return (
    <Layout themeConfig={props.themeConfig}>
      <div className="post-info">
        <Dateofpost date={pageData.meta.date}/>
        <Tags tags={pageData.meta.tags} />
      </div>
      <h1>{pageData.meta.title}</h1>
      <Content />
      <Pager prevPost={sortedPosts[prev]} nextPost={sortedPosts[next]}/>
    </Layout>
  )
}