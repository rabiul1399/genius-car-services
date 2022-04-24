import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/CheckOut/ChehkOut/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Register from './Pages/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Header from './Pages/Sheard/Header/Header';
import NotFound from './Pages/Sheard/NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
          <Route path='/about' element={<About></About>}/>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path='/addservice' element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }></Route>
          <Route path='/manage' element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }></Route>
        
          <Route path='*' element={<NotFound></NotFound>}></Route>


        </Routes>
    </div>
  );
}

export default App;
