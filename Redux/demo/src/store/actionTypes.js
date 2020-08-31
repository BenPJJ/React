// 把action types单独写入一个文件
// 写redux action的时候，写了很多action的派发，产生了很多action types
// 这些types如果不统一管理，不利于大型项目的复用，导致冗余代码

export const CHANGE_INPUT = 'changeInput';
export const ADD_ITEM = 'addItem';
export const DELETE_ITEM = 'deleteItem';
export const GET_LIST = 'getList';
export const GET_MY_LIST = 'getMyList';