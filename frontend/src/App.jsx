import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route element="/" path={<Home/>}/>
      <Route element="/About" path={<About/>}/>
      {/* <Route element="/" path='{<Home/>}'/> */}
    </Routes>
   </Router>
   
   </>
  )
}

export default App
