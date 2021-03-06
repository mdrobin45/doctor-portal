import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Doctors from './Components/Pages/Doctors/Doctors';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import APIContextProvider from './ContextAPI/APIContextProvider';
import Appointment from './Components/Pages/Appointment/Appointment';
import Login from './Components/Pages/Account/Login/Login';
import Register from './Components/Pages/Account/Register/Register';

const App = () =>
{
  return (
    <APIContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/appointment/:id' element={<Appointment/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </APIContextProvider>
  );
};

export default App;