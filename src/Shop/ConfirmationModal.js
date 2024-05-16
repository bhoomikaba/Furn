import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdBorderColor } from 'react-icons/md';

export default function ConfirmationModal({ show, handleClose }) {
  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    marginBottom: '10px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: 'white', borderBottom: 'none'}}>
        <Modal.Title style={titleStyle}>Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <p>Your order is confirmed!</p>
      </Modal.Body>
      <Modal.Footer  style={{ borderTop: 'none', backgroundColor: 'white', justifyContent: 'center' }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
