import moment from 'moment';
import {
ContactItem,
Title
} from '../list.styles'

const ViewMode = (props) => {
const {
  contact
} = props

return (
  <>
    <ContactItem>
      {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
      </ContactItem>
      <ContactItem>
        {moment(contact?.dob?.date).format("DD/MM/YYYY")} - {`${contact?.dob?.age} years old`}
      </ContactItem>
      <ContactItem>
        {`${contact?.cell}`}
      </ContactItem>
      <ContactItem>
        <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
      </ContactItem>
      { contact?.location && 
          <div>
          <Title>Address:</Title>
          {
            contact?.location?.street &&
            <ContactItem>
              {contact?.location?.street?.number + ' , ' + contact?.location?.street?.name}
            </ContactItem>
          }
          <ContactItem>
            {contact?.location?.city}
          </ContactItem>
          <ContactItem>
          {contact?.location?.state + " - " +contact?.location?.postcode}
          </ContactItem>
          <ContactItem>
          {contact?.location?.country}
          </ContactItem>
          </div>
      }
  </>
)
};

export default ViewMode;