import moment from 'moment';
import {
  DetailsOverview,
  ContactDetails,
  ContactItem,
  Title
} from '../list.styles'

const Details = (props) => {
  const {
    contact
  } = props
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
        <ContactItem>
         {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
        </ContactItem>
        <ContactItem>{moment(contact?.dob?.date).format("DD/MM/YYYY")} - {`${contact?.dob?.age} years old`}</ContactItem>
        <ContactItem>{`${contact?.cell}`}</ContactItem>
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
      </ContactDetails>
    </DetailsOverview>
  )
};

export default Details;
