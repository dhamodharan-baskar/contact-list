import moment from 'moment';
import {
  DetailsOverview
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
      <div>
        <div>
         {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
        </div>
        <div>{moment(contact?.dob?.date).format("DD/MM/YYYY")} - {`${contact?.dob?.age} years old`}</div>
        <div>{`${contact?.cell}`}</div>
        <div>
          <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
        </div>
        {
          contact?.location?.street &&
          <div>
             {contact?.location?.street?.number + ' , ' + contact?.location?.street?.name}
          </div>
        }
        <div>
          {contact?.location?.city}
        </div>
        <div>
         {contact?.location?.state + " - " +contact?.location?.postcode}
        </div>
        <div>
         {contact?.location?.country}
        </div>
      </div>
    </DetailsOverview>
  )
};

export default Details;
