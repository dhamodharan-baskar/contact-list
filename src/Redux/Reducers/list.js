import {
  GET_CONTACT_LIST,
  UPDATE_CONTACT,
  SORT_CONTACTS,
  FILTER_CONTACTS
} from '../ActionTypes';

let initialState = { 
  isLoading: false,
  contactList: [],
  sortType: 'ascending',
  isUpdating: false
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_LIST: 
      return {
        ...state
      }

    case UPDATE_CONTACT: 
      return {
        ...state
      }

    case SORT_CONTACTS: 
      return {
        ...state
      }

    case FILTER_CONTACTS: 
      return {
        ...state
      }

    default:
      return state;
  } 
}