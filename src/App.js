import React ,{Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/loading" element={<Loading/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
  ); 
};

export default App;