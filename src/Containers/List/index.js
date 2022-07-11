import List from './List'
import { connect } from 'react-redux';
import {
  getContactList,
  deleteContact
} from '../../Redux/Actions/list';

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(getContactList()),
  deleteContact: (index) => dispatch(deleteContact(index)),
});

const mapStateToProps = (state) => ({
  contactList: state.list.contactList,
  listInfo: state.list.listInfo,
  isLoading: state.list.isLoading
});
export default connect(mapStateToProps, mapDispatchToProps)(List);