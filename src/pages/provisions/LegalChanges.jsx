// LegalChanges.js - strona o zmianach prawnych
import React from "react";
import { motion } from "framer-motion";
import ComparisonTable from "../../components/ComparisonTable";
import InfoCard from "../../components/InfoCard";
import SubpageNavigation from "../../components/SubpageNavigation";
import SectionNavigation from "../../components/SectionNavigation";
import { postanowieniaItems } from "./menu";

const LegalChanges = () => {
  const compareHeaders = [
    "Aspekt",
    "Przed Konstytucją 3 Maja",
    "Po Konstytucji 3 Maja",
  ];

  const compareRows = [
    [
      "Ustrój państwa",
      "Monarchia elekcyjna - król wybierany przez szlachtę podczas wolnej elekcji",
      "Monarchia dziedziczna - tron dziedziczony w ramach dynastii, po Stanisławie Auguście miał przejść na dynastię Wettynów",
    ],
    [
      "Podejmowanie decyzji w Sejmie",
      "Liberum veto - możliwość zerwania obrad i unieważnienia decyzji przez pojedynczego posła",
      "Decyzje podejmowane większością głosów, zniesienie liberum veto, podział ustaw na zwykłe (większość zwykła) i konstytucyjne (większość kwalifikowana)",
    ],
    [
      "Struktura władzy",
      "Brak wyraźnego podziału władzy, wzajemne blokowanie się organów państwowych",
      "Trójpodział władzy na ustawodawczą (Sejm), wykonawczą (król i Straż Praw) oraz sądowniczą (niezawisłe sądy)",
    ],
    [
      "Władza wykonawcza",
      "Król z ograniczonymi uprawnieniami wykonawczymi, Rada Nieustająca kontrolowana przez Rosję",
      "Król jako przewodniczący Straży Praw (rządu) składającego się z pięciu ministrów odpowiedzialnych przed Sejmem",
    ],
    [
      "Prawa polityczne szlachty",
      "Pełne prawa polityczne dla całej szlachty, w tym nieposiadającej ziemi (gołoty)",
      "Ograniczenie praw politycznych dla szlachty nieposiadającej ziemi, pełnię praw zachowała tylko szlachta posiadająca majątki ziemskie",
    ],
    [
      "Status miast i mieszczan",
      "Ograniczone prawa, brak dostępu do wyższych urzędów i możliwości nabywania ziemi",
      "Znaczące rozszerzenie praw, w tym nietykalność osobista, prawo nabywania ziemi, dostęp do urzędów, przedstawicielstwo w Sejmie",
    ],
    [
      "Sejm",
      "Jednolity organ, podatny na paraliż decyzyjny przez liberum veto i konfederacje",
      "Dwuizbowy (Izba Poselska i Senat) z regularną kadencją, jasno określonymi kompetencjami i procedurami",
    ],
    [
      "Religia",
      "Katolicyzm jako religia dominująca, dysydenci z ograniczonymi prawami",
      "Katolicyzm jako religia panująca, ale z gwarancją wolności wyznania dla innych religii",
    ],
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
          Główne zmiany prawne wprowadzone przez Konstytucję 3 Maja
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
            <div className="prose prose-lg max-w-none mb-10">
              <p>
                Konstytucja 3 Maja wprowadziła fundamentalne zmiany w systemie
                prawnym i ustroju Rzeczypospolitej, dążąc do modernizacji
                państwa i zwiększenia jego efektywności. Poniżej przedstawiamy
                najważniejsze reformy i porównanie systemu politycznego przed i
                po uchwaleniu Konstytucji.
              </p>
            </div>

            <ComparisonTable headers={compareHeaders} rows={compareRows} />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard
                title="Reforma sejmu i sejmików"
                content={
                  <>
                    <p>
                      Konstytucja 3 Maja wprowadziła istotne zmiany w
                      funkcjonowaniu parlamentu i samorządu lokalnego, mające na
                      celu usprawnienie procesu legislacyjnego i ograniczenie
                      nadużyć:
                    </p>
                    <ul>
                      <li>
                        Sejm stał się dwuizbowy, składający się z Izby
                        Poselskiej (204 posłów) i Senatu (132 senatorów)
                      </li>
                      <li>
                        Wprowadzono regularne kadencje Sejmu - co dwa lata, z
                        możliwością zwołania Sejmu nadzwyczajnego
                      </li>
                      <li>
                        Zniesiono liberum veto i konfederacje, wprowadzając
                        głosowanie większościowe
                      </li>
                      <li>
                        Sejmiki prowincjonalne miały być zwoływane co dwa lata w
                        celu wyboru posłów
                      </li>
                      <li>
                        Posłowie nie byli już związani instrukcjami sejmików, co
                        zwiększało ich samodzielność
                      </li>
                      <li>
                        Ustanowiono zasadę, że sprawy podatkowe, skarbowe i
                        wojskowe rozstrzygane są zwykłą większością głosów
                      </li>
                    </ul>
                  </>
                }
                color="blue"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                }
              />

              <InfoCard
                title="Reforma sądownictwa"
                content={
                  <>
                    <p>
                      Jednym z kluczowych elementów Konstytucji 3 Maja było
                      ustanowienie niezależnej władzy sądowniczej, co stanowiło
                      realizację zasady trójpodziału władzy:
                    </p>
                    <ul>
                      <li>
                        Utworzenie niezawisłych sądów działających "w imieniu
                        króla"
                      </li>
                      <li>
                        Utrzymanie odrębnych sądów dla różnych stanów
                        (szlacheckie, miejskie, wiejskie)
                      </li>
                      <li>
                        Ustanowienie Sądu Sejmowego dla spraw o najcięższe
                        przestępstwa przeciwko państwu
                      </li>
                      <li>
                        Sędziowie ziemscy wybierani na sejmikach i pełniący
                        funkcję dożywotnio
                      </li>
                      <li>
                        Utworzenie sądów referendarskich dla rozstrzygania
                        sporów między chłopami a właścicielami ziemskimi
                      </li>
                      <li>
                        Wprowadzenie zasady instancyjności - możliwość odwołania
                        się od wyroku sądu niższej instancji
                      </li>
                    </ul>
                  </>
                }
                color="green"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                }
              />
            </div>

            <motion.div
              className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Zniesienie liberum veto - kluczowa reforma
                  </h3>
                  <div className="prose prose-lg">
                    <p>
                      Jedną z najważniejszych zmian wprowadzonych przez
                      Konstytucję 3 Maja było zniesienie liberum veto - zasady,
                      która przez ponad sto lat paraliżowała polski
                      parlamentaryzm.
                    </p>
                    <p>
                      Liberum veto dawało każdemu posłowi prawo do zerwania
                      obrad Sejmu i unieważnienia wszystkich podjętych na nim
                      decyzji poprzez wyrażenie sprzeciwu. Ta zasada, początkowo
                      mająca chronić mniejszość przed tyranią większości, stała
                      się narzędziem w rękach magnaterii i obcych mocarstw do
                      blokowania reform.
                    </p>
                    <p>
                      W latach 1652-1791 z powodu liberum veto zerwano około 53
                      z 55 sejmów, co skutkowało niemal całkowitym paraliżem
                      władzy ustawodawczej. Zniesienie tej zasady było kluczowe
                      dla przywrócenia sprawności decyzyjnej państwa.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 p-6 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold mb-3">
                    Skutki zniesienia liberum veto:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Usprawnienie procesu legislacyjnego - decyzje
                        podejmowane większością głosów
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Ograniczenie wpływów magnaterii i obcych mocarstw na
                        polski parlamentaryzm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Możliwość przeprowadzenia koniecznych reform ustrojowych
                        i społecznych
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Silny sprzeciw opozycji i jedno z głównych źródeł
                        konfliktu wokół Konstytucji
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6">
                <blockquote className="italic border-l-4 border-red-700 pl-4 py-2">
                  "Liberum veto od 1652 r. rozlało się po systemie reprezentacji
                  i stało się instrumentem paraliżu państwa, jedną z przyczyn
                  upadku Polski, a stało się tak za sprawą anarchicznych
                  obyczajów, braku edukacji, złotej wolności szlacheckiej i
                  interwencji mocarstw ościennych."
                </blockquote>
                <p className="text-right mt-2 text-sm">
                  — z opracowań historycznych
                </p>
              </div>
            </motion.div>

            <InfoCard
              title="Zmiany ustrojowe w kontekście europejskim"
              content={
                <>
                  <p>
                    Konstytucja 3 Maja była nowatorskim dokumentem nie tylko w
                    skali Polski, ale i całej Europy. Warto rozważyć jej
                    postanowienia w szerszym kontekście europejskim:
                  </p>
                  <ul>
                    <li>
                      <strong>Pierwsza konstytucja w Europie</strong> -
                      wyprzedziła francuską konstytucję z 1791 roku i była drugą
                      na świecie po konstytucji amerykańskiej z 1787 roku
                    </li>
                    <li>
                      <strong>Nowoczesne zasady ustrojowe</strong> - wprowadzała
                      idee oświeceniowe, takie jak trójpodział władzy i
                      suwerenność narodu, w czasie gdy większość krajów
                      europejskich była absolutystycznymi monarchiami
                    </li>
                    <li>
                      <strong>Kompromisowy charakter</strong> - w
                      przeciwieństwie do rewolucji francuskiej, zmiany miały być
                      wprowadzane stopniowo, na drodze ewolucji, a nie rewolucji
                    </li>
                    <li>
                      <strong>Reakcja europejskich mocarstw</strong> -
                      absolutystyczne monarchie (Rosja, Prusy, Austria)
                      postrzegały Konstytucję jako zagrożenie dla istniejącego
                      porządku, obawiając się rozprzestrzenienia idei odnowy i
                      reform
                    </li>
                  </ul>
                  <p>
                    Konstytucja 3 Maja łączyła tradycyjne elementy ustroju
                    Rzeczypospolitej z nowoczesnymi koncepcjami ustrojowymi,
                    tworząc unikalny model państwa, który mógł stać się wzorem
                    dla innych krajów europejskich, gdyby został w pełni
                    zrealizowany.
                  </p>
                </>
              }
              color="purple"
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <SubpageNavigation
              prevLink={{
                to: "/postanowienia/prawa-obywateli",
                label: "Prawa obywateli",
              }}
              nextLink={{
                to: "/postanowienia/akty-wykonawcze",
                label: "Akty wykonawcze",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default LegalChanges;
