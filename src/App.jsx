import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
function App() {

  return (
    <>
    {/* <Home/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
</Router>
    </>
  )
}

export default App
