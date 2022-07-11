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
  border: 1px solid;
  width: 350px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;