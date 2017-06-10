import React from 'react';

// components
import Layout from './layout';

export default function (props) {
  return (
    <Layout themeConfig={props.themeConfig} >
      <div>
        <p>梁 | Leon</p>
        <p>前端工程师、设计爱好者</p>
        <p>这里是作为我写东西的地方，手账、技术、艺术、等等...</p>
        <p>但，内容更新并不稳定</p>
        <p>发邮件给我，或者在页面底部链接找到我</p>
        <p><a href="mailto:jazzysnail@outlook.com">jazzysnail@outlook.com</a></p>
      </div>
    </Layout>
  )
}