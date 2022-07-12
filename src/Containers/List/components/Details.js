import { useState, useCallback } from 'react';
import moment from 'moment';
import EditMode from './EditMode'
import ViewMode from './ViewMode'
import {setContactData} from '../../../Utils/helper'
import {
  DetailsOverview,
  ContactDetails,
  Button,
  PrimaryButton
} from '../list.styles'

const Details = (props) => {
  const {
    contact,
    onSaveContact
  } = props
  const [contactData , setContact] = useState(contact)
  const [editMode, setEditMode] = useState(false)

  const onEditContact = useCallback((e) => {
    let data = setContactData(contactData, e)
    setContact({...data})
  },[contactData])

  const onChangeDate = useCallback((e) => {
    // let data = setContactData(contactData, e)
    // setContact({...data})
  },[contactData])

  return (
    <DetailsOverview>
      <div>
        <img 
          src={contact?.picture?.large}
          style={{
            borderRadius: 75,
            border:contact?.gender === 'male' ? "3px solid #ff0000" : "3px solid green"
          }}
          alt="" />
      </div>
      <ContactDetails>
      {editMode ?
        <EditMode 
          name={contactData?.name}
          location={contactData?.location}
          dob={contactData?.dob}
          cell={contactData?.cell}
          email={contactData?.email}
          onEditContact={(e) => onEditContact(e)}
          onChangeDate={(e) => onChangeDate(e)}
        />
        :
        <ViewMode 
          contact={contact}
        />
      } 
      <div>
       <Button onClick={() => setEditMode(!editMode)}>
          Edit
        </Button>
        <PrimaryButton onClick={() => onSaveContact(contactData)}>
          Save
        </PrimaryButton>
      </div>
      </ContactDetails>
    </DetailsOverview>
  )
};

export default Details;
