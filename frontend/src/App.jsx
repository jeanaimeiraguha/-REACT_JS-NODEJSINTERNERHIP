import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './user'
import Create from './Create'
import Update from './update'
import Delete from './Delete'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="delete/:id" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
