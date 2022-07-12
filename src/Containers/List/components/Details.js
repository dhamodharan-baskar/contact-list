import { useState, useCallback } from 'react';
import EditMode from './EditMode'
import ViewMode from './ViewMode'
import {
setContactData,
setDate,
upLoadImage
} from '../../../Utils/helper'
import {
DetailsOverview,
ContactDetails,
Button,
PrimaryButton,
FooterOption,
ImageUpload,
ErrorMessage
} from '../list.styles'

const Details = (props) => {
const {
  contact,
  onSaveContact,
  isValidated
} = props
const [contactData , setContact] = useState(contact)
const [editMode, setEditMode] = useState(false)

const onEditContact = useCallback((e) => {
  let data = setContactData(contactData, e)
  setContact({...data})
},[contactData])

const onChangeDate = useCallback((e) => {
  let data = setDate(contactData, e)
  setContact({...data})
},[contactData])

const onImageChange = (e) => {
  let data = upLoadImage(contactData, e)
  setContact({...data})
}

const onClickImage = () => {
  if(editMode)
    document.getElementById('files').click()
}

return (
  <DetailsOverview>
    <ImageUpload>
      <img 
        src={contactData?.picture?.large}
        onClick={onClickImage}
        style={{
          borderRadius: 75,
          width: 125,
          height: 125,
          cursor: 'pointer',
          border:contact?.gender === 'male' ? "3px solid #ff0000" : "3px solid green"
        }}
        alt="" />
      <input 
        type="file"
        id="files" 
        multiple accept="image/*" 
        name="files[]" 
        style={{display: 'none', width: 150}}
        onChange={onImageChange} />
    </ImageUpload>
    <ContactDetails>
    {editMode ?
      <EditMode 
        name={contactData?.name}
        location={contactData?.location}
        dob={contactData?.dob}
        cell={contactData?.cell}
        email={contactData?.email}
        isValidated={isValidated}
        onEditContact={(e) => onEditContact(e)}
        onChangeDate={(e) => onChangeDate(e)}
      />
      :
      <ViewMode 
        contact={contact}
      />
    } 
    <FooterOption>
      <Button onClick={() => setEditMode(!editMode)}>
      {editMode ? 'Cancel' : 'Edit'}
      </Button>
      {editMode &&
        <PrimaryButton onClick={() => onSaveContact(contactData)}>
        Save
        </PrimaryButton> }
    </FooterOption>
    {(!isValidated && editMode) &&
      <ErrorMessage>fill all fields</ErrorMessage>
    }
    </ContactDetails>
  </DetailsOverview>
)
};

export default Details;
