import List from './List'
import { connect } from 'react-redux';
import {
  getContactList,
  deleteContact,
  onAddContact,
  sortList,
  setContactList
} from '../../Redux/Actions/list';

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(getContactList()),
  sortList: (isAscending) => dispatch(sortList(isAscending)),
  onAddContact: () => dispatch(onAddContact()),
  setContactList: (data) => dispatch(setContactList(data)),
  deleteContact: (index) => dispatch(deleteContact(index)),
});

const mapStateToProps = (state) => ({
  contactList: state.list.contactList,
  isLoading: state.list.isLoading
});
export default connect(mapStateToProps, mapDispatchToProps)(List);