import React from 'react'
import {BrowserRouter  , Routes, Route} from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
  <BrowserRouter>
  
  <Router>
    <Routes>
<Home/>
<Route></Route>
<Route path ="/" element={<Home/>} />
<Route/>
    </Routes>
  </Router>
  </BrowserRouter>
  )
}

export default App
