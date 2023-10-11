import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskSave } from '../../../redux/slice/taskSlice';
import { changeStateModal } from '../../../redux/slice/modalSlice';
import { validateForm } from '../validateForm';

export const FormEditTask = () => {

  const dispatch = useDispatch();
  const editTaskInfo = useSelector(state => state.taskSlice.editItem);
 
  const [validationErrors, setValidationErrors] = useState({
    title: false,
    description: false,
  });

  const [valueFields, setValueFields] = useState({
    title: '',
    description: ''
  });

  const { formIsValid, errors } = validateForm(valueFields);

  useEffect(() => {
    setValueFields({
      title: editTaskInfo.title,
      description: editTaskInfo.description
    })
  }, [editTaskInfo]);

  const handleInputChanges = (e) => {
    const {name, value} = e.target;
    setValueFields((object) => ({
        ...object,
        [name]: value
    })) 
  }

  const handleCheckForm = (e) => {
    e.preventDefault();
    setValidationErrors(errors);
    if(formIsValid) {
      dispatch(editTaskSave({
        id: editTaskInfo.id,
        ...valueFields,
      }));
      setValueFields({
        title: '',
        description: ''
      })
      dispatch(changeStateModal(false));
    }
  }

  return (
    <Form onSubmit={handleCheckForm} className="task-form">
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Заголовок завдання</Form.Label>
        <Form.Control 
          name="title"
          isInvalid={validationErrors.title} 
          type="text" 
          value={valueFields.title} 
          onChange={handleInputChanges} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Опис задачі</Form.Label>
        <Form.Control 
          name="description"
          as="textarea"
          isInvalid={validationErrors.title} 
          value={valueFields.description}
          rows={3} 
          onChange={handleInputChanges}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Зберегти зміни</Button>
    </Form>
  )
}