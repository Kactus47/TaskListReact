import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { changeStateModal, nameModal } from '../../redux/slice/modalSlice';

export const AddTaskBtn = () => {

  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(changeStateModal(true));
    dispatch(nameModal('addForm'));
  }

  return(
    <Button onClick={handleOpenModal} className='d-block m-auto' variant="primary">Додати нове завдання</Button>
  )
}