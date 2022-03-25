import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {

  const navigate =useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  

  
async function loginUser(event){
  event.preventDefault()

 const response= fetch('http://localhost:4000/hello/login',{
   method:'POST', //Mention which kind of Method(get,post,delete)
    headers:{
      'Content-Type':'application/json', //we send all data as json format to server 
    },
    body:JSON.stringify({  //we throw the json data
      email,
      password,
    }),
  })
  const data = await response;

  console.log(data)

  if (data.status === 200)
  {
    alert('Login Successful');
    navigate('/Quote'); 
    console.log("success");
  }
  else
  {
    alert('please check your username and password')
  }
  // console.log(data);
}  
  return (

    <div className="login-page">

      
      <form className="login-form" onSubmit={loginUser}>

      <h2>Login</h2>

        <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email'
                placeholder='Email'/><br></br>
      
        <input value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='password'
                placeholder='Password'/><br></br>
      <br></br>

      {/*<input value="submit" placholder="Submit"/>*/}
      <button className="login-btn" type='submit'>Login</button>
     {/* <button className='login-cancel'>Reset</button>*/}
      </form>     
    </div>
  );
}

export default Login;
