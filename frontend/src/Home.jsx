import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
 
 const [data,setData]=useState([])
  useEffect(()=>{
  axios.get('http://localhost:1000')
.then(res=>setData(res.data)) 
.catch(err=>console.log(err))
},[])
  return (
    <div>
    <table>
      <tr>
    
        <th>ID</th>
        <th>Username</th>
        <th>Password</th>
        <th>Operations</th>
        </tr>
       { data.map((user, index)=>{
        return <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.address}</td>
<td>
  <button>Edit</button>
  <button>Delete</button>
</td>
        </tr>
       })}  
      </table>  
    </div>
  )
}

export default Home
