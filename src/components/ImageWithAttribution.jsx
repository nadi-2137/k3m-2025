// ImageWithAttribution.js - Komponent obrazu z atrybucją
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithAttribution = ({ src, alt, attribution, className, position = 'bottom', ...props }) => {
  const [showAttribution, setShowAttribution] = useState(false);

  const [useFallback, setUseFallback] = useState(false);
  const isTop = position === 'top';

  const isSrcObject = typeof src === 'object' && src.webp && src.fallback;
  const imgSrc = isSrcObject ? (useFallback ? src.fallback : src.webp) : src;

  return (
    <div className="relative block w-full">
      <motion.img
        src={imgSrc}
        alt={alt}
        className={className || "rounded-lg shadow-lg"}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onError={() => setUseFallback(true)}
        loading="lazy"
        {...props}
      />

      {attribution && (
        <>
          <button
            className={`absolute ${isTop ? 'top-2' : 'bottom-2'} right-2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
            onClick={() => setShowAttribution(!showAttribution)}
            aria-label={showAttribution ? "Ukryj informacje o źródle" : "Pokaż informacje o źródle"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>

          {showAttribution && (
              <motion.div
                className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-sm`}
                initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isTop ? -20 : 20 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowAttribution(false)}
              >
              <p><strong>Źródło:</strong> {attribution.source}</p>
              {attribution.author && <p><strong>Autor:</strong> {attribution.author}</p>}
              {attribution.license && <p><strong>Licencja:</strong> {attribution.license}</p>}
              {attribution.link && (
                <a
                  href={attribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  Zobacz oryginał
                </a>
              )}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageWithAttribution;