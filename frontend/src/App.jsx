import User from './user'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
      </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
