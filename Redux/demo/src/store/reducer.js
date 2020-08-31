// 管理仓库函数

// 注意：
// 1. store必须是唯一的，多个store是坚决不允许，只能有一个store空间
// 2. 只有store能改变自己的内容，reducer不能改变
// 3. reducer必须是纯函数（比如：增加一个异步ajax函数，获取一些后端接口数据，然后再返回。或者 使用日期函数都是不允许的，因为违反了调用参数相同，返回相同的纯函数规则）
// 纯函数定义：如果函数的调用参数相同，则永远返回相同的结果。它不依赖与程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes.js';

const defaultState = {
  value: '',
  list: [
    '中国',
    '美国',
    '日本'
  ]
}; // 默认数据

// reducer里只能接收state，不能改变state
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  
  if (action.type === CHANGE_INPUT) {
    newState.value = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    newState.list.push(newState.value);
    newState.value = '';
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    newState.list.splice(action.index, 1);
    return newState;
  }

  if (action.type === GET_LIST) {
    newState.list = action.list;
    return newState;
  }

  return state;
};