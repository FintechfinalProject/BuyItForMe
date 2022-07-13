import React from 'react'
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction} from '../redux/actions/authenticateAction'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { id, password } = useSelector(
    (state) => state.auth
  );

  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user funciton issue");
    const {id, password} = e.target;
    dispatch(authenticateAction.login(id,password))

    axios.get(`http://localhost:3500/loginGet`,{
      // 서버로 데이터를 넘긴다.
      body: {
        id: id.value,
        password: password.value,
      }
    })
    // res 저장
    .then((res)=> {
      if(res.data === "error"){
        alert("이메일과 비밀번호를 확인해주세요")
      }
      else{
        navigate('/')
      }
      // 메세지에 따라서 행동을 할수잇따
    })
  }

  return (
    <div>
      <Container>
        <Form onSubmit={(e)=>loginUser(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name='id' placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login