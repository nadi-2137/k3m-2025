// Provisions.js - strona główna postanowień
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IconList from "../components/IconList";
import ImageWithAttribution from "../components/ImageWithAttribution";
import imageData from "../data/imageData";
import SectionNavigation from "../components/SectionNavigation";
import { postanowieniaItems } from "./provisions/menu";
import SubpageNavigation from "../components/SubpageNavigation";

const Provisions = () => {
  const sections = [
    {
      title: "Ustrój państwa",
      description:
        "Poznaj nowy system polityczny wprowadzony przez Konstytucję - trójpodział władzy, monarchia dziedziczna i zniesienie liberum veto.",
      image: imageData.chronology.uchwalenie,
      path: "/postanowienia/ustroj",
    },
    {
      title: "Prawa obywateli",
      description:
        "Dowiedz się, jak Konstytucja zmieniła prawa mieszczan, szlachty i chłopów, dążąc do bardziej sprawiedliwego społeczeństwa.",
      image: imageData.citizenRights.harvestersRest,
      path: "/postanowienia/prawa-obywateli",
    },
    {
      title: "Zmiany prawne",
      description:
        "Poznaj najważniejsze reformy prawne wprowadzone przez Konstytucję 3 Maja i ich wpływ na funkcjonowanie państwa.",
      image: imageData.chronology.sejmCzteroletni,
      path: "/postanowienia/zmiany-prawne",
    },
    {
      title: "Akty wykonawcze",
      description:
        "Zapoznaj się z dodatkowymi ustawami i przepisami, które uzupełniały i wprowadzały w życie postanowienia Konstytucji.",
      image: imageData.documents.konstytucjaStrona75,
      path: "/postanowienia/akty-wykonawcze",
    },
  ];

  const keyPoints = [
    "Trójpodział władzy na ustawodawczą, wykonawczą i sądowniczą",
    "Zniesienie liberum veto i wprowadzenie głosowania większością",
    "Ustanowienie monarchii dziedzicznej zamiast wolnej elekcji",
    "Rozszerzenie praw mieszczan i częściowa ochrona chłopów",
    "Utworzenie Straży Praw jako organu władzy wykonawczej",
    "Potwierdzenie katolicyzmu jako religii panującej przy zachowaniu tolerancji",
    "Ograniczenie przywilejów magnaterii i szlachty nieposiadającej ziemi",
    "Reforma administracji i sądownictwa",
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
          Główne postanowienia Konstytucji 3 Maja
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blok nawigacyjny */}
          <aside className="md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-4">
              <SectionNavigation
                section="postanowienia"
                items={postanowieniaItems}
              />
            </div>
          </aside>

          {/* Blok treści */}
          <main className="flex-grow max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Konstytucja 3 Maja wprowadziła szereg przełomowych reform, które
                miały zmodernizować państwo polskie i uratować je przed
                całkowitym upadkiem. Ten rewolucyjny dokument zmieniał
                fundamentalnie ustrój Rzeczypospolitej, wprowadzając nowoczesne
                rozwiązania oparte na ideach oświecenia i dostosowane do
                polskich realiów.
              </p>
              <p>
                Zapraszamy do zapoznania się ze szczegółami dotyczącymi
                najważniejszych postanowień Konstytucji 3 Maja. Poniżej
                znajdziesz odnośniki do stron poświęconych różnym aspektom
                reform wprowadzonych przez ten przełomowy akt prawny.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Najważniejsze reformy w skrócie
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <IconList items={keyPoints.slice(0, 4)} />
                </div>
                <div>
                  <IconList items={keyPoints.slice(4)} />
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-4">
                Różnice wobec wcześniejszego ustroju
              </h3>
              <p className="mb-4">
                Konstytucja 3 Maja wprowadziła fundamentalne zmiany w porównaniu
                z dotychczasowym systemem politycznym Rzeczypospolitej.
                Porzucono anarchiczną "złotą wolność szlachecką" na rzecz
                nowoczesnego, efektywnego państwa opartego na trójpodziale
                władzy i równowadze między monarchią a parlamentem.
              </p>
              <Link
                to="/postanowienia/zmiany-prawne"
                className="text-red-700 hover:text-red-800 font-semibold flex items-center"
              >
                Zobacz szczegółowe porównanie
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
            <SubpageNavigation
              nextLink={{
                to: "/postanowienia/ustroj",
                label: "Struktura władzy",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Provisions;
