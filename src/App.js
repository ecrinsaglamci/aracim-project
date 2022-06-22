import React, { useState, useContext } from 'react'
import Login from "./components/pages/Login";
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import CarList from './components/pages/CarList';
import Register from './components/pages/Register';
import Form from './components/pages/Form';
import FormSignup from './components/pages/FormSignup';
import LoginForm from './components/pages/LoginForm';
import {BrowserRouter as Router,Routes,Route,Link,Layout} from "react-router-dom";
import Mail from './components/pages/Mail';
import { CarContext } from '../src/CarContext/CarContext';
import {DataProvider} from './components/pages/Context';
import { Section } from './components/pages/Section';
import Cars from './components/pages/Cars';


class App extends React.Component {
  render(){
    return (
      <DataProvider>
      <div className='app'>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="register" element={<Register/>}/>
          <Route exact path="form" element={<Form/>}/>
          <Route exact path="cars" element={<Cars/>}/>

        </Routes>
       

        </Router>
      </div>
      </DataProvider>
    )

  } 
 
}

export default App;
