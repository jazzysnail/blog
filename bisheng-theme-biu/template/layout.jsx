import React from 'react';
import '../static/style';
import { Link, Element } from 'rc-scroll-anim';

const Header = function(props) {

  const navList = props.nav.map(val => {
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

const Content = function(props) {
  return (
    <div className="layout-content">
      {props.children}
    </div>
  )
}

const Footer = function(props) {

  const Year = new Date().getFullYear();

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
      </div>
      <Footer startyear={props.themeConfig.startyear}/>
    </div>
  )
}
