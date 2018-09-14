import React from 'react';
import {Button} from 'antd'
import { connect } from 'react-redux';
import {increment, decrement} from "../reducer/hosts.reducer";

@connect(
    state => ({counter:state}),
    {increment,decrement}
)
export class Overr extends React.Component{
  render(){
    return(
      <div>
          <p>
              我是总览{this.props.counter.number}
          </p>
          <Button onClick={this.props.increment}>加数</Button>
          <Button onClick={this.props.decrement}>减数</Button>
      </div>
    )
  }
}