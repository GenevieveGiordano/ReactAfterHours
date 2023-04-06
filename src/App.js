import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SiteNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import SiteAlert from './components/SiteAlert';
import StickerDetailPage from './pages/StickerDetailPage';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div className="App">
      <SiteAlert/>
      <Header/>
      <SiteNavbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Shop' element={<ProductPage/>}/>
        <Route path='AboutMe' element={<AboutMe/>}/>
        <Route path='Shop/:stickerId' element={<StickerDetailPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
