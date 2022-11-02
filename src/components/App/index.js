import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../Menu';
import BannerPage from '../pages/BannerPage';
import FeaturesPage from '../pages/FeaturesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';
import TestimonialsPage from '../pages/TertimonialsPage';

import './App.css';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>    
        <Menu />  
        <Routes>
          <Route path='/' element={<BannerPage />}/>
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/portfolio' element={<PortfolioPage />}/>
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/team' element={<TeamPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
