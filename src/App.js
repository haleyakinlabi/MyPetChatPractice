import React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home></Home>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="register" element={<Register></Register>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
