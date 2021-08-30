const getSubmitData = data => {
  return { type: 'contacts/getSubmitData', payload: data };
};

const handleDelete = data => {
  return {
    type: 'contacts/handleDelete',
    payload: data,
  };
};

const changeFilterValue = value => {
  return {
    type: 'contacts/changeFilterValue',
    payload: value,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSubmitData, handleDelete, changeFilterValue };
