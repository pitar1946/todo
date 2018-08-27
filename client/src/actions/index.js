import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SORT_ITEMS } from '../types';
import axios from 'axios';

export const getItems = () => dispatch => {
  axios
       .get('/api/todos')
       .then(res => dispatch({
         type: GET_ITEMS,
         payload: res.data
       }))
};

export const addItem = todo => dispatch => {
   axios
       .post('/api/todos', todo)
       .then(res => dispatch({
         type: ADD_ITEM,
         payload: res.data
       }))
};

export const deleteItem = id => dispatch =>  {
   axios
      .delete(`/api/todos/${id}`)
      .then(res => dispatch ({
         type: DELETE_ITEM,
         payload: id
      }))
};
export const sortItems = id => dispatch =>  {
   axios
      .get('/api/todos/')
      .then(res => dispatch({
        type: SORT_ITEMS,
        payload: res.data
      }))
};
