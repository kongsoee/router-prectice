import { useState } from 'react';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail'
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from './page/Loginpage';
import Userpage from './page/Userpage';

function App() {
  const [authenticate, setAuthenticate]=useState(true); {/*false = 로그인안한거 */}
 
  {/*대문자 -> 컴포넌트, 함수 아님 */}
  const PrivateRoute =()=>{
    return authenticate ==true ? <Userpage/>:<Navigate to="/login"></Navigate>

  };

  return (
    <div>
      <Routes> {/*=각각의 페이지를 스위치 하는 역할, route로 정의*/}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
