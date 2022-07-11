import {
  CardOverview,
  Description,
  Name,
  Email,
  Delete,
  More
} from '../list.styles'
import DeleteIcon from "../../../Icons/DeleteIcon.js"

const Card = (props) => {
  const {
    contact,
    onDeleteContact,
    index
  } = props;
  console.log('contact', contact);
  return (
    <CardOverview>
       <>
          <img 
            src={contact?.picture?.medium}
            style={{
              borderRadius: 50,
              border:contact?.gender === 'male' ? "3px solid #ff0000" : "3px solid green"
            }}
            alt="" />
        </>
        <Description>
          <Name>
            {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
          </Name>
          <Email>
            <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
          </Email>
          <More>
            Details
          </More>
        </Description>
        <Delete onClick={() => onDeleteContact(index)}>
         <DeleteIcon />  
        </Delete>
    </CardOverview>
  )
};

export default Card;
