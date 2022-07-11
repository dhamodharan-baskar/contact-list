import { useEffect, useState } from 'react';
import {
  HeaderView,
  Title
} from '../list.styles'

const Header = (props) => {
  const {
    contacts,
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
      <div onClick={() => addContact()}>Add Contact</div>
      Sort by 
    </HeaderView>
  )
};

export default Header;
