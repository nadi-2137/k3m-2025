// SubpageNavigation.js - komponent przycisku nawigacji do następnej/poprzedniej strony
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Typy przycisków: 'prev' (poprzednia strona) lub 'next' (następna strona)
const SubpageLink = ({ type, to, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center ${type === 'next' ? 'justify-end' : 'justify-start'}`}
    >
      <Link
        to={to}
        className={`flex items-center p-3 text-gray-700 hover:text-red-700 transition-colors gap-2 ${
          type === 'next' ? 'flex-row' : 'flex-row-reverse'
        }`}
        aria-label={type === 'next' ? `Przejdź do ${label}` : `Powrót do ${label}`}
      >
        {type === 'prev' ? (
          <>
            <span>{label}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </>
        ) : (
          <>
            <span>{label}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </Link>
    </motion.div>
  );
};

// Komponent nawigacji między podstronami (poprzednia/następna)
export const SubpageNavigation = ({ prevLink, nextLink }) => {
  if (!prevLink && !nextLink) return null;

  return (
    <div className="border-t border-gray-200 mt-12 pt-6">
      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          {prevLink && <SubpageLink type="prev" to={prevLink.to} label={prevLink.label} />}
        </div>
        <div className="w-1/2 pl-2">
          {nextLink && <SubpageLink type="next" to={nextLink.to} label={nextLink.label} />}
        </div>
      </div>
    </div>
  );
};

export default SubpageNavigation;