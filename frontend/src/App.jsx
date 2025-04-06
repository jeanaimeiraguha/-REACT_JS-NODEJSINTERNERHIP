// import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
// import ABout from './ABout';
// const App=()=>{
//   return(
//     <>
//   <BrowserRouter>
//   <Router>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/About' element={<About/>}/>
//       {/* <Route path='/' element={<Home/>}/>
//       <Route path='/' element={<Home/>}/> */}
//     </Routes>
//   </Router>
  
//   </BrowserRouter>

//     </>
//   )
// }
// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ABout from './ABout';
// import NotFound from './NotFound';
function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 {/* <Route path="*" element={<NotFound />} /> */}
 </Routes>
 </Router>
 )};
 export default App;