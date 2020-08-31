import React, { Component } from 'react';
// import axios from 'axios';
import TodoListUI from './TodoListUI';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction, getListAction, getTodoList, getMyListAction } from './store/actionCreators.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange.bind(this));
  }

  componentDidMount() {
    // 1.0
    // axios.get('http://localhost:8000').then(res => {
    //   console.log(res.data.data);
    //   this.getList(res.data.data);
    // });

    // 2.0
    // store.dispatch(getTodoList())

    // 3.0
    store.dispatch(getMyListAction());
  }

  getList(list) {
    store.dispatch(getListAction(list));
  }
  

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    e.persist();
    store.dispatch(changeInputAction(e.target.value));
  }

  clickBtn() {
    store.dispatch(addItemAction());
  }

  delete(index) {
    store.dispatch(deleteItemAction(index));
  }

  render() {
    return ( 
      <TodoListUI
        value={this.state.value}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        delete={this.delete}
      />
    );
  }
}
 
export default TodoList;