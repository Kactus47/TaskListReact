import { useDispatch, useSelector } from 'react-redux';
import { updateTask, removeTask, editTask } from '../../../redux/slice/taskSlice';
import { changeStateModal, nameModal } from '../../../redux/slice/modalSlice';
import "./TaskItem.scss";

export const TaskItem = ({ id, title, description, status }) => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.taskSlice.items);
  const statusUpdate = () => {
    dispatch(updateTask(id))
  }
  const deleteBtn = () => {
    dispatch(removeTask(id));

    const jsonTasks = JSON.stringify(tasks);
    window.localStorage.clear('tasks');
    window.localStorage.setItem('tasks', jsonTasks);
  }
  const editBtn = () => {
    dispatch(editTask(id))
    dispatch(nameModal('editForm'));
    dispatch(changeStateModal(true));
  }


  return (
    <div className="task-item d-flex align-items-center pb-3 mb-3 flex-wrap flex-xs-nowrap border-bottom">
      <div className="task-item__content flex-sm-grow-1">
        <div className="task-item__title h5">{title}</div>
        <div className="task-item__desct">{description}</div>
      </div>
      <div className="task-item__action">
        <button onClick={editBtn} type="button" className="edit"></button>
        <button onClick={statusUpdate} type="button" className={`status ${status ? 'check' : 'uncheck'}`}></button>
        <button onClick={deleteBtn} type="button" className="delate"></button>
      </div>
    </div>
  )
}