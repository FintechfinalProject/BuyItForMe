import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
// import PrivateRoute from './route/PrivateRoute';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
// import MainPage from './pages/MainPage';
// import LoginPage from './pages/LoginPage';
import FundingDetail from './pages/FundingDetail';
import Payment from './pages/Payment';
import AuthResult from './pages/AuthResult';

function App() {
  const authenticate = useSelector(state=>state.auth.authenticate)
  useEffect(()=>{console.log("authenticate : ", authenticate)},[authenticate])

  return (
    <div>
    <NavBar authenticate={authenticate}/>
    <Routes>
      {/* <Route path='/' element={<MainPage/>}/> */}
      {/* <Route path='/login' element={<LoginPage/>}/> */}
      {/* <Route path='/productUpload' element={<PrivateRoute authenticate={authenticate}/>}/> */}
      <Route path='/funding' element={<FundingDetail/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/authResult' element={<AuthResult/>}/>
     </Routes>
    </div>
  );
}

export default App;
