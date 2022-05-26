import React from 'react'
import { useNavigate } from 'react-router-dom'; //이동

const Aboutpage = () => {

    const navigate = useNavigate();

    const goToHomepage =()=>{
        navigate('/');
    };
  return (
    <div>
        
        <h1>about</h1>
        <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage