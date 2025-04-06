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



import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About'
const App=()=>{
  return(
    <>
    <Router>

      <nav>
        <link  to ="/">Home</link>
        <link  to ="/about"> About Us</link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    
    </>
  )
}
export default App;


