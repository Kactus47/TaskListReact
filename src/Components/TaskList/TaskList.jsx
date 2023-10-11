import { useDispatch, useSelector } from "react-redux";
import {TaskItem} from './TaskItem/TaskItem';
import { useEffect, useRef } from 'react';
import { addTaskLS } from '../../redux/slice/taskSlice';

export const TaskList = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.taskSlice.items);
  const isMounted = useRef(false);

  useEffect(() => {
    if(isMounted.current) {
      const jsonTasks = JSON.stringify(tasks);
      window.localStorage.setItem('tasks', jsonTasks);
    }
    isMounted.current = true;
  }, [tasks]); 

  useEffect(() => {
    const arrayTasks = JSON.parse(window.localStorage.getItem('tasks'))
    if(arrayTasks !== null && arrayTasks.length > 0) {
      dispatch(addTaskLS(arrayTasks))
    }
  }, [dispatch]);


  const failedTask = tasks.filter(taks => !taks.status).map((task, index) => <TaskItem key={index} {...task}/>);
  const complateTask = tasks.filter(taks => taks.status).map((task, index) => <TaskItem key={index} {...task}/>);

  return(
    <div className="task col-lg-6 mx-auto px-3">
      {
        (failedTask.length === 0 && complateTask.length === 0) ? (<h2 className="text-center mb-3">Завдання ще не додавались</h2>) : null
      }
      {
        failedTask.length > 0 && 
        <div className="task__list task__list-failed mb-5">
          <h2 className="mb-3">Не виконано</h2>
          { failedTask }
        </div>
      }
      {
        complateTask.length > 0 &&
        <div className="task__list task__list-complate mb-5">
          <h2 className="mb-3">Виконано</h2>
          { complateTask }
        </div>
      }
    </div>
  )
}