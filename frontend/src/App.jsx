// 

import React from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import User from './user'
import Create from './Create'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='' element={<User/>}/>
        <Route path='create' element={<Create/>}/>
        {/* <Route path='about' element={<About/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
