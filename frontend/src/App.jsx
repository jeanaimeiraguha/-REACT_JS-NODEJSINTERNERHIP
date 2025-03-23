
import './App.css'
import {Browserrouter ,Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
    <Browserrouter>
    <Routes>
     <Route path='' element={<Home/>}>


     </Route>
    </Routes>
    
    </Browserrouter>
      
    </>
  )
}

export default App
