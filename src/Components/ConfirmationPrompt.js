import React from "react";
import styled from "styled-components";

const ConfirmationPrompt = props => {
const {
message,
primaryAction,
secondaryAction
} = props
return (
  <ModalOverview>
    <ModalContent>
      {message ? message : 'Are you sure about the action'}
    </ModalContent>
    <Footer>
      <CancelButton 
        type="submit" 
        onClick={() => props.onRequestClose()}>
          {secondaryAction ? secondaryAction : 'Cancel' }
      </CancelButton>
      <DeleteButton 
        type="submit" 
        onClick={() => props.onSubmit()}>
          {primaryAction ? primaryAction : 'Delete' }
      </DeleteButton>
    </Footer>
  </ModalOverview>
);
};

export default ConfirmationPrompt;

const ModalOverview = styled.div`

`
const ModalContent = styled.div`
padding: 24px;
font-size: 16px;
color: #12344D;
`
const Footer = styled.div`
display: flex;
justify-content: flex-end;
border-radius: 0 0 6px 6px;
background: #f5f7f9;
width: 100% !important;
justify-content: flex-end !important;
`
const DeleteButton = styled.button`
margin: 12px;
margin-left: 0px;
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
const CancelButton = styled.button`
margin: 12px;
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
