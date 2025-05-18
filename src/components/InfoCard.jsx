// InfoCard.js - Komponent karty informacyjnej
import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ title, content, icon, color = "red" }) => {
  // Konfiguracja kolorów dla różnych motywów
  const colorClasses = {
    red: {
      background: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-600",
      title: "text-red-800"
    },
    blue: {
      background: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-800"
    },
    green: {
      background: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      title: "text-green-800"
    },
    yellow: {
      background: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "text-yellow-600",
      title: "text-yellow-800"
    },
    purple: {
      background: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      title: "text-purple-800"
    }
  };

  const classes = colorClasses[color] || colorClasses.red;

  return (
    <motion.div
      className={`${classes.background} rounded-lg p-6 border ${classes.border} mb-6`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h3 className={`text-xl font-bold mb-4 flex items-center ${classes.title}`}>
        {icon && (
          <span className={`mr-2 ${classes.icon}`}>
            {icon}
          </span>
        )}
        {title}
      </h3>
      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </motion.div>
  );
};

export default InfoCard;