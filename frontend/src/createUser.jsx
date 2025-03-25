import React, { useState } from 'react'

const createUser = () => {
  const[username, setUsername]= useState('')
  const[address, setAddress]= useState('')
  //Passing data to backend 
  const handleSubmit=(event)=>{
event.preventDefault();
axios.post('localhost:5000/user')
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
