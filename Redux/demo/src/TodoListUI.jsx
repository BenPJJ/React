// import React, { Component } from 'react';
// import { Input, Button, List } from 'antd';
// import 'antd/dist/antd.css';
// import './static/css/TodoList.css';

// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() { 
//     return (
      // <div className="index">
      //   <Input 
      //     placeholder='请输入内容'
      //     value={this.props.value}
      //     style={{width: '50vw', marginRight: '5VW'}}
      //     onChange={(e) => this.props.changeInputValue(e)}>
      //   </Input>
      //   <Button
      //     type="primary"
      //     onClick={this.props.clickBtn}>增加
      //   </Button>
      //   <div className="list">
      //     <List
      //       bordered
      //       dataSource={this.props.list}
      //       renderItem={(item, index) =>(<List.Item onClick={() => this.props.delete(index)}>{item}</List.Item>)}
      //     />
      //   </div>
      // </div>
//     );
//   }
// }
 
// export default TodoListUI;

// 无状态组件：其实就是一个函数，它不用再继承任何的类，也不存在state，比普通react组件性能要好
import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './static/css/TodoList.css';

const TodoListUI = (props) => {
  return (
    <div className="index">
      <Input 
        placeholder='请输入内容'
        value={props.value}
        style={{width: '50vw', marginRight: '5VW'}}
        onChange={(e) => props.changeInputValue(e)}>
      </Input>
      <Button
        type="primary"
        onClick={props.clickBtn}>增加
      </Button>
      <div className="list">
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) =>(<List.Item onClick={() => props.delete(index)}>{item.title}</List.Item>)}
        />
      </div>
    </div>
  )
};

export default TodoListUI;