
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeartRain from './components/HeartRain';


import Home from './pages/Home';
import Memories from './pages/Memories';

function App() {

  return (
    <Router>
      <HeartRain />


      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-amber-100 text-gray-900 transition-colors duration-500 font-poppins relative overflow-hidden px-4 pt-10 flex flex-col items-center justify-start">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/flowers.png')] opacity-10 z-0 bg-repeat"></div>

        <div className="w-full max-w-4xl z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memories/:year" element={<Memories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
