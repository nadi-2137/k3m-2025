// Breadcrumbs.js - komponent ścieżki nawigacyjnej
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Mapowanie ścieżek URL na przyjazne nazwy
  const getPathName = (path) => {
    const pathMap = {
      'historia': 'Historia',
      'chronologia': 'Chronologia wydarzeń',
      'autorzy': 'Twórcy Konstytucji',
      'okolicznosci': 'Okoliczności uchwalenia',
      'postanowienia': 'Postanowienia',
      'ustroj': 'Struktura władzy',
      'prawa-obywateli': 'Prawa obywateli',
      'zmiany-prawne': 'Zmiany prawne',
      'akty-wykonawcze': 'Akty wykonawcze',
      'znaczenie': 'Znaczenie',
      'dziedzictwo': 'Dziedzictwo',
      'kontekst-europejski': 'Kontekst europejski',
      'tozsamosc-narodowa': 'Tożsamość narodowa',
      'przyczyny-porazki': 'Przyczyny porażki',
      'ciekawostki': 'Ciekawostki',
      'quiz': 'Quiz',
      'quiz-test': 'Test wiedzy'
    };

    return pathMap[path] || path;
  };

  // Jeśli jesteśmy na stronie głównej, nie pokazujemy breadcrumbs
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <motion.nav
      className="bg-gray-100 py-2 px-4 rounded-md mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Ścieżka nawigacyjna"
    >
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-red-700 transition-colors"
            aria-label="Strona główna"
          >
            Strona główna
          </Link>
          {pathnames.length > 0 && (
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </li>

        {pathnames.map((name, index) => {
          // Budujemy ścieżkę do tego breadcrumba
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className="font-medium text-red-700" aria-current="page">
                  {getPathName(name)}
                </span>
              ) : (
                <>
                  <Link
                    to={routeTo}
                    className="text-gray-600 hover:text-red-700 transition-colors"
                  >
                    {getPathName(name)}
                  </Link>
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumbs;