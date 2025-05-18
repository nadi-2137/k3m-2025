// TabLayout.js - Komponent układu z zakładkami
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabLayout = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mb-10">
      {/* Nawigacja zakładek */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } flex-1 sm:flex-none sm:px-6 py-4 text-center border-b-2 font-medium text-sm sm:text-base whitespace-nowrap mb-0`}
            aria-label={`Tab ${tab.title}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Zawartość zakładek */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabLayout;