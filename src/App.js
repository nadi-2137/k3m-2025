// App.js - główny komponent aplikacji
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Chronology from './pages/history/Chronology';
import Authors from './pages/history/Authors';
import Circumstances from './pages/history/Circumstances';
import Provisions from './pages/Provisions';
import PowerStructure from './pages/provisions/PowerStructure';
import CitizenRights from './pages/provisions/CitizenRights';
import LegalChanges from './pages/provisions/LegalChanges';
import ExecutiveActs from './pages/provisions/ExecutiveActs';
import Impact from './pages/Impact';
import Legacy from './pages/impact/Legacy';
import EuropeanContext from './pages/impact/EuropeanContext';
import NationalIdentity from './pages/impact/NationalIdentity';
import Failures from './pages/impact/Failures';
import Trivia from './pages/Trivia';
import QuizIntro from './pages/QuizIntro';
import Quiz from './pages/Quiz';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<History />} />
          <Route path="historia/chronologia" element={<Chronology />} />
          <Route path="historia/autorzy" element={<Authors />} />
          <Route path="historia/okolicznosci" element={<Circumstances />} />
          <Route path="postanowienia" element={<Provisions />} />
          <Route path="postanowienia/ustroj" element={<PowerStructure />} />
          <Route path="postanowienia/prawa-obywateli" element={<CitizenRights />} />
          <Route path="postanowienia/zmiany-prawne" element={<LegalChanges />} />
          <Route path="postanowienia/akty-wykonawcze" element={<ExecutiveActs />} />
          <Route path="znaczenie" element={<Impact />} />
          <Route path="znaczenie/dziedzictwo" element={<Legacy />} />
          <Route path="znaczenie/kontekst-europejski" element={<EuropeanContext />} />
          <Route path="znaczenie/tozsamosc-narodowa" element={<NationalIdentity />} />
          <Route path="znaczenie/przyczyny-porazki" element={<Failures />} />
          <Route path="ciekawostki" element={<Trivia />} />
          <Route path="quiz" element={<QuizIntro />} />
          <Route path="quiz-test" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;