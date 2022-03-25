import React,{useState} from 'react'
import { Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Daily.css'

export default function Daily(props) {
  const { id, name} = props
  const axios = require('axios').default;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [date,setDate] = useState('');
    const [intime,setIntime] = useState('');
    const [outtime,setOuttime] = useState('');
    const [leavetype,setLeavetype] = useState('');

   async function datePicker(event) {
      
      event.preventDefault()
    axios({
        method: 'post',
        url: 'http://localhost:4000/hello/login/employee/daily',
        data: {
          date,
          intime,
          outtime,
          leavetype,
          user : id
        }
      })
      .then(function (response) {
        alert("date,time fetched suceessfully");
        console.log(response);
      })
      .catch(function (error) {
        alert("date,time not fetched")
        console.log(error);
      })
}
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Today Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Today Attendance</Modal.Title>
          </Modal.Header>
          <Modal.Body className='Modal_body'>
            
          <form className='modal_body_form'>
            <center>
              <h4>Name:{name}</h4>
            </center>
           
              <label>Date:</label><br></br>
              <input
               value={date}
               onChange={(e)=>setDate(e.target.value)}
               type="date"/><br></br>
              
              <label>In Time:</label><br></br>
              <input 
              value={intime}
              onChange={(e)=>setIntime(e.target.value)}/><br></br>
              
              <label>Out Time:</label><br></br>
              <input 
              value={outtime}
              onChange={(e)=>setOuttime(e.target.value)}/><br></br>
              
              <label>Leave Type:</label><br></br> 
              <input
              value={leavetype}
              onChange={(e)=>setLeavetype(e.target.value)} 
              type="text"/>
                
              <br></br>
              
              <Modal.Footer><br></br>
              
                <Button variant="primary" onClick={datePicker}>
                  Submit
                </Button>
              
              </Modal.Footer>
              
          </form>
         
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
//   const response= fetch('http://localhost:4000/hello/login/employee/daily',{
        
//     method:'POST',
    
//     headers:{
//       'Content-Type':'appliction/json',
//     },
    
//     body:JSON.stringify({
//       date,
//       intime,
//       outtime,
//       leavetype
//     }),
//     })
//     let data = await response;
//     console.log(data)
// if(data.status === 200)
// {
// console.log("Got it");
// alert("TIME,DATE FETCHED SUCCESSFULLY");
// }  
// else
// {
// console.log("Failure");
// alert("error check the code again")
// }