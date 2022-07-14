import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FundingList from '../components/FundingList';


const Img = styled.img`
  width: 500px;
`
const FundingDetail = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/payment')
  }

  const fundingList = useSelector(state => state.fundingList);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Img src='https://i.postimg.cc/MZRXZL2n/beige-bag.jpg' />
        </Col>
        <Col>
          <h1>정태환 님의 선물을 모금해주세요.</h1><br />
          <h3>남은 기한 ( ~ 2022 / 07 / 14 )</h3>
          <Form.Range disabled="false" /><br />
          <h3>달성률 ( 50% )</h3>
          <Form.Range disabled="false" />
        </Col>
      </Row>
      <br />
      <Row style={{ maginTop: "50px" }}>
        <h3>정태환님의 메세지</h3>
        <Form.Control as="textarea" rows={10} disabled readOnly placeholder="저의 00번째 생일을 축하해주셔서 감사합니다." />
      </Row>
      <Row>
        <Button variant="secondary" onClick={handleClick}>모금하기</Button>
      </Row>
      <Row>
        {fundingList.map((item)=>(
          <FundingList item={item}/>
        ))}
      </Row>
    </Container>
  )
}

export default FundingDetail