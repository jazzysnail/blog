import React from 'react';
import '../static/style';
const Rlink = require('bisheng/router').Link;
import { Link, Element } from 'rc-scroll-anim';

const Header = function(props) {

  const navList = props.nav.map(val => {
    return (
      <li key={val.label + val.uri}>
        <Rlink to={val.uri}>{val.label}</Rlink>
      </li>
    )
  });

  return (
    <header className="layout-header">
      <div className="header-content">
        <div className="title">
          <Rlink to="/">
            <img
              className="logo"
              src={props.logo}
              alt="logo"
            />
          </Rlink>
        </div>
        <div className="nav">
          <ul>{navList}</ul>
        </div>
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

  const Linkup = props.linkup.map(val => {
    return (
      <a
        href={val.link}
        target="_blank"
        key={val.link + val.icon}>
        <i className={'mineicon mineicon-' + val.icon}></i>
      </a>
    )
  });

  return (
    <footer>
      <span className="linkup">{Linkup}</span>
      <p>{props.startyear || Year}-{Year} leon’s blog Powered by <a href="https://github.com/benjycui/bisheng">Bisheng</a></p>
    </footer>
  )
}

export default function (props) {
  return (
    <div className="layout">
      <div className="paper">
        <Header
          logo={props.themeConfig.logo}
          nav={props.themeConfig.nav}
        />
        <Content>
          {props.children}
        </Content>
      </div>
      <Footer
        startyear={props.themeConfig.startyear}
        linkup={props.themeConfig.linkup}
      />
    </div>
  )
}
