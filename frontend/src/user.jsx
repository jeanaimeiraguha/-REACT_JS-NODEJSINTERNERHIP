import React, { useEffect } from 'react'
import axios from 'axios'
const User = () => {
     const[user,setUser]=useEffect([])  
     useEffect(()=>{
axios.get('http://localhost:5000/user')
.then(res=>setUser(res.data))
.catch(err=>console.log(err));
     },[])
  return (
    <div>
   <table border={1}>
     <thead>
          <tr>
          <th>Username</th>
          <th>Address</th>
          </tr>
     </thead>
     <tbody>
          {
               user.map((data,i)=>(
                    <tr key={i}>
                    <td>{data.username}</td>
                  <td>{data.username}</td>
               
                  </tr>))
          }
     </tbody>
   </table>
    </div>
  )
}

export default User
