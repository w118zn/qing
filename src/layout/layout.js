import React from 'react';
import {Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import {QingHeader} from "../header/header";
import { Instances } from "../cotent/instances/instances";
import {Overr} from "../cotent/over";

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

export class QingLayout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
  }


  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(){
    const match = this.props.match;
    console.log(match);
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" style={{height: 32,backgroundColor:'#FFFFFF',margin: 16}}/>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>北京三区</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={match.url}>
                <Icon type="desktop" />
                <span>总览</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>计算</span></span>}
            >
              <Menu.Item key="3">
                <Link to={`${match.url}/instances`}>
                  主机
                </Link>
              </Menu.Item>
              <Menu.Item key="4">专属宿主机组</Menu.Item>
              <Menu.Item key="5">映像</Menu.Item>
              <Menu.Item key="6">SSH秘钥</Menu.Item>
              <Menu.Item key="7">设备</Menu.Item>
              <Menu.Item key="8">网卡</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>网络与CDN</span></span>}
            >
              <Menu.Item key="9">VPC网络</Menu.Item>
              <Menu.Item key="10">负载均衡器</Menu.Item>
              <Menu.Item key="11">私有网络</Menu.Item>
              <Menu.Item key="12">公网IP</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>存储</span></span>}
            >
              <Menu.Item key="13">硬盘</Menu.Item>
              <Menu.Item key="14">对象存储</Menu.Item>
              <Menu.Item key="15">共享存储</Menu.Item>
              <Menu.Item key="16">文件存储vNAS</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <QingHeader></QingHeader>
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/*<h2>我是原来就有的</h2>*/}
              {/*<Route path={`${match.url}/instances`} componet={Instances}/>*/}
              <Route path={`${match.url}/instances`} component={Instances} />
              <Route exact path={match.url} component={Overr}/>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

