import {
  GET_CONTACT_LIST,
  UPDATE_CONTACT,
  SORT_CONTACTS,
  FILTER_CONTACTS,
  IS_LOADING
} from 'Redux/ActionTypes';

export const getContactList = () => {
  return {
      type: GET_CONTACT_LIST,
  }
};

export const setLoading = () => {
  return {
      type: IS_LOADING
  }
};

export const updateContact = () => {
  return {
      type: UPDATE_CONTACT
  }
};

export const filterContacts = () => {
  return {
      type: FILTER_CONTACTS
  }
};

export const sortContacts = () => {
  return {
      type: SORT_CONTACTS
  }
};