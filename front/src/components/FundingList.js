import React from 'react'
import { Row, Col } from 'react-bootstrap'

const FundingList = ({item}) => {

  return (
    <Row>
      <Col lg={2}>
        <img width={50}
        src='https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png'
        />
      </Col>
      <Col lg={10}>
        <div>
          {item.name}
        </div>
        <div>
          {item.message}
        </div>
      </Col>
    </Row>
  )
}

export default FundingList