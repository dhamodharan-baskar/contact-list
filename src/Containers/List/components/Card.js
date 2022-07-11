import {
  CardOverview,
  Image,
  Description,
  Name,
  Email,
  Delete
} from '../list.styles'
import DeleteIcon from "../../../Icons/DeleteIcon.js"

const Card = (props) => {
  const {
    contact,
    onDeleteContact,
    index
  } = props;
  return (
    <CardOverview>
       <Image>
          <img 
            src={contact?.picture?.medium}
            style={{borderRadius: 50}}
            alt="" />
        </Image>
        <Description>
          <Name>
            {`${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`}
          </Name>
          <Email>
            <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
          </Email>
        </Description>
        <Delete onClick={() => onDeleteContact(index)}>
         <DeleteIcon />  
        </Delete>
    </CardOverview>
  )
};

export default Card;
