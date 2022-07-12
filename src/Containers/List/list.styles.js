import styled from "styled-components";

export const ListOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardOverview = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #D8D8D8;
  margin: 12px 0px;
  padding: 12px;
  border-radius: 8px;
  width: 350px;
  position: relative;
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
`;
export const ContactDetails = styled.div`
  padding: 0px 16px;
`;
export const ContactItem = styled.div`
  padding: 4px 0px;
  font-size: 14px;
`;

export const Title = styled.div`
  padding: 4px 0px;
  font-size: 16px;
  font-weight: bold;
`;

export const HeaderView = styled.div`
  border: 2px solid #D8D8D8;
  width: 350px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
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
`;

export const Footer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const Sort = styled.div` 
  margin-left: auto;
  display: flex;
`;

export const SortButton = styled.div` 
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderView = styled.div` 
  margin: 24px;
`;