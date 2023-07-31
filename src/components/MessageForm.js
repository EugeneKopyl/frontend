import React from 'react';
import { useState } from 'react';
import { useMessagesContext } from '../hooks/useMessagesContext';
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function MessageForm() {
  const { messages, dispatch } = useMessagesContext();
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const sendForm = async () => {
    const res = await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      sendForm().then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          setTitle('');
          setDescription('');
          console.log('messages : ', messages);
          dispatch({ type: 'CREATE_MESSAGE', payload: res });
          toast.success('New message successfully added!');
          setValidated(false);
        }
      });
    }
  };

  return (
    <div>
      <Toaster />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId='title'>
          <FloatingLabel controlId='floatingInput' label='Title' className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Input title'
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Form.Control.Feedback type='invalid'>Please input title.</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId='description'>
          <FloatingLabel controlId='floatingInput' label='Description' className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Input description'
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Form.Control.Feedback type='invalid'>Please input description.</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button type='submit' variant='outline-success'>
          Add
        </Button>
      </Form>
    </div>
  );
}
