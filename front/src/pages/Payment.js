import React from 'react'

const Payment = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "df1a2d43-fa75-4bd9-822d-f03c71d1943d";
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3300/api/token&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <div>Payment</div>
      <input placeholder='선물하는 사람' /><br />
      <input type="textbox" placeholder='메세지 입력'></input><br />
      <button onClick={handleClick}>통장에서 결제하기</button><br />
      <button>카카오페이 결제하기</button>
    </div>
  )
}

export default Payment