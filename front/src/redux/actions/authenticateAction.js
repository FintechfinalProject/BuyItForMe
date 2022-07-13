function login(id, password) {
  return (dispatch, getState) => {
    console.log("login sucecc action")
    dispatch({ type:"LOGIN_SUCCESS", payload:{id, password} })
  };
}

function logout(authenticate) {
  return (dispatch, getState) => {
    console.log("login 정보 불러오기 성공")
    dispatch({ type:"LOGOUT_SUCCESS", payload:{authenticate}})
  }
}

export const authenticateAction = {login, logout};