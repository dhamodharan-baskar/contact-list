import styled from "styled-components";

export const ListOverview = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 12px;
`;

export const CardOverview = styled.div`
display: flex;
align-items: center;
border: 2px solid #D8D8D8;
margin: 12px 0px;
padding: 12px;
border-radius: 8px;
width: 450px;
position: relative;
@media screen and (max-width: 900px) {
  display: block;
  width: 300px;
}
`;

export const More = styled.div`
  cursor: pointer;
  color: #7FFD4;
  font-size: 14px;
  padding: 4px 0px;
`;

export const Description = styled.div`
padding: 8px;
`;

export const Delete = styled.div`
cursor: pointer;
position: absolute;
right: 8px;
top: 12px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0px;
`;

export const Email = styled.div`
font-size: 14px;
padding: 4px 0px;
`;

export const DetailsOverview = styled.div`
padding: 24px;
display: flex;
@media screen and (max-width: 900px) {
  display: block;
  width: auto;
}
`;

export const ContactDetails = styled.div`
padding: 0px 8px;
`;

export const ContactItem = styled.div`
font-size: 14px;
display: flex;
padding: 4px;
`;

export const Item = styled.div`
width: 100%;
margin: 0px 8px;
`;

export const Title = styled.div`
padding: 4px;
font-size: 16px;
font-weight: bold;
`;

export const HeaderView = styled.div`
border: 2px solid #D8D8D8;
width: 450px;
margin: 12px 0px;
padding: 12px;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px) {
  width: 300px;
}
`;

export const Button = styled.button`
  margin: 4px;
  cursor: pointer;
  border: 1px solid #CFD7DF;
  border-radius: 4px;
  box-shadow: 0 0 white;
  width: auto;
  font-weight: 600;
  padding: 0 10px;
  position: relative;
  text-align: center;
  color: #12344D;
  font-size: 14px;
  opacity: 1;
  height: 32px;
  background: linear-gradient(180deg,#FFFFFF 0%,#F3F5F7 100%);
`
export const PrimaryButton = styled.button`
  margin: 4px;
  cursor:  ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #CFD7DF;
  border-radius: 4px;
  box-shadow: 0 0 white;
  width: auto;
  font-weight: 600;
  padding: 0 10px;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 14px;
  opacity: 1;
  height: 32px;
  background: #24a0ed;
`
export const DeleteButton = styled.button`
  border: 1px solid #C82124;
  border-radius: 4px;
  width: auto;
  font-weight: 600;
  padding: 0 10px;
  position: relative;
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;
  opacity: 1;
  cursor: pointer;
  height: 32px;
  background: linear-gradient(
  180deg
  ,#D72D30 0%,#C82124 100%);
`

export const Options = styled.div` 
display: flex;
align-items: center;
width: 100%;
@media screen and (max-width: 900px) {
  flex-direction: column;
  justify-content: center;
  width: auto;
}
`;

export const Footer = styled.div` 
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
@media screen and (max-width: 900px) {
  justify-content: center;
}
`;

export const Sort = styled.div` 
display: flex;
margin: 8px 0px;
margin-left: auto;
@media screen and (max-width: 900px) {
  justify-content: flex-start;
}
`;

export const SortButton = styled.div` 
cursor: pointer;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
margin-right: 8px;
`;

export const LoaderView = styled.div` 
margin: 24px;
`;
export const FooterOption = styled.div` 
display: flex;
justify-content: flex-end;
`;
export const ImageUpload = styled.div` 
@media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
`;
export const Filter = styled.div` 
margin-right: 12px;
`;
export const Label = styled.div` 
color: #000;
font-size: 14px;
margin: 4px;
`;
export const ErrorMessage = styled.div` 
color: red;
font-size: 12px;
width: 100%;
display: flex;
justify-content: flex-end;
margin-right: 12px;
`;