import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import About from './ABout';

const App=()=>{
  return(
    <>
    <Router>
      <Routes>
    <Route element="/" path={<Home/>}/>
    <Route element="/about" path={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App;