import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Help from './pages/Help';

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-gray-800 font-sans">
      
      {/* Sticky Header with fade-down animation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md animate-fade-down">
        <Header />
      </div>

      {/* Scrollable Main Content */}
      <main className="flex-1 pt-16 pb-20 px-3 sm:px-4 overflow-y-auto animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>

      {/* Sticky Footer with fade-up animation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-inner animate-fade-up">
        <Footer />
      </div>
    </div>
  );
}
