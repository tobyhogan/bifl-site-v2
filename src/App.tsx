/*

import { FC } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import TShirts from './pages/TShirts';

const App: FC = () => {
  // Simple routing based on pathname
  const path = window.location.pathname;

  const getPage = () => {
    switch (path) {
      case '/clothes':
        return <Clothes />;
      case '/clothes/t-shirts':
        return <TShirts />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      {getPage()}
      <Footer />
    </div>
  );
};

export default App; 

*/

// dkfjasdl;kfjaskldjfl;asdkjf;lasdkjf;asldkfj;asdlkjfasd; lkfasd;lkfjasdl;kfjasd;lkfjasdl;kfj;dlkfj

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//import { ContextMenuProvider } from 'mantine-contextmenu';

import './dist/output.css';
import './App.css'



import Home from './pages/Home.tsx';
import Clothes from './pages/Clothes.tsx';
import Page404 from './pages/Page404.tsx';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';


function App() {

  const [dataUpdate, setDataUpdate] = useState(1);
  const tabSuffix =  " - Habitazen"


  navigator.wakeLock.request("screen")

  return (
    <Router>
      <div className=''>
        <Header />
        <Routes>

          <Route path="*" element={<Page404></Page404>} /> 
          <Route path="/" element={<Home></Home>} />
          <Route path="/clothes" element={<Clothes></Clothes>} />
        
          {/*<Route path="/login" element={<Login></Login>} />*/}

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
