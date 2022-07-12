import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Modal from '../../Components/Modal';
import Details from './components/Details';
import ConfirmationPrompt from '../../Components/ConfirmationPrompt';
import {
ListOverview,
LoaderView
} from './list.styles'
import {
contactValidation
} from '../../Constants/constant'
import CircleLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';

class List extends React.Component {
constructor(props) {
super(props);
this.state = {
  isDeleteModal: false,
  isDetailModal: false,
  selectedIndex: null,
  selectedContact: {},
  isAscending: false,
  isDeleteAllModal: false,
  isValidated: true
};
}

componentDidMount() {
if(localStorage.getItem('contactList')){
  let list = JSON.parse(localStorage.getItem('contactList'))
  if(list){
    this.props.setContactList(list)
  }
}
}

addContact = () => {
this.props.onAddContact()
}

saveContacts = () => {
const {
  contactList
} = this.props
localStorage.setItem('contactList', JSON.stringify(contactList))
this.renderToast('Saved successfully');
}

onSaveContact = async (contact) => {
let isValidated = await this.checkValidation(contact);
if(isValidated){
  this.props.saveContact(contact, this.state.selectedIndex)
  this.setState({
    selectedContact:{}, 
    isDetailModal: false,
    selectedIndex: null,
    isValidated:true
  })
  this.renderToast('Edited successfully');
  this.setState({isValidated: true})
} else {
  this.setState({isValidated: false})
}
}

checkValidation = (contact) => {
let validated = true;
Object.keys(contactValidation).forEach((key) => { 
  if(!contact[key]){
    validated = false
  }
  if(typeof contact[key] === 'object' && !Array.isArray(contact[key])){
      let obj = contactValidation[key];
      Object.keys(obj).forEach((childKey) => {  
        if(!contact[key][childKey]){
          validated = false
        }
        if(childKey === 'street'){
          if(!contact[key][childKey]['number'] || !contact[key][childKey]['name']){
            validated = false
          }
        }
      }) 
  }
})
return validated
}

sortList = () => {
this.setState({
  isAscending: !this.state.isAscending
}, () => this.props.sortList(this.state.isAscending))
}

onDeleteContact = (index) => {
this.setState({selectedIndex:index, isDeleteModal: true})
}

onClickDetails = (contact, index) => {
this.setState({
  selectedContact:contact, 
  isDetailModal: true,
  selectedIndex: index
})
}

onCloseDeleteModal = () => {
this.setState({
  isDeleteModal: false,
  selectedIndex: null
})
}

onSubmitDeleteModal = () => {
this.props.deleteContact(this.state.selectedIndex)
this.setState({isDeleteModal: false})
}

onCloseDetailModal = () => {
this.setState({
  isDetailModal: false, 
  selectedContact: {},
  selectedIndex: null,
  isValidated: true
})
}

onClearAll = () => {
this.setState({isDeleteAllModal: true})
}

onCloseDeleteAll = () => {
this.setState({isDeleteAllModal: false})
}

onSubmitDeleteAll = () => {
localStorage.setItem('contactList', null)
this.props.setContactList([])
this.renderToast('Cleared all contacts');
this.setState({isDeleteAllModal: false})
}

renderToast = (message) => {
toast.success(message, {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: { width: '300px' },
})
}

renderList = (contactList) => {
const {
  isLoading,
  filterType
} = this.props;

if(isLoading) {
  return(
    <LoaderView>
        <CircleLoader
          size={36}
          color={'#aacbe9'}
        />
    </LoaderView>
  )
}
if(filterType === 'all'){
  return(
    <div id="list">
      {contactList.map((item, index) => {
          return(
            <Card 
              key={`contact${index}`}
              contact={item}
              index={index}
              onDeleteContact={(index) => this.onDeleteContact(index)}
              onClickDetails={(contact, index) => this.onClickDetails(contact, index)}
            />
          )
      })}
    </div>
  )
}
return(
    <div id="list">
      {contactList.filter(item => item.gender === filterType).map((item, index) => {
          return(
            <Card 
              key={`contact${index}`}
              contact={item}
              index={index}
              onDeleteContact={(index) => this.onDeleteContact(index)}
              onClickDetails={(contact, index) => this.onClickDetails(contact, index)}
            />
          )
      })}
    </div>
  )
}

render() {
const{
  contactList,
  filterType,
  filterContacts
} = this.props;

const {
  isDeleteModal,
  isDetailModal,
  selectedContact,
  isDeleteAllModal,
  isValidated
} = this.state;

return (
  <ListOverview>
    <Header 
      addContact={this.addContact}
      sortList={this.sortList}
      filterType={filterType}
      filterContacts={filterContacts}
      saveContacts={this.saveContacts}
      onClearAll={this.onClearAll}
      contacts={contactList}/>
      {
        contactList?.length ? 
        <>
          {this.renderList(contactList)}
        </>
        :
        <>
          Add contacts to view the list
        </>
      }
    <Modal 
    onRequestClose={() => this.onCloseDetailModal()}
    isOpen={isDeleteModal}>
      <ConfirmationPrompt 
        message={`Are you sure you want to delete this contact?`}
        primaryAction={'Delete'}
        secondaryAcion={'Cancel'}
        onRequestClose={() => this.onCloseDeleteModal()}
        onSubmit={() => this.onSubmitDeleteModal()}
      />
    </Modal>
    <Modal 
    onRequestClose={() => this.onCloseDeleteAll()}
    isOpen={isDeleteAllModal}>
      <ConfirmationPrompt 
        message={`Are you sure you want to delete all contacts?`}
        primaryAction={'Delete'}
        secondaryAcion={'Cancel'}
        onRequestClose={() => this.onCloseDeleteAll()}
        onSubmit={() => this.onSubmitDeleteAll()}
      />
    </Modal>
    <Modal 
    onRequestClose={() => this.onCloseDetailModal()}
    isOpen={isDetailModal}>
      <Details
      isValidated={isValidated}
      onSaveContact={this.onSaveContact}
      contact={selectedContact} 
      />
    </Modal>
  </ListOverview>
)

}
}

export default List

