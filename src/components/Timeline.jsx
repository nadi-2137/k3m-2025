// Timeline.js - Komponent prezentujący chronologię wydarzeń (poprawiona wersja)
import React from 'react';
import { motion } from 'framer-motion';
import ImageWithAttribution from './ImageWithAttribution';

const Timeline = ({ events }) => {
  return (
    <div className="relative py-8">
      {/* Pionowa linia */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-700 z-0"></div>

      {/* Wydarzenia */}
      <div className="relative z-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Data - lewa strona dla parzystych, prawa dla nieparzystych */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <motion.div
                className="bg-red-700 text-white inline-block py-2 px-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {event.date}
              </motion.div>
              {event.image && (
                <div className="mt-4">
                  <ImageWithAttribution
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    attribution={event.imageAttribution}
                    className="rounded-lg shadow-lg object-cover h-48 w-full"
                  />
                </div>
              )}
            </div>

            {/* Punkt na osi czasu */}
            <div className="w-2/12 flex justify-center">
              <div className="w-8 h-8 bg-white border-4 border-red-700 rounded-full"></div>
            </div>

            {/* Treść wydarzenia - prawa strona dla parzystych, lewa dla nieparzystych */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;