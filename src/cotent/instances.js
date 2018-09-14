import React from 'react';
import { Tabs,Row,Col,Select,Icon,Button,Dropdown,Menu,Input } from 'antd';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
function handleMenuClick(e) {
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);


export class Instances extends React.Component{
  render(){
    return(
      <div className="card-container">
        <p>QingCloud 为您提供一种随时获取的、弹性的计算能力，这种计算能力的体现就是 主机（Instance）。主机就是一台配置好了的服务器，它有您期望的硬件配置、操作系统和网络配置。通常情况下，您的请求可以在10秒到60秒的时间之内 完成，所以您完全可以动态地、按需使用计算能力。</p>
        <Tabs type="card">
          <TabPane tab="主机" key="1">
              <Row>
                  <Col span={16}>
                    <Button>
                        <Icon type="retweet" theme="outlined" />
                    </Button>
                    <Button>
                      +创建
                    </Button>
                    <Button>启动</Button>
                    <Button>关机</Button>
                      <Dropdown overlay={menu} >
                          <Button>
                              更多操作 <Icon type="down" />
                          </Button>
                      </Dropdown>
                      <Dropdown overlay={menu}>
                          <Button>
                              更多操作 <Icon type="down" />
                          </Button>
                      </Dropdown>
                      <Input placeholder="Basic usage" style={{width:150}}/>
                  </Col>
                  <Col span={6} offset={2}>
                      <span>合计：0</span>
                      <span>每页：
                      <Select defaultValue={"10"}>
                          <Option value={"10"}>10</Option>
                          <Option value={"20"}>20</Option>
                          <Option value={"30"}>30</Option>
                      </Select>
                    </span>
                      <Icon type="bars" theme="twoTone" style={{fontSize:30}}/>
                      <Icon type="area-chart" theme="outlined" style={{fontSize:30}}/>

                  </Col>
              </Row>
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