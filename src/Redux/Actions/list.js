import {
  SET_CONTACT_LIST,
  UPDATE_CONTACT,
  SORT_CONTACTS,
  FILTER_CONTACTS,
  IS_LOADING,
  DELETE_CONTACT,
  ADD_CONTACT,
  SORT_LIST
} from '../ActionTypes'
import axios from 'axios'

export const getContactList = () => {
  return (dispatch) => {
    return axios.get(`https://randomuser.me/api?results=10`,).then((response) => {
      if (response.data) {
        dispatch(setContactList(response.data));
      }
    })
  }
};

export const onAddContact = () => {
  return (dispatch) => {
    return axios.get(`https://randomuser.me/api`,).then((response) => {
      if (response.data) {
        dispatch(addContact(response.data));
      }
    })
  }
};

export const sortList = (isAscending) => {
  return {
    type: SORT_LIST ,
    isAscending
 }
}

export const addContact = (data) => {
  return {
    type: ADD_CONTACT ,
    data
 }
}

export const setContactList = (data) => {
  return {
      type: SET_CONTACT_LIST,
      data
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

export const deleteContact = (index) => {
  return {
      type: DELETE_CONTACT,
      index
  }
};