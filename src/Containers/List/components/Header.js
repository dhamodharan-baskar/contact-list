import { useEffect, useState } from 'react';
import {
  
} from '../list.styles'

const Header = (props) => {
  const {
    contacts
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
    <div>
      Contact List 
      <div>
       No of Contacts - {count}
      </div>
      <div>
       No of countries - {countries?.length}
      </div>
      Sort by
      Filter by
    </div>
  )
};

export default Header;
