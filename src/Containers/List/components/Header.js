import { useEffect, useState } from 'react';
import SortIcon from "../../../Icons/SortIcon.js"
import {
  HeaderView,
  Title,
  Button,
  Sort,
  Options,
  SortButton,
  PrimaryButton,
  Footer,
  DeleteButton,
} from '../list.styles'

const Header = (props) => {
  const {
    contacts,
    sortList,
    addContact,
    saveContacts,
    onClearAll
  } = props
  const [countries, setCountries] = useState([])
  let count = contacts?.length

  useEffect(() => {
    updateCountries()
  },[contacts])

  const updateCountries = () => {
    let list = [];
    contacts?.forEach(item => {
      if(!list.includes(item.location.country)){
        list.push(item.location.country);
      }
    });
    setCountries(list)
  }

  return (
    <HeaderView>
      <Title>Contact List </Title>
      <div>
       No of Contacts - {count}
      </div>
      <div>
       No of countries - {countries?.length}
      </div>
      <Options>
        <Button onClick={() => addContact()}>
          Add Contact
        </Button>
        {contacts?.length > 1 ?
        <Sort>
          <SortButton onClick={() => sortList()}>
            Name <SortIcon />
          </SortButton>
        </Sort>
        :
        <div />}
      </Options>
      <Footer>
        <DeleteButton onClick={() => onClearAll()}>
          Clear
        </DeleteButton>
        <PrimaryButton
          onClick={() => saveContacts()}>
          Save Contacts
        </PrimaryButton>
      </Footer>
    </HeaderView>
  )
};

export default Header;
