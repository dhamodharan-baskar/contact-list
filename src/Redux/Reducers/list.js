import {
SET_CONTACT_LIST,
UPDATE_CONTACT,
SORT_CONTACTS,
FILTER_CONTACTS,
IS_LOADING,
DELETE_CONTACT,
ADD_CONTACT,
SAVE_CONTACT
} from '../ActionTypes';

let initialState = { 
isLoading: false,
contactList: [],
sortType: 'ascending',
filterType: 'all',
isUpdating: false
};
let contacts = [];

export const list = (state = initialState, action) => {
switch (action.type) {
  
  case SET_CONTACT_LIST: 
    return {
      ...state,
      contactList: [...action.data],
      isLoading: false
    }

  case ADD_CONTACT: 
      return {
        ...state,
        contactList: [...action.data.results, ...state.contactList],
        isLoading: false
      }

  case UPDATE_CONTACT: 
    return {
      ...state
    }

  case SORT_CONTACTS:
    function compare(a, b) {
      if(action.isAscending){
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return -1;
        return 0;
      } else {
        if (a.name.first < b.name.first) return 1;
        if (a.name.first > b.name.first) return -1;
        return 0;
      }
    }
    contacts = [...state.contactList];
    contacts.sort(compare);
    return {
      ...state,
      contactList: [...contacts],
    }

  case FILTER_CONTACTS: 
    return {
      ...state,
      filterType: action.filterType
    }
    
  case IS_LOADING: 
    return {
      ...state,
      isLoading: action.value
    }
    
  case DELETE_CONTACT:    
    contacts = state.contactList.filter((item, index) => index !== action.index)
    return {
      ...state,
      contactList: [...contacts],
    }

  case SAVE_CONTACT:    
    contacts = state.contactList
    contacts[action.index] = action.contact
    return {
      ...state,
      contactList: [...contacts],
    }
    
  default:
    return state;
} 
}