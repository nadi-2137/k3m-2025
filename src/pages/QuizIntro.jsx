// QuizIntro.js - strona wprowadzająca do quizu
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuizIntro = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quiz wiedzy o Konstytucji 3 Maja
          </motion.h2>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Sprawdź swoją wiedzę o pierwszej polskiej konstytucji! Przygotowaliśmy dla Ciebie interaktywny quiz, który pozwoli Ci przetestować, ile pamiętasz z historii Konstytucji 3 Maja.
              </p>
              <p>
                Quiz składa się z 10 losowo wybranych pytań. Na każde pytanie masz 30 sekund. Po zakończeniu otrzymasz wynik i ocenę swojej wiedzy.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">Co zawiera quiz?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-red-700 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Historia uchwalenia</h4>
                  <p className="text-gray-600">Pytania o okoliczności, daty i przebieg uchwalenia Konstytucji</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-red-700 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Twórcy Konstytucji</h4>
                  <p className="text-gray-600">Pytania o osoby, które przyczyniły się do powstania dokumentu</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-red-700 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Główne postanowienia</h4>
                  <p className="text-gray-600">Pytania o reformy i zmiany wprowadzone przez Konstytucję</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-red-700 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Znaczenie i wpływ</h4>
                  <p className="text-gray-600">Pytania o rolę i znaczenie Konstytucji w historii Polski</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/quiz-test"
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
                  aria-label="Rozpocznij quiz"
                >
                  Rozpocznij quiz
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Wskazówki przed rozpoczęciem
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Zwróć uwagę na daty - są kluczowe dla wielu pytań</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pamiętaj o głównych autorach Konstytucji i ich rolach</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Czytaj pytania uważnie - czasem wymagają wskazania, czego Konstytucja NIE wprowadzała</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Po każdej odpowiedzi zobaczysz wyjaśnienie, które pomoże Ci pogłębić wiedzę</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizIntro;