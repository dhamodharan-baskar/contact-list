import {
  SET_CONTACT_LIST,
  UPDATE_CONTACT,
  SORT_CONTACTS,
  FILTER_CONTACTS,
  IS_LOADING,
  DELETE_CONTACT
} from '../ActionTypes';

let initialState = { 
  isLoading: true,
  contactList: [],
  listInfo: {},
  sortType: 'ascending',
  isUpdating: false
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_LIST: 
      return {
        ...state,
        contactList: [...action.data.results],
        listInfo: action.data.info,
        isLoading: false
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
      
    case IS_LOADING: 
      return {
        ...state,
        isLoading: action.value
      }
      
    case DELETE_CONTACT:
      let list = state.contactList.filter((item, index) => index !== action.index)
      return {
        ...state,
        contactList: [...list],
      }

    default:
      return state;
  } 
}