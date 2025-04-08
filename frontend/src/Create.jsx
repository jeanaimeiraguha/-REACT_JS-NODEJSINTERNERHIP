import React, { useState } from 'react'

const Create = () => {
 const[name,setUsername] =useState("");
 const[email,setemail]=useState("")
 const handlesubmit=(event)=>{

     
 }
 
     return (
    <div>
      <form action="" onSubmit={handlesubmit}>
         Username <input type="text" onChange={e=>setUsername(e.target.value)} /> <br />
Email <input type="email" onChange={e=>setEmail(e.target.value)} />
<br /> <br />
<button>Add new</button>
      </form>
    </div>
  )
}

export default Create
