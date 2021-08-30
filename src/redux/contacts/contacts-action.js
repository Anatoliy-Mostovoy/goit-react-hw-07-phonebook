import { createAction } from '@reduxjs/toolkit';

const getSubmitData = createAction('contacts/getSubmitData');
const handleDelete = createAction('contacts/handleDelete');
const changeFilterValue = createAction('contacts/changeFilterValue');

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handleDelete, changeFilterValue };

// const getSubmitData = data => {
//   return { type: actionTypes.SUBMIT, payload: data };
// };
// const handleDelete = data => {
//   return {
//     type: actionTypes.DELETE,
//     payload: data,
//   };
// };
// const changeFilterValue = value => {
//   return {
//     type: actionTypes.FILTER,
//     payload: value,
//   };
// };
