// IconList.js - Komponent listy z ikonami
import React from 'react';
import { motion } from 'framer-motion';

const IconList = ({ items, icon, color = "red", title, animate = true }) => {
  // Konfiguracja kolorów dla różnych motywów
  const colorClasses = {
    red: "text-red-600",
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600"
  };

  const iconColor = colorClasses[color] || colorClasses.red;

  // Domyślna ikona (checkmark)
  const defaultIcon = (
    <svg className={`h-5 w-5 ${iconColor} mr-2 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="mb-6">
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={animate ? { opacity: 0, x: -20 } : { opacity: 1 }}
            whileInView={animate ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {icon || defaultIcon}
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default IconList;