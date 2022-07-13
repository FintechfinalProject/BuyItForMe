import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Img = styled.img`
  width: 300px;
`
const FundingDetail = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/payment')
  }

  return (
    <div>
      FundingDetail<br/>
      <Img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165665517440937643.jpg?gif=1&w=1280&h=1280&c=c&webp=1'/><br/>
      펀딩 설명 어쩌구<br/>
      남은 기한<br/>
      달성률<br/>
      <button onClick={handleClick}>선물하기</button>    
    </div>
  )
}

export default FundingDetail