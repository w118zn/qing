import React from 'react';
import { Row, Col,Select } from 'antd';
const Option = Select.Option;

export class QingHeader extends React.Component{
  render(){
    return(
      <Row>
        <Col span={8} style={{paddingLeft:10}}>
          <Select style={{ width: 120 }} defaultValue={"全部资源"}>
            <Option value={'all'} >全部资源</Option>
            <Option value={'new'}>创建新项目</Option>
          </Select>
        </Col>
        <Col span={8} offset={8}>col-8</Col>
      </Row>
    );
  }
}
