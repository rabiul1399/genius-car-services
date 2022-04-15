import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from './Pages/Sheard/Header/Header';


function App() {
  return (
    <div className="">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          {/* <Route path='/' element={<Header></Header>}></Route> */}
          <Route path='/' element={<About></About>}/>


        </Routes>
    </div>
  );
}

export default App;
