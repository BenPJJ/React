import axios from 'axios';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes.js';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = (list) => ({
  type: GET_LIST,
  list
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000').then(res => {
      console.log(res)
      dispatch(getListAction(res.data.data));
    })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
});