import Modal from 'react-modal';
const customStyles = {
overlay: {
  backgroundColor: "rgba(18,52,77,0.58)",
  zIndex: 3000,
  transition: "opacity 250ms"
},
content: {
  top: "0%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  overflow: "visible",
  borderRadius: "0 0 6px 6px",
  boxShadow: "0 0 0 1px rgba(24,50,71,0.1), 0 1px 4px 0 rgba(24,50,71,0.15), 0 6px 14px 0 rgba(24,50,71,0.05)",
  marginRight: "-50%",
  padding: "0",
  transform: "translate(-50%, 0)",
  border: 0,
}
};

const ModalView = (props) => {
return (
  <Modal
    ariaHideApp={false}
    isOpen={props.isOpen}
    style={customStyles}
    onRequestClose={props.onRequestClose}>
          {props.children}
  </Modal>
)
};

export default ModalView;
