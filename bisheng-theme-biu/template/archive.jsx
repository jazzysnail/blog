import React from 'react';

// components
import Layout from './layout';
const { Link } = require('bisheng/router');

export default function (props) {
  const { toReactComponent } = props.utils;
  const posts = props.picked.posts.slice();

  // 文章时间排序
  const sortedPosts = posts.sort((a,b) => {
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

  // 首页最多放 9 篇文章
  if (sortedPosts.length > 9) {
    sortedPosts.length = 9;
  }

  // console.log(sortedPosts)

  // 文章单窗口组件
  const Window = function(props) {
    const { meta, description } = props.post;
    // console.log(description)
    return (
      <div className="post-window">
        <Link to={'/' + meta.filename.replace(/\.md$/i, '')}>
          <h1>{meta.title}</h1>
        </Link>
        <hr/>
        <div className="window-discription">
          {
            meta.cover
            ? <img src={meta.cover} alt=""/>
            : toReactComponent(description)
          }
        </div>
        <p className="window-date">
          {new Date(meta.date).toString().slice(0, 10)}
        </p>
      </div>
    )
  }

  return (
    <Layout themeConfig={props.themeConfig} >
      <div className="archive-content">
        {sortedPosts.map(val => <div key={val.meta.date}><Window post={val} /></div>)}
      </div>
    </Layout>
  )
}