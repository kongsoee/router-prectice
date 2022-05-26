import React from 'react'
import {Link,useNavigate} from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();
  const GoProductpage =()=>{
    navigate("/products?q=pants");
  };

  return (
    <div>
        <h1>home</h1>
        <Link to="/about">Go to about page</Link>
        <button onClick={GoProductpage}>Go to product page</button>
    </div>
  );
};

export default Homepage