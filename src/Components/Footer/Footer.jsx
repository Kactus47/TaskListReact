import { ModalWindow } from '../ModalWindow/ModalWindow';
import { FormAddTask } from '../Forms/FormAddTask/FormAddTask';
import { FormEditTask } from '../Forms/FormEditTask/FormEditTask';
import { useSelector } from 'react-redux';

export const Footer = () => {
  
  const modalName = useSelector(state => state.modalSlice.formName);

  const checkModalWindow = () => {
    if(modalName !== '' && modalName === 'addForm') {
      return <ModalWindow titleModual="Додавання завдання" component={FormAddTask} />
    } else if(modalName !== '' && modalName === 'editForm') {
      return <ModalWindow titleModual="Редагування завдання" component={FormEditTask} />
    }
  }

  return (
    <>
      { checkModalWindow() }
    </>
  )
}