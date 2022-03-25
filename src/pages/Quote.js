import { useEffect, useState } from 'react';
import './Quote.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Daily from '../pages/Daily';


export default function Quote() {

  const [sno,setSno] = useState('');
  const [name,setName] = useState('');
  const [data,setData]=useState('')

/*Adding Employee Name and Detail*/

async function employeeUser(event){
  event.preventDefault()

  const response = fetch("http://localhost:4000/hello/login/employee",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    sno,
    name,
    attendance : []
  }),
})

const data = await response;
console.log(data)

if(data.status === 200)
{
  alert('Employee name added sucessfully');
}
else
{
 alert('Something Error');
}
}

/*Adding Employee Name and Detail in table*/
useEffect(()=>{
axios.get('http://localhost:4000/hello/login/employee')
.then((response)=>{
  setData(response.data);
  console.log("Data Fetched successfully")
  console.log(response);
  console.log(response.data);
})
.catch((error)=>{
  console.log(error);
})
},[]);

return (
<center>
<div className='quote'>
<h4>ADD USER NAME IN TABLE</h4>
  <div className='Quote-page'>

   <button className="adduser-btn" type='submit'>AddUser</button><br></br>

      <form onSubmit={employeeUser}>

       <input 
          value={sno}
          onChange={(e)=>setSno(e.target.value)}
          type='text'
          placeholder='S.No'/><br></br>
   
        <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type='name'
          placeholder='Name'/><br></br>
        
    <button className="adduser-btn" type='submit'>Submit</button><br></br>    
      </form>  
  </div>


  <div className="table">
        
      <h2 className="heading">Total Candidates</h2>
      <table>
        <thead>
          <tr>
            
            <th>S.No</th>
            <th>Name</th>
            <th>Upate Attendace</th>
            <th>Attendace Report</th>
            
            
          </tr>
        </thead>
        
      <tbody>
        {
            data && data.map((data,index)=>{
            return(
              
              <tr key={index}>
                
                <td>{data.sno}</td>
                <td>{data.name}</td>
                <td><Daily id={data._id} name={data.name}>Daily</Daily></td>
                <td>{<Link to={`/Attendance/:${data.name}-${data._id}`}>View Attendance</Link>}</td> 
                      
              </tr>
                        
            )
            })
          }
      </tbody>
      </table>
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
    </div>
  
</div>
</center>
);
}