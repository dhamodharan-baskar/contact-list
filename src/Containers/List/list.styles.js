import styled from "styled-components";

export const ListOverview = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardOverview = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid;
  margin: 12px 0px;
  padding: 12px;
  border-radius: 8px;
  width: 350px;
  position: relative;
`;

export const Image = styled.div`
    display: flex;
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
`;

export const Email = styled.div`
  font-size: 14px;
`;