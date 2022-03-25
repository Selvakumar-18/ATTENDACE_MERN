import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function Attendance(props) {
  const {name} = useParams()

  const [data,setData] = useState('')


useEffect(()=>{
  axios.get('http://localhost:4000/hello/login/employee/daily')
  .then((response)=>{
    console.log(response.data);
    let filtered = response.data.filter(_item => _item.user._id === name.split('-')[1])
    setData(filtered);
    console.log("data fetched successfully")
    console.log(response)
    console.log(response.data[0].date);
    
  })
  .catch((error)=>{
    console.log(error);
  })
},[])

  return (
    <div className='date' >
      <center>
      <h1>Attendance sheet</h1>
      <h4>Candidate Name{name.split('-')[0]}</h4>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>InTime(AM)</th>
              <th>OutTime(PM)</th>
              <th>LeaveType</th>  
            </tr>  
          </thead> 

          <tbody>
          {
              data&& data.map((data,index)=>{
                return(
                  <tr key={index}>
                    <td>{data.date}</td>
                    <td>{data.intime}</td>
                    <td>{data.outtime}</td>
                    <td>{data.leavetype}</td>

                  </tr>

                )
              })
            }  
            
            
          </tbody> 
          
        </table> 
     
      </center>
    </div>
  )
}

