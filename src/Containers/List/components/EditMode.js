import {
  ContactItem,
  Title
} from '../list.styles'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditMode = (props) => {
  const {
    cell,
    dob,
    email,
    location,
    name,
    onEditContact,
    onChangeDate
  } = props

  return (
    <>
      <ContactItem>
        <input 
          value={name?.first} 
          id={'firstName'} 
          onChange={(e) => onEditContact(e)}/>
        <input 
          value={name?.last} 
          id={'lastName'} 
          onChange={(e) => onEditContact(e)}/>
      </ContactItem>
      <ContactItem>
        <DatePicker 
           dateFormat="dd-MM-yyyy"
           selected={new Date(dob?.date)}
           onChange={(date) => onChangeDate(date)} />
      </ContactItem>
      <ContactItem>
          <input  
            value={cell} 
            id={'cell'} 
            onChange={(e) => onEditContact(e)}/>
      </ContactItem>
      <ContactItem>
        <input  
          value={email} 
          id={'email'} 
          onChange={(e) => onEditContact(e)}/>
      </ContactItem>
        { location && 
            <div>
            <Title>Address:</Title>
            {
              location?.street &&
              <ContactItem>
                 <input 
                  value={location?.street?.number} 
                  id={'streetNumber'} 
                  onChange={(e) => onEditContact(e)}/>
                 <input 
                  value={location?.street?.name} 
                  id={'streetName'} 
                  onChange={(e) => onEditContact(e)}/>
              </ContactItem>
            }
            <ContactItem>
              <input 
                value={location?.city} 
                id={'city'} 
                onChange={(e) => onEditContact(e)}/>
            </ContactItem>
            <ContactItem>
              <input 
                value={location?.state} 
                id={'state'} 
                onChange={(e) => onEditContact(e)}/>
              <input 
                value={location?.postcode} 
                id={'postcode'} 
                onChange={(e) => onEditContact(e)}/>
            </ContactItem>
            <ContactItem>
              <input 
                value={location?.country} 
                id={'country'} 
                onChange={(e) => onEditContact(e)}/>
            </ContactItem>
            </div>
        }
    </>
  )
};

export default EditMode;
