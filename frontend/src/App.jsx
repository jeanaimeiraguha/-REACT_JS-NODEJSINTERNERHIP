import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './user';
import CreateUser from './createUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/create' element={<CreateUser />} /> {/* ✅ Capitalized component name */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
