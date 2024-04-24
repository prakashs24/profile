import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
// import Appheader from './Appheader';
import Customer from './Customer';
import "bootstrap/dist/css/bootstrap.min.css"


import 'react-toastify/dist/ReactToastify.css';

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// const port = 4000;

// server.use(middlewares);
// server.use(router);

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });


function App() {

  
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      {/* <Appheader></Appheader> */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;