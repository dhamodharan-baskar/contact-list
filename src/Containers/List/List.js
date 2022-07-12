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
      isDeleteAllModal: false
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

  renderList = (contactList) => {
    const {
      isLoading
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

  onSaveContact = (contact) => {
    this.props.saveContact(contact, this.state.selectedIndex)
    this.setState({
      selectedContact:{}, 
      isDetailModal: false,
      selectedIndex: null
    })
    this.renderToast('Edited successfully');
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
      selectedIndex: null
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
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      style: { width: '400px' },
    })
  }

  render() {
    const{
     contactList
    } = this.props;

    const {
      isDeleteModal,
      isDetailModal,
      selectedContact,
      isDeleteAllModal
    } = this.state;
  
    return (
      <ListOverview>
        <Header 
         addContact={this.addContact}
         sortList={this.sortList}
         saveContacts={this.saveContacts}
         onClearAll={this.onClearAll}
         contacts={contactList}/>
        {this.renderList(contactList)}

       <Modal 
        onRequestClose={() => this.onCloseDetailModal()}
        isOpen={isDeleteModal}>
         <ConfirmationPrompt 
          message={`Are you sure you want to delete this contact?`}
          onRequestClose={() => this.onCloseDeleteModal()}
          onSubmit={() => this.onSubmitDeleteModal()}
         />
       </Modal>

       <Modal 
        onRequestClose={() => this.onCloseDeleteAll()}
        isOpen={isDeleteAllModal}>
         <ConfirmationPrompt 
          message={`Are you sure you want to delete all contacts?`}
          onRequestClose={() => this.onCloseDeleteAll()}
          onSubmit={() => this.onSubmitDeleteAll()}
         />
       </Modal>

       <Modal 
        onRequestClose={() => this.onCloseDetailModal()}
        isOpen={isDetailModal}>
         <Details
          onSaveContact={this.onSaveContact}
          contact={selectedContact} 
         />
       </Modal>
      </ListOverview>
    )

  }
}

export default List

