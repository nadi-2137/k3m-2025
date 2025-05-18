// Impact.js - główna strona o znaczeniu Konstytucji
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageData from "../data/imageData";
import ImageWithAttribution from "../components/ImageWithAttribution";
import SectionNavigation from "../components/SectionNavigation";
import { znaczenieItems } from "./impact/menu";
import SubpageNavigation from "../components/SubpageNavigation";

const Impact = () => {
  const sections = [
    {
      title: "Dziedzictwo Konstytucji",
      description:
        "Jakie znaczenie ma Konstytucja 3 Maja dla współczesnej Polski i co jej zawdzięczamy obecnie?",
      image: imageData.chronology.uchwalenie,
      path: "/znaczenie/dziedzictwo",
    },
    {
      title: "Kontekst europejski",
      description:
        "Jak Konstytucja 3 Maja wpisywała się w europejskie nurty oświeceniowe i jakie było jej znaczenie dla innych krajów?",
      image: imageData.europeancontext.declaration,
      path: "/znaczenie/kontekst-europejski",
    },
    {
      title: "Tożsamość narodowa",
      description:
        "Jak Konstytucja 3 Maja wpłynęła na kształtowanie się polskiej tożsamości narodowej przez wieki?",
      image: imageData.nationalidentity.chicago,
      path: "/znaczenie/tozsamosc-narodowa",
    },
    {
      title: "Przyczyny porażki",
      description:
        "Dlaczego Konstytucja 3 Maja obowiązywała tak krótko i co doprowadziło do jej upadku?",
      image: imageData.failures.wieszanieZdrajcow,
      path: "/znaczenie/przyczyny-porazki",
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
          Znaczenie i wpływ Konstytucji 3 Maja
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blok nawigacyjny */}
          <aside className="md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-4">
              <SectionNavigation section="znaczenie" items={znaczenieItems} />
            </div>
          </aside>

          {/* Blok treści */}
          <main className="flex-grow max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Konstytucja 3 Maja, choć obowiązywała zaledwie 14 miesięcy,
                wywarła ogromny wpływ na polską historię, kulturę i tożsamość
                narodową. Jej znaczenie wykracza daleko poza ramy polityczne i
                prawne, stając się symbolem polskich dążeń do wolności,
                nowoczesności i reform. Dziś, ponad 230 lat po jej uchwaleniu,
                pozostaje jednym z najważniejszych dokumentów w dziejach Polski.
              </p>
              <p>
                Zapraszamy do zapoznania się z różnymi aspektami wpływu i
                znaczenia Konstytucji 3 Maja. Poniżej znajdziesz odnośniki do
                stron poświęconych jej dziedzictwu, kontekstowi europejskiemu,
                wpływowi na tożsamość narodową oraz przyczynom jej porażki.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                    className="w-full h-48 object-cover object-center"
                    position="top"
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

            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg overflow-hidden shadow-xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Symboliczne znaczenie
                  </h3>
                  <p className="mb-4">
                    Konstytucja 3 Maja stała się symbolem polskich dążeń do
                    wolności i nowoczesności. Przez lata niewoli narodowej jej
                    rocznica była obchodzona jako manifestacja patriotyzmu i
                    niezłomności ducha narodowego.
                  </p>
                  <p>
                    Dzień 3 maja jest obecnie jednym z najważniejszych polskich
                    świąt narodowych, przypominającym o wartościach
                    demokratycznych i konieczności stałego reformowania państwa.
                  </p>
                </div>
                <div className="bg-red-100 p-8">
                  <blockquote className="text-xl italic text-gray-800 border-l-4 border-red-700 pl-4 py-2 mb-4">
                    "Ostatnia wola i testament gasnącej Ojczyzny"
                  </blockquote>
                  <p className="text-gray-700">
                    Tak określili Konstytucję 3 Maja jej twórcy, świadomi
                    zagrożeń, które czyhały na nową ustawę zasadniczą. Mimo
                    krótkiego okresu obowiązywania, stała się ona fundamentem
                    polskiej tradycji konstytucyjnej i republikańskiej.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4">
                Uniwersalne wartości Konstytucji 3 Maja
              </h3>
              <p>
                Konstytucja 3 Maja wprowadziła do polskiej myśli politycznej
                wiele uniwersalnych wartości, które pozostają aktualne do dziś:
              </p>
              <ul>
                <li>
                  <strong>Praworządność</strong> - rządy prawa zamiast
                  arbitralnych decyzji jednostek
                </li>
                <li>
                  <strong>Równowaga władz</strong> - system hamulców i równowagi
                  między władzą ustawodawczą, wykonawczą i sądowniczą
                </li>
                <li>
                  <strong>Odpowiedzialność rządzących</strong> - ministrowie
                  odpowiedzialni przed parlamentem
                </li>
                <li>
                  <strong>Prawa obywatelskie</strong> - rozszerzenie praw dla
                  różnych grup społecznych
                </li>
                <li>
                  <strong>Reformizm</strong> - rozwiązywanie problemów poprzez
                  stopniowe i pokojowe reformy
                </li>
              </ul>
              <p>
                Te wartości, choć nie mogły być w pełni zrealizowane w XVIII
                wieku, stanowiły fundament dla przyszłych polskich konstytucji i
                systemów prawnych, wpływając na kształt polskiej państwowości po
                odzyskaniu niepodległości.
              </p>
            </div>
            <SubpageNavigation
              nextLink={{
                to: "/znaczenie/dziedzictwo",
                label: "Dziedzictwo Konstytucji",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Impact;
