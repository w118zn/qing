import React from 'react';
import { Modal, Button,Steps,message,Row,Col,Card } from 'antd';
const Step = Steps.Step;
const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];


export class CreateHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }


  render() {
    const { current } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          创建
        </Button>
        <Modal
          width={1200}
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={18}>
              <div style={{width:800}}>
                <Steps current={current}>
                  {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content" style={{width:300,height:200}}>{steps[current].content}</div>
                <div className="steps-action">
                  {
                    current < steps.length - 1
                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                  }
                  {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                  }
                  {
                    current > 0
                    && (
                      <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                      </Button>
                    )
                  }
                </div>
              </div>
            </Col>
            <Col span={6}>
              <Card
                title="配置详情"
                sytle={{height:200}}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}