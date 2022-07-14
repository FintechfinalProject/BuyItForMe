import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Payment = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  
  const addFunding = (event) => {
    event.preventDefault();
    let tmpwindow = window.open("about:blank");
    const clientId = process.env.CLIENT_ID;
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3300/api/token&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    dispatch({type:"ADD_FUNDING", payload:{name, message}})
  };

  return (
    <Container onSubmit={addFunding}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>From.</Form.Label>
          <Form.Control type="text" placeholder="선물하는 사람의 이름을 입력해주세요." onChange={(event)=>setName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>축하 메세지</Form.Label>
          <Form.Control as="textarea" rows={7} onChange={(event)=>setMessage(event.target.value)}/>
        </Form.Group>
        <Button variant="secondary" type="submit">
          결제하기
        </Button>
      </Form>
    </Container>
  )
}

export default Payment