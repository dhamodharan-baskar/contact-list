import { useEffect, useState } from 'react';
import SortIcon from "../../../Icons/SortIcon.js"
import { 
FILTER_OPTIONS,
DROPDOWN_CUSTOM_STYLE 
} from "../../../Constants/constant"
import Select from 'react-select';
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
Filter,
Label,
} from '../list.styles'

const Header = (props) => {
const {
  contacts,
  sortList,
  addContact,
  saveContacts,
  onClearAll,
  filterType,
  filterContacts,
} = props
const [countries, setCountries] = useState([])
let count = contacts?.length

const updateCountries = () => {
  let list = [];
  contacts?.forEach(item => {
    if(!list.includes(item.location.country)){
      list.push(item.location.country);
    }
  });
  setCountries(list)
}

useEffect(() => {
  updateCountries()
},[contacts])

const onSelectFilter = (event) => {
  filterContacts(event.type)
}

return (
  <HeaderView>
    <Title>Contact List </Title>
    {contacts?.length ? 
      <Label>
      No of Contacts - {count}
      </Label>
      :
      <div />
    }
    {contacts?.length ? 
      <Label>
      No of countries - {countries?.length}
      </Label>
      :
      <div />
    }
      <Button onClick={() => addContact()}>
        Add Contact
      </Button>
    <Options>
      {contacts?.length > 1 ?
      <Sort>
        <Filter>
          <Select 
          value={FILTER_OPTIONS?.find(obj => obj['type'] === filterType)}
          styles={DROPDOWN_CUSTOM_STYLE}
          options={FILTER_OPTIONS}
          onChange={(event) => onSelectFilter(event)}
          getOptionLabel={(options) => options['name']}
          getOptionValue={(options) => options['type']}
          />
        </Filter>
        <SortButton onClick={() => sortList()}>
          Name <SortIcon />
        </SortButton>
      </Sort>
      :
      <div />}
    </Options>
    {contacts?.length ? 
    <Footer>
      <DeleteButton onClick={() => onClearAll()}>
        Clear
      </DeleteButton>
      <PrimaryButton
        onClick={() => saveContacts()}>
        Save Contacts
      </PrimaryButton>
    </Footer>
    :
    <div />
    }
  </HeaderView>
)
};

export default Header;
