import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Modal from '../../Components/Modal';
import Details from './components/Details';
import ConfirmationPrompt from '../../Components/ConfirmationPrompt';
import {
  ListOverview
} from './list.styles'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteModal: false,
      isDetailModal: false,
      selectedIndex: null,
      selectedContact: {},
      isAscending: true
    };
  }

  componentDidMount() {
    // this.props.getContactList();
  }

  renderList = (contactList) => {
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

  sortList = () => {
    console.log('coming')
    this.setState({isAscending: !this.state.isAscending})
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
     isLoading,
     contactList
    } = this.props;

    const {
      isDeleteModal,
      isDetailModal,
      selectedContact
    } = this.state;

    if(isLoading) {
      return(
        <ListOverview>
          loading
        </ListOverview>
      )
    }

    return (
      <ListOverview>
        <Header 
         addContact={this.addContact}
         sortList={this.sortList}
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

