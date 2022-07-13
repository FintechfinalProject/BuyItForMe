import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: gray;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <ModalCardBlock>
      <p>후원할 금액을 입력해주세요.</p>
      <input /* onChange={handleChange} */></input>
      <WithDrawButton onClick={handleClick}>후원하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;