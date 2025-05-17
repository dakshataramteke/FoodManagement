import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Signup from './screens/Signup';
function App() {

  return (
    <>
    {/* <Home/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/createuser" element={<Signup />} />
      </Routes>
</Router>
    </>
  )
}

export default App
