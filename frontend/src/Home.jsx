import React from 'react'

const Home = () => {
  return (
    <div style={{textAlign:"center",margin:103}}>
       <h1 style={{textAlign:"center",justifyContent:"center"}}>Welcome to Our Website</h1>
       <section class="intro">
            <h2>Your Journey Begins Here</h2>
            <p>Discover amazing content, explore our services, and join our community.</p>
            <button onclick="location.href='#services'">Learn More</button>
        </section>
       
    </div>
  )
}

export default Home
