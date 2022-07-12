import List from './List'
import { connect } from 'react-redux';
import {
getContactList,
deleteContact,
onAddContact,
sortList,
setContactList,
setLoading,
saveContact,
filterContacts
} from '../../Redux/Actions/list';

const mapDispatchToProps = (dispatch) => ({
getContactList: () => dispatch(getContactList()),
saveContact:(contact, index) => dispatch(saveContact(contact, index)),
sortList: (isAscending) => dispatch(sortList(isAscending)),
onAddContact: () => dispatch(onAddContact()),
filterContacts: (type) => dispatch(filterContacts(type)),
setContactList: (data) => dispatch(setContactList(data)),
deleteContact: (index) => dispatch(deleteContact(index)),
setLoading: (value) => dispatch(setLoading(value))
});

const mapStateToProps = (state) => ({
contactList: state.list.contactList,
isLoading: state.list.isLoading,
filterType: state.list.filterType
});
export default connect(mapStateToProps, mapDispatchToProps)(List);