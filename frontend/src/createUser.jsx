import React, { useState } from 'react'

const createUser = () => {
  const[username, setUsername]= useState('')
  const[address, setAddress]= useState('')
  const navigate=useNavigate();
  //Passing data to backend 
  const handleSubmit=(event)=>{
event.preventDefault();
axios.post('http://localhost:5000/user/create',{username,address})
 .then(res=>{
     console.log(res);
     navigate('/');
 }).catch(err=>{
     console.log(err)
 }) 
} 
  return (
    <div>
     <form onSubmit={handleSubmit}>
         <input type="text" placeholder=' username'  onChange={e=>setUsername(e.target.value)}/> <br /><br />
         <input type="text"  placeholder=' address' onChange={e=>setAddress(e.target.value)}/>
          <br /><br />
          <button>Submit</button>
     </form>
      
    </div>
  )
}

export default createUser
