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
      isAscending: false
    };
  }

  componentDidMount() {
    if(localStorage.getItem('contactList')){
      let list = JSON.parse(localStorage.getItem('contactList'))
      this.props.setContactList(list)
    }
    // this.props.getContactList();
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
                onClickDetails={(contact) => this.onClickDetails(contact)}
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
    toast.success('Saved successfully', {
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

  sortList = () => {
    this.setState({isAscending: !this.state.isAscending}, () => this.props.sortList(this.state.isAscending))
  }

  onDeleteContact = (index) => {
    this.setState({selectedIndex:index, isDeleteModal: true})
  }

  onClickDetails = (contact) => {
    this.setState({selectedContact:contact, isDetailModal: true})
  }

  onCloseDeleteModal = () => {
    this.setState({isDeleteModal: false})
  }

  onSubmitDeleteModal = () => {
    this.props.deleteContact(this.state.selectedIndex)
    this.setState({isDeleteModal: false})
  }

  onCloseDetailModal = () => {
    this.setState({isDetailModal: false, selectedContact: {}})
  }

  render() {
    const{
     contactList
    } = this.props;

    const {
      isDeleteModal,
      isDetailModal,
      selectedContact
    } = this.state;
  
    return (
      <ListOverview>
        <Header 
         addContact={this.addContact}
         sortList={this.sortList}
         saveContacts={this.saveContacts}
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
        onRequestClose={() => this.onCloseDetailModal()}
        isOpen={isDetailModal}>
         <Details
          contact={selectedContact} 
         />
       </Modal>
      </ListOverview>
    )

  }
}

export default List

