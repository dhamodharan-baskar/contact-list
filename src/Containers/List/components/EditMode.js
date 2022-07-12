import {
ContactItem,
Title,
Item
} from '../list.styles'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../index.css';
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
      <Item>
        <input 
          value={name?.first} 
          id={'firstName'} 
          className={'e-input'}
          onChange={(e) => onEditContact(e)}/>
      </Item>
      <Item>
        <input 
            value={name?.last} 
            id={'lastName'} 
            className={'e-input'}
            onChange={(e) => onEditContact(e)}/>
      </Item>
    </ContactItem>

    <ContactItem>
      <Item>
        <DatePicker 
          dateFormat="dd-MM-yyyy"
          className={'e-input'}
          selected={new Date(dob?.date)}
          onChange={(date) => onChangeDate(date)} />
      </Item>
    </ContactItem>

    <ContactItem>
      <Item>
        <input  
          value={cell} 
          id={'cell'}
          className={'e-input'} 
          onChange={(e) => onEditContact(e)}/>
      </Item>
    </ContactItem>

    <ContactItem>
      <Item>
      <input  
        value={email} 
        id={'email'} 
        className={'e-input'}
        onChange={(e) => onEditContact(e)}/>
      </Item>
    </ContactItem>
      { location && 
          <div>
          <Title style={{padding: '4px 12px'}}>Address:</Title>
          {
            location?.street &&
            <ContactItem>
              <Item>
                <input 
                value={location?.street?.number} 
                className={'e-input'}
                id={'streetNumber'} 
                onChange={(e) => onEditContact(e)}/>
              </Item>
              <Item>
                <input 
                value={location?.street?.name} 
                id={'streetName'} 
                className={'e-input'}
                onChange={(e) => onEditContact(e)}/>
              </Item>
            </ContactItem>
          }
          <ContactItem>
            <Item>
            <input 
              value={location?.city} 
              id={'city'} 
              className={'e-input'}
              onChange={(e) => onEditContact(e)}/>
            </Item>
          </ContactItem>
          <ContactItem>
            <Item>
            <input 
              value={location?.state} 
              id={'state'} 
              className={'e-input'}
              onChange={(e) => onEditContact(e)}/>
            </Item>
            <Item>
            <input 
              value={location?.postcode} 
              id={'postcode'} 
              className={'e-input'}
              onChange={(e) => onEditContact(e)}/>
            </Item>
          </ContactItem>
          <ContactItem>
            <Item>
            <input 
              value={location?.country} 
              id={'country'} 
              className={'e-input'}
              onChange={(e) => onEditContact(e)}/>
            </Item>
          </ContactItem>
          </div>
      }
  </>
)
};

export default EditMode;
