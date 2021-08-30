import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contacts = [];

const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case 'contacts/getSubmitData':
      if (
        state.find(
          state =>
            state.name.toLowerCase() === action.payload.name.toLowerCase(),
        )
      ) {
        toast.error('Hey, this name always here!');
        return [...state];
      }
      return [...state, action.payload];

    case 'contacts/handleDelete':
      return state.filter(state => state.id !== action.payload);

    default:
      return state;
  }
};

const filter = '';

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case 'contacts/changeFilterValue':
      return action.payload;
    default:
      return state;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { contactsReducer, filterReducer };
