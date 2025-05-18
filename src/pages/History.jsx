// History.js - główna strona historii, przekierowująca do podsekcji
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageData from "../data/imageData";
import ImageWithAttribution from "../components/ImageWithAttribution";
import SectionNavigation from "../components/SectionNavigation";
import { historiaItems } from "./history/menu";
import SubpageNavigation from "../components/SubpageNavigation";

const History = () => {
  const sections = [
    {
      title: "Chronologia wydarzeń",
      description:
        "Poznaj najważniejsze daty i wydarzenia związane z uchwaleniem Konstytucji 3 Maja.",
      image: imageData.chronology.sejmCzteroletni,
      path: "/historia/chronologia",
    },
    {
      title: "Twórcy Konstytucji",
      description:
        "Dowiedz się więcej o głównych autorach i inicjatorach Konstytucji 3 Maja.",
      image: imageData.authors.poniatowski,
      path: "/historia/autorzy",
    },
    {
      title: "Okoliczności uchwalenia",
      description:
        "Zapoznaj się z sytuacją polityczną i przebiegiem uchwalenia Konstytucji.",
      image: imageData.circumstances.matejkoUchwalenie,
      path: "/historia/okolicznosci",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Historia uchwalenia Konstytucji 3 Maja
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blok nawigacyjny */}
          <aside className="md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-4">
              <SectionNavigation
                section="historia"
                items={historiaItems}
              />
            </div>
          </aside>

          {/* Blok treści */}
          <main className="flex-grow max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Uchwalenie Konstytucji 3 Maja było jednym z najważniejszych
                wydarzeń w historii Polski. Ta pierwsza w Europie i druga na
                świecie nowoczesna konstytucja miała na celu zreformowanie i
                umocnienie Rzeczypospolitej Obojga Narodów, pogrążonej w
                kryzysie po I rozbiorze Polski w 1772 roku.
              </p>
              <p>
                Zapraszamy do zapoznania się z szczegółami historycznymi
                związanymi z powstaniem tego przełomowego dokumentu. Poniżej
                znajdziesz odnośniki do stron poświęconych chronologii wydarzeń,
                twórcom Konstytucji oraz okolicznościom jej uchwalenia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ImageWithAttribution
                    src={section.image.src}
                    alt={section.image.alt}
                    attribution={section.image.attribution}
                    className="w-full h-48 object-cover object-top"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <Link
                      to={section.path}
                      className="text-red-700 hover:text-red-800 font-semibold flex items-center"
                    >
                      Czytaj więcej
                      <svg
                        className="w-4 h-4 ml-1"
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
                </motion.div>
              ))}
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-8">
              <h3 className="text-xl font-bold mb-3">Przyczyny uchwalenia</h3>
              <div className="prose prose-lg">
                <p>
                  Główne przyczyny, które doprowadziły do potrzeby uchwalenia
                  Konstytucji 3 Maja:
                </p>
                <ul>
                  <li>
                    Zagrożenie ze strony sąsiednich mocarstw (Rosji, Prus i
                    Austrii) po I rozbiorze Polski
                  </li>
                  <li>
                    Kryzys polityczny spowodowany niesprawnym ustrojem (liberum
                    veto, wolna elekcja)
                  </li>
                  <li>
                    Konieczność modernizacji państwa i wprowadzenia reform
                    społecznych
                  </li>
                  <li>
                    Potrzeba ograniczenia wpływów magnaterii, która często
                    działała wbrew interesom państwa
                  </li>
                  <li>
                    Inspiracja ideami oświeceniowymi i przykładem rewolucji
                    amerykańskiej
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-xl font-bold mb-3">Czy wiesz, że...</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Konstytucja 3 Maja została uchwalona w tajemnicy przed
                    większością opozycji, która nie powróciła jeszcze po
                    przerwie świątecznej do Warszawy.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Kilka dni po uchwaleniu Konstytucji większość sejmików
                    wojewódzkich wyraziła dla niej poparcie, co świadczyło o
                    szerokim społecznym poparciu dla reform.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Tekst Konstytucji 3 Maja był wielokrotnie publikowany i
                    tłumaczony na obce języki, co świadczy o jej międzynarodowym
                    znaczeniu.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Obchody rocznicy uchwalenia Konstytucji 3 Maja były zakazane
                    zarówno w okresie zaborów, jak i w czasach PRL.
                  </span>
                </li>
              </ul>
            </div>
            <SubpageNavigation
              nextLink={{
                to: "/historia/chronologia",
                label: "Chronologia wydarzeń",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default History;
