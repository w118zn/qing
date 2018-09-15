const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
let init = {
  number:0,
  hosts:[{
    key: '1',
    hostName: 'John Brown',
    status:'等待中',//等待中、运行中、已关机、已暂停、已删除、已销毁、救援中
    area: '北京3区',//北京3区、北京3区-B,北京3区-C
    type:'性能型',//性能型、超高性能型、SAN主机、物理主机
    image:'centos7',
    config:'4c8g160g',
    network:'私有网络',
    WIP:'172.23.88.1',
    firewall:'关闭',
    warnStatus:'磁盘告警',
    system:'要完成作业',
    date:'2018-09-15 15:11'
  }, {
    key: '2',
    hostName: 'John Brown',
    status:'等待中',//等待中、运行中、已关机、已暂停、已删除、已销毁、救援中
    area: '北京3区',//北京3区、北京3区-B,北京3区-C
    type:'性能型',//性能型、超高性能型、SAN主机、物理主机
    image:'centos7',
    config:'4c8g160g',
    network:'私有网络',
    WIP:'172.23.88.1',
    firewall:'关闭',
    warnStatus:'磁盘告警',
    system:'要完成作业',
    date:'2018-09-15 15:11'
  }, {
    key: '3',
    hostName: 'John Brown',
    status:'等待中',//等待中、运行中、已关机、已暂停、已删除、已销毁、救援中
    area: '北京3区',//北京3区、北京3区-B,北京3区-C
    type:'性能型',//性能型、超高性能型、SAN主机、物理主机
    image:'centos7',
    config:'4c8g160g',
    network:'私有网络',
    WIP:'172.23.88.1',
    firewall:'关闭',
    warnStatus:'磁盘告警',
    system:'要完成作业',
    date:'2018-09-15 15:11'
  }, {
    key: '4',
    hostName: 'John Brown',
    status:'等待中',//等待中、运行中、已关机、已暂停、已删除、已销毁、救援中
    area: '北京3区',//北京3区、北京3区-B,北京3区-C
    type:'性能型',//性能型、超高性能型、SAN主机、物理主机
    image:'centos7',
    config:'4c8g160g',
    network:'私有网络',
    WIP:'172.23.88.1',
    firewall:'关闭',
    warnStatus:'磁盘告警',
    system:'要完成作业',
    date:'2018-09-15 15:11'
  }],
};

export const instances = (state = init, action = {}) => {
    switch(action.type) {
      case 'INCREMENT':
          return {...state};
      case 'DECREMENT':
          return {...state};
      default:
          return {...state};
    }
}

//action
export const increment = () => {
    return {type: INCREMENT}
};

export const decrement = () => {
    return {type: DECREMENT}
};