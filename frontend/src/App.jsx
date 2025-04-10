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
//Creation entire App component

// import React from 'react'
// import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import Home1 from './Home1'
// import About1 from './about1'
// const App = () => {
//   return (
//     <div>
//       <Router>
//         <nav style={{padding:13}} >
//           <Link to="/">Home</Link>
//           <Link to="/about1">About</Link>
//         </nav>
//           <Routes>
//                <Route path='/' element={<Home1/>}/>
//                <Route path='/about1' element={<About1/>}/>
//           </Routes>

//       </Router>
//     </div>
//   )
// }

// export default App
