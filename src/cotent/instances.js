import React from 'react';
import { Tabs,Row,Col,Select,Icon,Button,Dropdown,Menu,Input,Card,Table } from 'antd'
import { connect } from 'react-redux';

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

@connect(
  state => state.instances,
)
export class Instances extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render(){
    const columns = [{
      title: 'ID(名称)',
      dataIndex: 'hostName',
      key: 'hostName',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={this.handleSearch(selectedKeys, confirm)}
          />
          <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
          <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '区域',
      dataIndex: 'area',
      key: 'area',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },{
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '映像',
      dataIndex: 'image',
      key: 'image',
    },{
      title: '配置',
      dataIndex: 'config',
      key: 'config',
    },{
      title: '网络',
      dataIndex: 'network',
      key: 'network',
    },{
      title: '外部IP',
      dataIndex: 'WIP',
      key: 'WIP',
    },{
      title: '防火墙',
      dataIndex: 'firewall',
      key: 'firewalls',
    },{
      title: '告警状态',
      dataIndex: 'warnStatus',
      key: 'warnStatus',
    },{
      title: '所属项目',
      dataIndex: 'system',
      key: 'system',
    },{
      title: '创建于',
      dataIndex: 'date',
      key: 'date',
    }];

    return(
      <div className="card-container">
        <p>QingCloud 为您提供一种随时获取的、弹性的计算能力，这种计算能力的体现就是 主机（Instance）。主机就是一台配置好了的服务器，它有您期望的硬件配置、操作系统和网络配置。通常情况下，您的请求可以在10秒到60秒的时间之内 完成，所以您完全可以动态地、按需使用计算能力。</p>
        <Tabs type="card">
          <TabPane tab="主机" key="1">
            {/*按钮*/}
              <Row style={{marginBottom:10}}>
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
                      <Icon type="bars" theme="twoTone" style={{fontSize:30,marginLeft:10}}/>
                      <Icon type="area-chart" theme="outlined" style={{fontSize:30}}/>
                  </Col>
              </Row>
            {/*按钮*/}
            {/*主机table列表*/}
            <Card>
              <Table columns={columns} dataSource={this.props.hosts} />
            </Card>
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