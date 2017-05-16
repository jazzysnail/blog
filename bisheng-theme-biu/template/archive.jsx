import React from 'react';

// style
import '../static/style';

// components
import Layout from './layout';


export default function (props) {

  const posts = props.data;
  
  console.log(posts)


  return (
    <Layout themeConfig={props.themeConfig}>
      归档页
    </Layout>
  )
}