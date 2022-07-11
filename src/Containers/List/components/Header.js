import { useEffect, useState } from 'react';
import {
  HeaderView,
  Title,
  Button,
  Sort,
  Options,
  SortButton
} from '../list.styles'

const Header = (props) => {
  const {
    contacts,
    sortList,
    addContact
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
          Sort by : <SortButton onClick={() => sortList()}>Name</SortButton>
        </Sort>
        :
        <div />}
      </Options>
    </HeaderView>
  )
};

export default Header;
