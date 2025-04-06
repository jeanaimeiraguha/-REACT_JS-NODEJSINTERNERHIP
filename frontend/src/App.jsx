import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
import About from './ABout';
import Home from './Home';
// import  Form from './Form'

const App=()=>{
  return(
    <>
    <Router>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About Us</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    {/* <Form/> */}
    </>
  )
}
export default App;