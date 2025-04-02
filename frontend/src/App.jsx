import React from 'react'
import {BrowserRouter  , Routes, Route} from 'react-router-dom'
const App = () => {
  return (
  <BrowserRouter>
  
  <Router>
    <Routes>

<Route></Route>
<Route path ="/" element={<Home/>} />
<Route/>
    </Routes>
  </Router>
  </BrowserRouter>
  )
}

export default App
