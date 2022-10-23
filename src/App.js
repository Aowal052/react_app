import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './components/Products/DashBoard';
import Layout from './components/Layout/Layout';
import Authenticate from './components/Authenticate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          {/* <Route path="/" element={<Layout />}> */}
            <Route path="/dashboard" element={<DashBoard />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
