import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';


const Payment = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "df1a2d43-fa75-4bd9-822d-f03c71d1943d";
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3300/api/token&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>From.</Form.Label>
          <Form.Control type="email" placeholder="선물하는 사람의 이름을 입력해주세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>축하 메세지</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleClick}>
          결제하기
        </Button>
      </Form>
    </Container>
  )
}

export default Payment