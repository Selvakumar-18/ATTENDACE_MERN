import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../src/pages/Register.css'
import {Link} from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

async function registerUser(event){
  event.preventDefault()

 const response = fetch('http://localhost:4000/hello/',{
   method:'POST', //Mention which kind of Method(get,post,delete)
    headers:{
      'Content-Type':'application/json', //we send all data as json format to server 
    },
    body:JSON.stringify({  //we throw the json data
      name, 
      email,
      password,
    }),
  })
  const data = await response;
  console.log(data);
  if(data.status === 200)
  {
    console.log("success")
    navigate('/login')
  }
  else
  { alert('Fill All the Fields')
    console.log("Something Wrong Check...........")
  }

}  
  return (
<div>
    <div className="register-page">

      <form  className='register-form' onSubmit={registerUser}>
      
      <h2>Register</h2>

     
        <input value={name}
                onChange={(e)=>setName(e.target.value)}
                type='text'
                placeholder='Name'/><br></br> 
      

      
        <input value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email'
                placeholder='Email'/><br></br>
      

      
        <input value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='password'
                placeholder='Password'/><br></br>
      <br></br>

      {/*<input value="submit" placholder="Submit"/> 
          <button type='submit'>Submit</button>*/}
      <input className="register-btn" type="submit" value="Register" /><br></br>
        <p className='log-text'>Already User <Link to="/Login">Login</Link></p>
      </form>
      
      
    </div>

    
</div>
  );
}

export default App;
