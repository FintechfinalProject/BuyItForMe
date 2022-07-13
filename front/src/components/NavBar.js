import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction'
import { useDispatch } from 'react-redux'

const Nav = styled.div`
border-bottom: 1px dotted #000;
  display: flex;
  justify-content: space-between;
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`

const NavBar = ({ authenticate }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/')
  }

  const logOut = () => {
    dispatch(authenticateAction.logout(authenticate))
  }


  return (
    <Nav>
      <div className='nav-section' onClick={goToMain}>
        메인으로가기
      </div>
      {authenticate === false ?
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        :
        <div className='login-button' onClick={logOut}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
        </div>
      }
      
    </Nav>
  )
}

export default NavBar