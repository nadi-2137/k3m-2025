// SectionNavigation.js - komponent nawigacji w obrębie sekcji
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SectionNavigation = ({ section, items }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Sprawdzanie rozmiaru ekranu
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Inicjalna weryfikacja
    checkScreenSize();

    // Nasłuchiwanie na zmiany rozmiaru okna
    window.addEventListener('resize', checkScreenSize);

    // Czyszczenie
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Logika sticky dla większych ekranów
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Nie wyświetlamy, jeśli nie mamy elementów do pokazania
  if (!items || items.length === 0) {
    return null;
  }

  // Styl dla wersji sticky
  const stickyStyle = isSticky && !isMobile ? {
    position: 'fixed',
    top: '20px',
    width: '250px'
  } : {};

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-4 mb-8 ${isSticky && !isMobile ? 'md:sticky md:top-4' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={stickyStyle}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold flex items-center text-red-700">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          Nawigacja w dziale {section}
        </h3>

        {/* Przycisk rozwijania dla urządzeń mobilnych */}
        {isMobile && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-red-700 focus:outline-none"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Zwiń menu" : "Rozwiń menu"}
          >
            <svg
              className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      <ul className={`space-y-1 ${isMobile && !isExpanded ? 'hidden' : 'block'}`}>
        {/* Link do strony głównej sekcji */}
        <li>
          <Link
            to={`/${section}`}
            className={`block py-2 px-3 rounded-md transition-colors ${
              currentPath === `/${section}`
                ? 'bg-red-100 text-red-800 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            Przegląd ogólny
          </Link>
        </li>

        {/* Linki do podstron */}
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${section}/${item.path}`}
              className={`block py-2 px-3 rounded-md transition-colors ${
                currentPath === `/${section}/${item.path}`
                  ? 'bg-red-100 text-red-800 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SectionNavigation;