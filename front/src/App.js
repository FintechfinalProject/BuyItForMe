import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import FundingDetail from './pages/FundingDetail';
import Payment from './pages/Payment';
import AuthResult from './pages/AuthResult';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<FundingDetail />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/authResult' element={<AuthResult />} />
      </Routes>
    </div>
  );
}

export default App;
