import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Help from './pages/Help';
import ThankYou from './pages/ThankYou';

// Layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-green-50 font-sans">
        {/* Sticky Header with animation */}
        <div className="fixed top-0 w-full z-50 shadow-md bg-white animate-fade-down">
          <Header />
        </div>

        {/* Main content scrollable between header and footer */}
        <main className="flex-grow pt-16 pb-20 px-2 sm:px-4">
          <div className="animate-fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/help" element={<Help />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </div>
        </main>

        {/* Sticky Footer */}
        <div className="fixed bottom-0 w-full z-50 shadow-inner bg-white animate-fade-up">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
