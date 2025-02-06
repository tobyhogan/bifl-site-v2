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