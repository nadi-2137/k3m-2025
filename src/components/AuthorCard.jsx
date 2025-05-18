// AuthorCard.js - Poprawiony komponent karty autora
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageWithAttribution from './ImageWithAttribution';

const AuthorCard = ({ author }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <ImageWithAttribution
          src={author.image}
          alt={author.name}
          attribution={author.imageAttribution}
          className="w-full h-72 object-cover object-top"
          position="top"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{author.name}</h3>
          <p className="text-gray-200 text-sm">{author.role}</p>
        </div>
      </div>

      <div className="p-4">
        <div className={`prose prose-sm overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-none' : 'max-h-24'}`}>
          <p dangerouslySetInnerHTML={{__html: author.bio}}></p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-red-700 hover:text-red-800 font-medium flex items-center"
          aria-label={isExpanded ? "Pokaż mniej" : "Czytaj więcej"}
        >
          {isExpanded ? 'Pokaż mniej' : 'Czytaj więcej'}
          <svg
            className={`w-4 h-4 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default AuthorCard;