import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export class Instances extends React.Component{
  render(){
    return(
      <div className="card-container">
        <p>QingCloud 为您提供一种随时获取的、弹性的计算能力，这种计算能力的体现就是 主机（Instance）。主机就是一台配置好了的服务器，它有您期望的硬件配置、操作系统和网络配置。通常情况下，您的请求可以在10秒到60秒的时间之内 完成，所以您完全可以动态地、按需使用计算能力。</p>
        <Tabs type="card">
          <TabPane tab="主机" key="1">
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>
          <TabPane tab="预留合约" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="安全策略" key="3">
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}