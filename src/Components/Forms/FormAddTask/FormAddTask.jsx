import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTask } from '../../../redux/slice/taskSlice';
import { changeStateModal } from '../../../redux/slice/modalSlice';
import { validateForm } from '../validateForm';

export const FormAddTask = () => {

  const [validationErrors, setValidationErrors] = useState({
    title: false,
    description: false,
  });
  
  const [valueFields, setValueFields] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();

  const { formIsValid, errors } = validateForm(valueFields);

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
      dispatch(addTask(valueFields));
      setValueFields({
        title: '',
        description: ''
      });
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
          onChange={handleInputChanges} 
          type="text" 
          value={valueFields.title} 
          // required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Опис задачі</Form.Label>
        <Form.Control 
          name="description"
          isInvalid={validationErrors.description} 
          onChange={handleInputChanges}
          as="textarea"
          value={valueFields.description}
          rows={3} 
          // required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Додати завдання</Button>
    </Form>
  )
}