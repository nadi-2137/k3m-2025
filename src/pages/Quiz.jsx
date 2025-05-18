// Quiz.js - komponent quizu zintegrowany z główną aplikacją
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Pełna lista pytań
  const allQuestions = [
    {
      questionText: 'Kiedy uchwalono Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: '3 maja 1789 roku', isCorrect: false },
        { answerText: '3 maja 1791 roku', isCorrect: true },
        { answerText: '3 maja 1793 roku', isCorrect: false },
        { answerText: '3 maja 1795 roku', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja została uchwalona 3 maja 1791 roku przez Sejm Czteroletni (Wielki) w Warszawie.'
    },
    {
      questionText: 'Kto był głównym autorem i inicjatorem uchwalenia Konstytucji 3 Maja?',
      answerOptions: [
        { answerText: 'Tadeusz Kościuszko', isCorrect: false },
        { answerText: 'Józef Poniatowski', isCorrect: false },
        { answerText: 'Stanisław August Poniatowski', isCorrect: true },
        { answerText: 'Jan Henryk Dąbrowski', isCorrect: false },
      ],
      explanation: 'Głównym autorem i inicjatorem Konstytucji 3 Maja był król Stanisław August Poniatowski. Współpracował z nim m.in. Ignacy Potocki i Hugo Kołłątaj.'
    },
    {
      questionText: 'Która z poniższych reform NIE została wprowadzona przez Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: 'Zniesienie liberum veto', isCorrect: false },
        { answerText: 'Wprowadzenie trójpodziału władzy', isCorrect: false },
        { answerText: 'Całkowite zniesienie pańszczyzny', isCorrect: true },
        { answerText: 'Ustanowienie monarchii dziedzicznej', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja nie zniosła pańszczyzny. Stawiała chłopów pod ochroną państwa i prawa, ale utrzymała system pańszczyźniany.'
    },
    {
      questionText: 'Jak długo obowiązywała Konstytucja 3 Maja?',
      answerOptions: [
        { answerText: 'Około 14 miesięcy', isCorrect: true },
        { answerText: '3 lata', isCorrect: false },
        { answerText: '5 lat', isCorrect: false },
        { answerText: '10 lat', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja obowiązywała około 14 miesięcy i 3 tygodnie, od 3 maja 1791 roku do czasu zwycięstwa konfederacji targowickiej wspieranej przez Rosję w lipcu 1792 roku.'
    },
    {
      questionText: 'Co było jedną z głównych przyczyn upadku Konstytucji 3 Maja?',
      answerOptions: [
        { answerText: 'Powstanie listopadowe', isCorrect: false },
        { answerText: 'Konfederacja targowicka i interwencja rosyjska', isCorrect: true },
        { answerText: 'Powstanie kościuszkowskie', isCorrect: false },
        { answerText: 'Wojny napoleońskie', isCorrect: false },
      ],
      explanation: 'Główną przyczyną upadku Konstytucji 3 Maja była konfederacja targowicka zawiązana przez przeciwnych reformom magnatów oraz interwencja wojsk rosyjskich w 1792 roku.'
    },
    {
      questionText: 'Jaka dynastia miała objąć tron Polski po śmierci Stanisława Augusta Poniatowskiego?',
      answerOptions: [
        { answerText: 'Dynastia Habsburgów', isCorrect: false },
        { answerText: 'Dynastia Romanowów', isCorrect: false },
        { answerText: 'Dynastia Wettynów', isCorrect: true },
        { answerText: 'Dynastia Burbonów', isCorrect: false },
      ],
      explanation: 'Zgodnie z Konstytucją 3 Maja, po śmierci Stanisława Augusta Poniatowskiego tron Polski miał przejść na dynastię Wettynów, konkretnie na elektora saskiego Fryderyka Augusta.'
    },
    {
      questionText: 'Który kraj był pierwszym na świecie, który uchwalił nowoczesną konstytucję?',
      answerOptions: [
        { answerText: 'Polska', isCorrect: false },
        { answerText: 'Francja', isCorrect: false },
        { answerText: 'Stany Zjednoczone', isCorrect: true },
        { answerText: 'Wielka Brytania', isCorrect: false },
      ],
      explanation: 'Pierwszym krajem, który uchwalił nowoczesną konstytucję, były Stany Zjednoczone w 1787 roku. Konstytucja 3 Maja z 1791 roku była drugą na świecie, a pierwszą w Europie.'
    },
    {
      questionText: 'Jakie zgromadzenie uchwaliło Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: 'Sejm Wielki (Czteroletni)', isCorrect: true },
        { answerText: 'Sejm Niemy', isCorrect: false },
        { answerText: 'Sejm Rozbiorowy', isCorrect: false },
        { answerText: 'Rada Nieustająca', isCorrect: false },
      ],
      explanation: 'Konstytucję 3 Maja uchwalił Sejm Wielki, zwany też Sejmem Czteroletnim, który obradował w Warszawie w latach 1788-1792.'
    },
    {
      questionText: 'Która z poniższych reform była częścią Konstytucji 3 Maja?',
      answerOptions: [
        { answerText: 'Wprowadzenie powszechnego prawa wyborczego', isCorrect: false },
        { answerText: 'Zniesienie przywilejów szlacheckich', isCorrect: false },
        { answerText: 'Trójpodział władzy (ustawodawcza, wykonawcza, sądownicza)', isCorrect: true },
        { answerText: 'Zniesienie stanów społecznych', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja wprowadzała trójpodział władzy na ustawodawczą (Sejm), wykonawczą (król i Straż Praw) oraz sądowniczą (niezawisłe sądy).'
    },
    {
      questionText: 'Co to było "liberum veto", zniesione przez Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: 'Prawo szlachty do buntu przeciwko królowi', isCorrect: false },
        { answerText: 'Prawo jednego posła do zerwania obrad Sejmu i unieważnienia jego decyzji', isCorrect: true },
        { answerText: 'Obowiązek szlachty do służby wojskowej', isCorrect: false },
        { answerText: 'Zakaz pełnienia urzędów przez mieszczan', isCorrect: false },
      ],
      explanation: 'Liberum veto było zasadą ustrojową dającą każdemu posłowi prawo zerwania obrad Sejmu i unieważnienia podjętych na nim decyzji. Przyczyniało się to do paraliżu państwa.'
    },
    {
      questionText: 'Który organ wykonawczy został ustanowiony przez Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: 'Rada Królewska', isCorrect: false },
        { answerText: 'Rada Nieustająca', isCorrect: false },
        { answerText: 'Straż Praw', isCorrect: true },
        { answerText: 'Komisja Edukacji Narodowej', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja ustanowiła Straż Praw jako organ władzy wykonawczej. Składała się z króla jako przewodniczącego oraz pięciu ministrów odpowiedzialnych przed Sejmem.'
    },
    {
      questionText: 'Co znacząco różniło Konstytucję 3 Maja od wcześniejszego ustroju Rzeczypospolitej?',
      answerOptions: [
        { answerText: 'Wprowadzenie republiki zamiast monarchii', isCorrect: false },
        { answerText: 'Wprowadzenie monarchii dziedzicznej zamiast elekcyjnej', isCorrect: true },
        { answerText: 'Wprowadzenie dwuizbowego parlamentu', isCorrect: false },
        { answerText: 'Całkowite zniesienie feudalizmu', isCorrect: false },
      ],
      explanation: 'Konstytucja 3 Maja zmieniła ustrój państwa z monarchii elekcyjnej (gdzie króla wybierała szlachta) na monarchię dziedziczną, w której tron miał być przekazywany w ramach dynastii.'
    },
    {
      questionText: 'Jakie wydarzenie było bezpośrednią reakcją opozycji na uchwalenie Konstytucji 3 Maja?',
      answerOptions: [
        { answerText: 'Insurekcja kościuszkowska', isCorrect: false },
        { answerText: 'Konfederacja barska', isCorrect: false },
        { answerText: 'Konfederacja targowicka', isCorrect: true },
        { answerText: 'Powstanie listopadowe', isCorrect: false },
      ],
      explanation: 'Bezpośrednią reakcją opozycji na uchwalenie Konstytucji 3 Maja było zawiązanie konfederacji targowickiej w 1792 roku przez grupę magnatów przeciwnych reformom, którzy poprosili Rosję o interwencję.'
    },
    {
      questionText: 'Jak zmieniły się prawa mieszczan dzięki Konstytucji 3 Maja?',
      answerOptions: [
        { answerText: 'Otrzymali pełne prawa polityczne równe szlachcie', isCorrect: false },
        { answerText: 'Stracili dotychczasowe prawa i przywileje', isCorrect: false },
        { answerText: 'Uzyskali prawo wyboru króla', isCorrect: false },
        { answerText: 'Otrzymali m.in. nietykalność osobistą i prawo nabywania ziemi', isCorrect: true },
      ],
      explanation: 'Konstytucja 3 Maja potwierdzała i rozszerzała prawa mieszczan, dając im m.in. nietykalność osobistą, prawo nabywania ziemi, dostęp do urzędów i stanowisk oraz możliwość uzyskania szlachectwa.'
    },
    {
      questionText: 'Kto był marszałkiem Sejmu Czteroletniego, który uchwalił Konstytucję 3 Maja?',
      answerOptions: [
        { answerText: 'Ignacy Potocki', isCorrect: false },
        { answerText: 'Stanisław Małachowski', isCorrect: true },
        { answerText: 'Hugo Kołłątaj', isCorrect: false },
        { answerText: 'Adam Stanisław Krasiński', isCorrect: false },
      ],
      explanation: 'Marszałkiem Sejmu Czteroletniego był Stanisław Małachowski, który odegrał kluczową rolę w procesie uchwalania Konstytucji 3 Maja.'
    }
  ];

  // Funkcja losująca kolejność odpowiedzi
  const shuffleAnswers = (questions) => {
    return questions.map(question => {
      return {
        ...question,
        answerOptions: [...question.answerOptions].sort(() => Math.random() - 0.5)
      };
    });
  };

  // Funkcja losująca pytania
  const selectRandomQuestions = (allQuestions, count) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Inicjalizacja quizu
  useEffect(() => {
    const shuffledAllQuestions = shuffleAnswers(allQuestions);
    setQuizQuestions(shuffledAllQuestions);
  }, []);

  // Uruchomienie quizu
  const startQuiz = () => {
    const selectedQs = selectRandomQuestions(quizQuestions, 10);
    setSelectedQuestions(selectedQs);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(30);
    setAnswerSelected(false);
    setShowExplanation(false);
  };

  // Obsługa czasomierza
  useEffect(() => {
    if (quizStarted && !showScore && !answerSelected) {
      const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      if (timeLeft === 0) {
        handleAnswerSelection(null, false);
      }
      return () => clearInterval(timer);
    }
  }, [timeLeft, quizStarted, showScore, answerSelected]);

  // Obsługa wyboru odpowiedzi
  const handleAnswerSelection = (index, isCorrect) => {
    setAnswerSelected(true);
    setSelectedAnswer(index);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Pokaż wyjaśnienie przez 3 sekundy
    setShowExplanation(true);
    setTimeout(() => {
      setShowExplanation(false);
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < selectedQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(30);
        setAnswerSelected(false);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 3000);
  };

  // Reset quizu
  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    // Przemieszaj wszystkie pytania na nowo
    const shuffledAllQuestions = shuffleAnswers(allQuestions);
    setQuizQuestions(shuffledAllQuestions);
  };

  const getProgressBarColor = () => {
    if (timeLeft > 20) return 'bg-green-500';
    if (timeLeft > 10) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-12 md:py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Konstytucja 3 maja - Quiz wiedzy
        </motion.h2>

        {!quizStarted ? (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Sprawdź swoją wiedzę!</h3>
              <p className="mb-6">
                Quiz składa się z 10 losowych pytań o Konstytucji 3 Maja.
                Na każde pytanie masz 30 sekund. Powodzenia!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startQuiz}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                aria-label="Rozpocznij quiz"
              >
                Rozpocznij quiz
              </motion.button>
            </motion.div>
          </div>
        ) : showScore ? (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Twój wynik</h3>
              <div className="text-5xl font-bold text-red-700 mb-6">{score} / {selectedQuestions.length}</div>
              <p className="mb-6">
                {score === selectedQuestions.length
                  ? "Doskonale! Perfekcyjny wynik! Jesteś ekspertem w temacie Konstytucji 3 Maja!"
                  : score >= selectedQuestions.length * 0.8
                  ? "Świetny wynik! Masz bardzo dobrą wiedzę o Konstytucji 3 Maja!"
                  : score >= selectedQuestions.length * 0.6
                  ? "Dobry wynik! Znasz podstawy, ale warto dowiedzieć się jeszcze więcej o Konstytucji 3 Maja."
                  : "Warto jeszcze poczytać o Konstytucji 3 Maja. Spróbuj ponownie!"}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                aria-label="Zagraj ponownie"
              >
                Zagraj ponownie
              </motion.button>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Pytanie {currentQuestion + 1} z {selectedQuestions.length}</h3>
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-2">{timeLeft}</span>
                  <svg className="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Pasek postępu czasu */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className={`h-2.5 rounded-full ${getProgressBarColor()}`}
                  style={{ width: `${(timeLeft / 30) * 100}%` }}
                ></div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold mb-6">{selectedQuestions[currentQuestion].questionText}</h4>

              <div className="space-y-3">
                {selectedQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    disabled={answerSelected}
                    onClick={() => handleAnswerSelection(index, answerOption.isCorrect)}
                    className={`block w-full text-left p-4 border rounded-lg transition-colors duration-300
                      ${answerSelected
                        ? (answerOption.isCorrect
                            ? 'bg-green-100 border-green-500'
                            : selectedAnswer === index
                              ? 'bg-red-100 border-red-500'
                              : 'border-gray-300 opacity-70')
                        : 'border-gray-300 hover:bg-red-50 hover:border-red-200'}`}
                    aria-label={`Odpowiedź: ${answerOption.answerText}`}
                  >
                    {answerOption.answerText}
                    {answerSelected && answerOption.isCorrect && (
                      <span className="float-right text-green-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                    {answerSelected && !answerOption.isCorrect && selectedAnswer === index && (
                      <span className="float-right text-red-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Wyjaśnienie odpowiedzi */}
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <p className="font-medium text-blue-800">
                    {selectedQuestions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}
            </motion.div>

            <div className="mt-8 flex justify-between">
              <div className="text-sm text-gray-600">
                Punkty: {score} / {currentQuestion + 1}
              </div>
              <button
                onClick={resetQuiz}
                className="text-red-700 hover:text-red-800 font-medium"
                aria-label="Przerwij quiz"
              >
                Przerwij quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;