// Layout.js - komponent układu strony z nawigacją i stopką
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images-optimized/POL_COA_under_the_rule_of_Stanislaus_II_August-lg.png';
import Breadcrumbs from './Breadcrumbs';
import BackToTopButton from './BackToTopButton';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Zamykanie menu po zmianie strony
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Tytuł strony dynamicznie ustawiany na podstawie aktualnej ścieżki
  useEffect(() => {
    const pageTitles = {
      '/': 'Strona główna',
      '/historia': 'Historia uchwalenia',
      '/postanowienia': 'Główne postanowienia',
      '/znaczenie': 'Znaczenie i wpływ',
      '/ciekawostki': 'Ciekawostki',
      '/quiz': 'Quiz wiedzy'
    };

    document.title = `Konstytucja 3 Maja - ${pageTitles[location.pathname] || 'Strona główna'}`;
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 flex flex-col">
      {/* Nagłówek */}
      <header className="bg-red-700 text-white shadow-md relative z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <motion.img
              src={logo}
              alt="Godło Polski za panowania Stanisława Augusta"
              className="h-12 w-auto bg-white rounded p-1 shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setShowPopup(true)}
            />

            <motion.h1
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link to="/">Konstytucja 3 Maja</Link>
            </motion.h1>
          </div>

                      {/* Lightbox */}
      <AnimatePresence>
  {showPopup && (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowPopup(false)}
    >
      {/* przycisk zamknięcia w prawym górnym rogu */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 focus:outline-none z-50"
        aria-label="Zamknij"
      >
        ×
      </button>

      {/* zawartość popupu */}
      <div className="p-4 max-w-lg w-full text-center" onClick={(e) => e.stopPropagation()}>
        <motion.img
          src={logo}
          alt="Godło Polski za panowania Stanisława Augusta"
          className="w-full max-h-[80vh] mx-auto bg-white rounded shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <p className="mt-4 text-white text-sm">
          Godło Rzeczypospolitej za panowania Stanisława Augusta Poniatowskiego
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>


          {/* Menu mobilne - przycisk */}
          <button
            className="md:hidden block"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Menu na większych ekranach */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/' ? 'font-bold' : ''}`}
              aria-label="Strona główna"
            >
              Strona główna
            </Link>
            <Link
              to="/historia"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/historia' ? 'font-bold' : ''}`}
              aria-label="Historia uchwalenia"
            >
              Historia
            </Link>
            <Link
              to="/postanowienia"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/postanowienia' ? 'font-bold' : ''}`}
              aria-label="Główne postanowienia"
            >
              Postanowienia
            </Link>
            <Link
              to="/znaczenie"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/znaczenie' ? 'font-bold' : ''}`}
              aria-label="Znaczenie i wpływ"
            >
              Znaczenie
            </Link>
            <Link
              to="/ciekawostki"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/ciekawostki' ? 'font-bold' : ''}`}
              aria-label="Ciekawostki"
            >
              Ciekawostki
            </Link>
            <Link
              to="/quiz"
              className={`text-white hover:text-yellow-300 transition-colors ${location.pathname === '/quiz' ? 'font-bold' : ''}`}
              aria-label="Quiz"
            >
              Quiz
            </Link>
          </nav>
        </div>

        {/* Menu mobilne rozwijane */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-red-800 absolute w-full left-0 z-20 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4">
              <Link
                to="/"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/' ? 'font-bold' : ''}`}
                aria-label="Strona główna"
              >
                Strona główna
              </Link>
              <Link
                to="/historia"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/historia' ? 'font-bold' : ''}`}
                aria-label="Historia uchwalenia"
              >
                Historia
              </Link>
              <Link
                to="/postanowienia"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/postanowienia' ? 'font-bold' : ''}`}
                aria-label="Główne postanowienia"
              >
                Postanowienia
              </Link>
              <Link
                to="/znaczenie"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/znaczenie' ? 'font-bold' : ''}`}
                aria-label="Znaczenie i wpływ"
              >
                Znaczenie
              </Link>
              <Link
                to="/ciekawostki"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/ciekawostki' ? 'font-bold' : ''}`}
                aria-label="Ciekawostki"
              >
                Ciekawostki
              </Link>
              <Link
                to="/quiz"
                className={`py-3 text-white hover:text-yellow-300 transition-colors ${location.pathname === '/quiz' ? 'font-bold' : ''}`}
                aria-label="Quiz"
              >
                Quiz
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Główna treść - tutaj będą renderowane komponenty podstron */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs />
        </div>
        <Outlet />
      </main>

        <BackToTopButton></BackToTopButton>

      {/* Stopka */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Nadia Zofia Łuczak, Szkoła Podstawowa nr 83 w Łodzi</p>
            </div>
            <div>
              <p>Projekt edukacyjny - Konstytucja 3 Maja</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;