import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Modal from '../../Components/Modal';
import ConfirmationPrompt from '../../Components/ConfirmationPrompt';
import {
  ListOverview
} from './list.styles'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteModal: false,
      isDetailModal: false
    };
  }

  componentDidMount() {
    this.props.getContactList()
  }

  renderList = (contactList) => {
    return(
      <div>
        {contactList.map((item, index) => {
            return(
              <Card 
                key={`contact${index}`}
                contact={item}
                index={index}
                onDeleteContact={(index) => this.onDeleteContact(index)}
              />
            )
        })}
      </div>
    )
  } 

  onDeleteContact = (index) => {
    // this.props.deleteContact(index)
    this.setState({isDeleteModal: true})
  }

  onCloseDeleteModal = () => {
    this.setState({isDeleteModal: false})
  }

  onSubmitDeleteModal = () => {
    this.setState({isDeleteModal: false})
  }

  onCloseDetailModal = () => {
    this.setState({isDetailModal: false})
  }

  onSubmitDetailModal = () => {
    this.setState({isDetailModal: false})
  }

  render() {
    const{
     isLoading,
     contactList
    } = this.props;

    const {
      isDeleteModal
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
        <Header />
       {this.renderList(contactList)}
       <Modal 
        onRequestClose={() => this.onCloseDeleteModal()}
        isOpen={isDeleteModal}>
         <ConfirmationPrompt 
          message={`Are you sure you want to delete this contact?`}
          onRequestClose={() => this.onCloseDeleteModal()}
          onSubmit={() => this.onSubmitDeleteModal()}
         />
       </Modal>
      </ListOverview>
    )

  }
}

export default List

