import React from 'react';

// style
import '../static/style';

// components
import { Link, Element } from 'rc-scroll-anim';

// header
const Header = function(props) {

  // navigation
  let navList = props.nav.map(val => {
    return (
      <li key={val.label + val.uri}>
        <a href={val.uri}>{val.label}</a>
      </li>
    )
  });

  return (
    <header className="layout-header">
      <div className="title">
        <span>{props.title}</span>
      </div>
      <div className="nav">
        <ul>{navList}</ul>
      </div>
    </header>
  )
}

// content
const Content = function(props) {
  return (
    <div className="layout-content">
      {props.children}
    </div>
  )
}

// footer
const Footer = function(props) {

  let Year = new Date().getFullYear();

  return (
    <footer>
      <p>{props.startyear || Year} - {Year} leon’s blog, with <a href="https://github.com/benjycui/bisheng">Bisheng</a>！</p>
    </footer>
  )
}

export default function (props) {
  return (
    <div className="layout">
      <div className="paper">
        <Header
          title={props.themeConfig.title}
          nav={props.themeConfig.nav}
        />
        <Content>
          {props.children}
        </Content>
        <div className="layout-footer">
          <a className="previous">← previous post</a>
          <span>⌘+e back to news  ⌘+enter post comment</span>
          <a className="next">next post →</a>
        </div>
      </div>
      <Footer startyear={props.themeConfig.startyear}/>
    </div>
  )
}
