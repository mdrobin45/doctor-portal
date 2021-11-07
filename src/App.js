import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import APIContextProvider from './ContextAPI/APIContextProvider';

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
          <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </APIContextProvider>
  );
};

export default App;