import React, { useEffect } from 'react'
import axios from 'axios'
const Home = () => {
 useEffect(()=>{
  axios.get('https://localhost:3000')
.then(res=>console.log(res)) 
.catch()
})
  return (
    <div>
      
    </div>
  )
}

export default Home
