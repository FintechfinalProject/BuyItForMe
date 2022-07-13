import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ProductDetail from './pages/ProductDetail';
import ProductUpload from './pages/ProductUpload';

function App() {
  const authenticate = useSelector(state=>state.auth.authenticate)
  useEffect(()=>{console.log("authenticate : ", authenticate)},[authenticate])

  return (
    <div>
    <NavBar authenticate={authenticate}/>
    <Routes>
      <Route path='/*' element={<MainPage/>}/>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/funding/:id' element={<ProductDetail/>}/>
      <Route path='/productUpload' element={<PrivateRoute authenticate={authenticate}/>}/>
     </Routes>
    </div>
  );
}

export default App;
