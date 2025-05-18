// Home.js - strona główna
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageData from "../data/imageData";
import ImageWithAttribution from "../components/ImageWithAttribution";

const Home = () => {
  // Główne sekcje serwisu
  const mainSections = [
    {
      title: "Historia",
      description:
        "Poznaj historię uchwalenia pierwszej w Europie nowoczesnej konstytucji",
      icon: (
        <svg
          className="w-12 h-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      path: "/historia",
      subsections: [
        { title: "Chronologia wydarzeń", path: "/historia/chronologia" },
        { title: "Twórcy Konstytucji", path: "/historia/autorzy" },
        { title: "Okoliczności uchwalenia", path: "/historia/okolicznosci" },
      ],
    },
    {
      title: "Postanowienia",
      description:
        "Odkryj rewolucyjne zmiany i reformy wprowadzone przez Konstytucję 3 Maja",
      icon: (
        <svg
          className="w-12 h-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      path: "/postanowienia",
      subsections: [
        { title: "Struktura władzy", path: "/postanowienia/ustroj" },
        { title: "Prawa obywateli", path: "/postanowienia/prawa-obywateli" },
        { title: "Zmiany prawne", path: "/postanowienia/zmiany-prawne" },
        { title: "Akty wykonawcze", path: "/postanowienia/akty-wykonawcze" },
      ],
    },
    {
      title: "Znaczenie",
      description:
        "Dowiedz się jaki wpływ Konstytucja 3 Maja miała na Polskę i Europę",
      icon: (
        <svg
          className="w-12 h-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      path: "/znaczenie",
      subsections: [
        { title: "Dziedzictwo", path: "/znaczenie/dziedzictwo" },
        {
          title: "Kontekst europejski",
          path: "/znaczenie/kontekst-europejski",
        },
        { title: "Tożsamość narodowa", path: "/znaczenie/tozsamosc-narodowa" },
        { title: "Przyczyny porażki", path: "/znaczenie/przyczyny-porazki" },
      ],
    },
  ];

  return (
    <>
      {/* Hero sekcja */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-0">
          <ImageWithAttribution
            src={imageData.chronology.uchwalenie.src}
            alt={imageData.chronology.uchwalenie.alt}
            attribution={imageData.chronology.uchwalenie.attribution}
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-yellow-600 opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-1">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Konstytucja 3 Maja
            </motion.h2>
            <motion.h3
              className="text-2xl md:text-3xl mb-8 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Pierwsza w Europie, druga na świecie nowoczesna konstytucja
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl mb-10 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Uchwalona 3 maja 1791 roku, była przełomowym dokumentem
              państwowym, który miał na celu reformę ustroju Rzeczypospolitej
              Obojga Narodów i zabezpieczenie jej suwerenności.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link
                to="/historia"
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
                aria-label="Poznaj historię"
              >
                Poznaj historię
              </Link>
              <Link
                to="/quiz"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                aria-label="Sprawdź swoją wiedzę"
              >
                Sprawdź swoją wiedzę
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fakty o Konstytucji */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Fakty o Konstytucji 3 Maja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3 maja 1791</h3>
                  <p>
                    Data uchwalenia Konstytucji przez Sejm Czteroletni (Wielki),
                    działający od 1788 roku w Warszawie.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reforma ustroju</h3>
                  <p>
                    Wprowadziła trójpodział władzy, dziedziczność tronu, zniosła
                    liberum veto i rozszerzyła prawa mieszczan.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pierwsza w Europie</h3>
                  <p>
                    Druga na świecie po konstytucji amerykańskiej z 1787 roku i
                    pierwsza w Europie spisana, nowoczesna konstytucja.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/ciekawostki"
              className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold"
            >
              Zobacz więcej ciekawostek
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Główne sekcje */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Odkryj Konstytucję 3 Maja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mainSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {section.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {section.subsections.map((subsection, idx) => (
                      <Link
                        key={idx}
                        to={subsection.path}
                        className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-red-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{subsection.title}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link
                      to={section.path}
                      className="inline-block px-6 py-2 border border-red-700 text-red-700 rounded-md hover:bg-red-700 hover:text-white transition-colors"
                    >
                      Przejdź do działu
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cytat */}
      <section className="py-16 md:py-24 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-red-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl italic mb-6">
              "Ostatnia wola i testament gasnącej Ojczyzny"
            </blockquote>
            <cite className="text-lg">
              — tak określili Konstytucję 3 Maja jej twórcy
            </cite>
          </div>
        </div>
      </section>

      {/* Znaczenie Konstytucji */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6">
                  Znaczenie Konstytucji 3 Maja
                </h2>
                <div className="prose prose-lg">
                  <p>
                    Konstytucja 3 Maja, mimo krótkiego okresu obowiązywania
                    (tylko 14 miesięcy), miała ogromne znaczenie dla Polski i
                    Europy. Była wyrazem dążeń do modernizacji państwa i
                    ratowania niepodległości Rzeczypospolitej.
                  </p>
                  <p>
                    Po upadku państwa stała się symbolem polskich dążeń
                    niepodległościowych i reform. Nawet w czasach zaborów
                    rocznica jej uchwalenia była ważnym świętem narodowym,
                    przypominającym o dawnej wielkości i nadziei na odzyskanie
                    suwerenności.
                  </p>
                  <p>
                    Dzisiaj Konstytucja 3 Maja pozostaje jednym z
                    najważniejszych symboli polskiej tradycji państwowej i
                    patriotycznej, a dzień jej uchwalenia jest świętem
                    narodowym.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/znaczenie"
                    className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold"
                  >
                    Dowiedz się więcej o znaczeniu Konstytucji
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <ImageWithAttribution
                  src={imageData.documents.konstytucjaStrona75.src}
                  alt={imageData.documents.konstytucjaStrona75.alt}
                  attribution={
                    imageData.documents.konstytucjaStrona75.attribution
                  }
                  className="rounded-lg shadow-xl w-full h-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  position="top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2">
                  Pierwsza strona oryginalnego wydania Konstytucji 3 Maja
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zaproszenie do quizu */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-40 h-40 bg-yellow-100 rounded-full -mt-10 -mr-10 z-0"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-yellow-100 rounded-full -mb-6 -ml-6 z-0"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Sprawdź swoją wiedzę o Konstytucji 3 Maja!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Czy wiesz, kiedy dokładnie uchwalono Konstytucję? Kto był
                    jej głównym autorem? Jakie reformy wprowadziła? Rozwiąż nasz
                    interaktywny quiz i przekonaj się, jak dobrze znasz ten
                    ważny dokument w historii Polski!
                  </p>
                  <Link
                    to="/quiz"
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    aria-label="Rozpocznij quiz"
                  >
                    Rozpocznij quiz
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <svg
                    className="w-32 h-32 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
