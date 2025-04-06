// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Services from './Services'
// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/services' element={<Services/>}/>
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App



import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import React from 'react'
import NotFound from './NotFound '
import MyForm from './Form'

const App = () => {
  return (
    <div>
      <Router>
        <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <MyForm/>
    </div>
  )
}

export default App
