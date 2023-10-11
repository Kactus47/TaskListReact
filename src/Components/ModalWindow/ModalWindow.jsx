import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateModal } from '../../redux/slice/modalSlice';

export const ModalWindow = ({titleModual, component: Component}) => {
  
  const dispatch = useDispatch();
  const modualState = useSelector(state => state.modalSlice.modalState);

  const handleCloseModal = () => {
    dispatch(changeStateModal(false));
  };

  return (
    <Modal onHide={handleCloseModal} show={modualState}>
      <Modal.Header closeButton>
        <Modal.Title>{titleModual}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Component && <Component />}
      </Modal.Body>
    </Modal>
  );
}
