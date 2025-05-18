// ExecutiveActs.js - strona o aktach wykonawczych
import React from "react";
import { motion } from "framer-motion";
import IconList from "../../components/IconList";
import InfoCard from "../../components/InfoCard";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { postanowieniaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const ExecutiveActs = () => {
  // Daty i opisy aktów wykonawczych
  const executiveActs = [
    {
      date: "13 maja 1791",
      title: "Ustawy o organizacji sejmów i sądów sejmowych",
      description:
        "Szczegółowo regulowały organizację i funkcjonowanie parlamentu oraz sądów sejmowych, które miały sądzić najcięższe przestępstwa przeciwko państwu.",
      key_points: [
        "Określenie szczegółowych procedur sejmowych",
        "Ustanowienie regularnych kadencji Sejmu co dwa lata",
        "Zdefiniowanie kompetencji marszałka Sejmu",
        "Reguły dotyczące głosowania i podejmowania uchwał",
        "Organizacja i kompetencje Sądu Sejmowego",
      ],
    },
    {
      date: "1 czerwca 1791",
      title: "Ustawa o Straży Praw",
      description:
        "Regulowała organizację i działanie organu władzy wykonawczej, który można uznać za pierwszy polski nowoczesny rząd.",
      key_points: [
        "Skład Straży Praw: król, prymas, pięciu ministrów (policji, pieczęci, wojny, skarbu i spraw zagranicznych)",
        "Zasady powoływania i odwoływania ministrów",
        "Odpowiedzialność ministrów przed Sejmem",
        "Szczegółowe kompetencje poszczególnych ministrów",
        "Procedura podejmowania decyzji w Straży Praw",
      ],
    },
    {
      date: "17 czerwca 1791",
      title: "Ustawa o Komisji Policji",
      description:
        "Utworzyła pierwszy polski organ administracji centralnej o charakterze ministerialnym, odpowiedzialny za bezpieczeństwo wewnętrzne.",
      key_points: [
        "Kompetencje w zakresie bezpieczeństwa i porządku publicznego",
        "Nadzór nad miastami i ich samorządami",
        "Odpowiedzialność za infrastrukturę, stan dróg i mostów",
        "Kontrola miar i wag, zwalczanie oszustw handlowych",
        "Nadzór nad zdrowiem publicznym i szpitalami",
      ],
    },
    {
      date: "24 czerwca 1791",
      title: "Ustawa o administracji cywilnej",
      description:
        "Reformowała administrację terenową, wprowadzając nowe urzędy i instytucje na poziomie lokalnym.",
      key_points: [
        "Utworzenie komisji porządkowych cywilno-wojskowych w powiatach",
        "Organizacja administracji lokalnej i jej kompetencje",
        "Relacje między administracją centralną a lokalną",
        "Sposób powoływania urzędników administracji lokalnej",
        "Procedury administracyjne i sądowe",
      ],
    },
  ];

  // Planowane, ale niezrealizowane reformy
  const unimplementedReforms = [
    '"Ekonomiczna konstytucja" planowana przez Hugo Kołłątaja, mająca uregulować sprawy gospodarcze i finansowe państwa',
    '"Konstytucja moralna" dotycząca edukacji, kultury i obyczajów publicznych',
    "Rozszerzenie reform dotyczących statusu chłopów, w tym stopniowe znoszenie poddaństwa",
    "Kompleksowa reforma skarbu i systemu podatkowego",
    "Pełna kodyfikacja prawa cywilnego i karnego",
    "Reforma administracji kościelnej i relacji państwo-kościół",
  ];

  // Rola innych ustaw w systemie prawnym
  const otherActsRole = [
    "Uzupełniały ogólne ramy ustrojowe nakreślone w Konstytucji",
    "Wprowadzały konkretne mechanizmy i procedury niezbędne do funkcjonowania nowych instytucji",
    "Regulowały szczegółowe kompetencje poszczególnych organów władzy",
    "Określały relacje między różnymi instytucjami i poziomami administracji",
    "Tworzyły spójny system prawno-administracyjny, zastępując wcześniejsze, często chaotyczne przepisy",
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
          Akty wykonawcze do Konstytucji 3 Maja
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
                Konstytucja 3 Maja była aktem o charakterze ogólnym, który
                wytyczał główne kierunki reform ustrojowych. Dla wprowadzenia
                jej w życie konieczne było uchwalenie szeregu ustaw
                szczegółowych, które regulowały funkcjonowanie nowych instytucji
                i mechanizmów prawnych.
              </p>
              <p>
                Akty wykonawcze były integralną częścią reform ustrojowych, a
                bez nich same postanowienia Konstytucji pozostałyby w dużej
                mierze deklaratywne. Niestety, proces tworzenia całościowego
                systemu prawnego został przerwany przez upadek Konstytucji w
                wyniku konfederacji targowickiej i interwencji rosyjskiej.
              </p>
            </div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-red-700 text-white">
                <h3 className="text-2xl font-bold">
                  Najważniejsze akty wykonawcze
                </h3>
                <p className="opacity-80 mt-2">
                  Ustawy przyjęte po uchwaleniu Konstytucji 3 Maja w okresie
                  maj-czerwiec 1791 roku
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {executiveActs.map((act, index) => (
                  <motion.div
                    key={index}
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center mb-4">
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-2 md:mb-0 inline-block">
                        {act.date}
                      </div>
                      <h4 className="text-xl font-bold md:ml-4">{act.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{act.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">
                        Główne postanowienia:
                      </h5>
                      <ul className="space-y-1">
                        {act.key_points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
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
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <InfoCard
                title="Wcześniejsze ustawy włączone do Konstytucji"
                content={
                  <>
                    <p>
                      Dwie ważne ustawy uchwalone przed 3 maja 1791 roku zostały
                      włączone do Konstytucji i stanowiły jej integralną część:
                    </p>
                    <ul>
                      <li>
                        <strong>Prawo o sejmikach</strong> (24 marca 1791) -
                        reformowało sejmiki ziemskie, pozbawiając praw
                        politycznych szlachtę nieposiadającą ziemi (gołotę) i
                        wprowadzając nowe zasady ich funkcjonowania.
                      </li>
                      <li>
                        <strong>Prawo o miastach królewskich</strong> (18
                        kwietnia 1791) - tzw. "Ustawa o miastach", rozszerzała
                        prawa mieszczan, dając im m.in. nietykalność osobistą,
                        prawo nabywania ziemi i dostęp do urzędów.
                      </li>
                    </ul>
                    <p>
                      Ustawy te stanowiły ważne przygotowanie do właściwej
                      reformy ustrojowej i były częścią szerokiego planu odnowy
                      państwa polskiego.
                    </p>
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
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                }
              />

              <InfoCard
                title="Planowane, ale niezrealizowane reformy"
                content={
                  <>
                    <p>
                      Twórcy Konstytucji, szczególnie Hugo Kołłątaj, planowali
                      dalsze reformy, które miały uzupełnić system prawny i
                      ustrojowy. Niestety, upadek Konstytucji uniemożliwił ich
                      realizację:
                    </p>
                    <IconList items={unimplementedReforms} color="yellow" />
                    <p className="text-sm italic mt-2">
                      Te niezrealizowane projekty pokazują, że Konstytucja 3
                      Maja miała być jedynie początkiem głębokich reform, a nie
                      ich zwieńczeniem.
                    </p>
                  </>
                }
                color="yellow"
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            </div>

            <motion.div
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                Rola aktów wykonawczych w systemie prawnym
              </h3>

              <div className="prose prose-lg">
                <p>
                  Akty wykonawcze pełniły kluczową rolę w systemie prawnym
                  kształtowanym przez Konstytucję 3 Maja. Bez nich sama
                  Konstytucja, zawierająca głównie ogólne zasady ustrojowe, nie
                  mogłaby funkcjonować w praktyce.
                </p>

                <IconList items={otherActsRole} />

                <p>
                  Warto zauważyć, że proces tworzenia aktów wykonawczych był
                  bardzo intensywny - w ciągu zaledwie dwóch miesięcy po
                  uchwaleniu Konstytucji przyjęto szereg ważnych ustaw, które
                  tworzyły nowe instytucje i procedury. Świadczy to o
                  determinacji reformatorów i ich świadomości, że samo
                  uchwalenie Konstytucji to dopiero początek zmian.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <ImageWithAttribution
                  src={imageData.documents.konstytucjaStrona75.src}
                  alt={imageData.documents.konstytucjaStrona75.alt}
                  attribution={
                    imageData.documents.konstytucjaStrona75.attribution
                  }
                  className="w-full h-96 object-cover object-top"
                  position="top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Oryginalny rękopis Konstytucji 3 Maja
                  </h3>
                  <p>
                    Oficjalny tekst uchwalony przez Sejm Czteroletni w 1791 roku
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  System prawny Konstytucji 3 Maja - dzieło niedokończone
                </h3>
                <div className="prose prose-lg">
                  <p>
                    Twórcy Konstytucji 3 Maja zdawali sobie sprawę, że reforma
                    ustrojowa wymaga stworzenia całego systemu powiązanych ze
                    sobą aktów prawnych. Ustawy przyjęte w okresie maj-czerwiec
                    1791 roku miały stworzyć podstawy tego systemu, ale
                    planowano dalsze reformy i kodyfikacje.
                  </p>
                  <p>
                    Niestety, konfederacja targowicka i interwencja rosyjska
                    przerwały ten proces. 23 listopada 1793 roku Sejm
                    grodzieński, działając pod presją Rosji, uznał Sejm
                    Czteroletni za niebyły i uchylił wszystkie jego akty prawne,
                    w tym Konstytucję 3 Maja i związane z nią ustawy wykonawcze.
                  </p>
                  <p>
                    Mimo krótkiego okresu obowiązywania, system prawny
                    zapoczątkowany przez Konstytucję 3 Maja stanowił ważny krok
                    w kierunku budowy nowoczesnego państwa. Wprowadzone wówczas
                    koncepcje, jak trójpodział władzy, rządy prawa czy
                    odpowiedzialność ministrów przed parlamentem, weszły na
                    stałe do polskiej tradycji ustrojowej i stanowiły inspirację
                    dla późniejszych reform.
                  </p>
                  <blockquote className="italic border-l-4 border-red-700 pl-4 py-2">
                    "Konstytucja 3 Maja wraz z ustawami towarzyszącymi tworzyła
                    pierwszy w historii Polski nowoczesny system prawny,
                    zapowiadający wiele rozwiązań, które dziś uznajemy za
                    oczywiste elementy demokratycznego państwa prawa."
                  </blockquote>
                </div>
              </div>
            </motion.div>
            <SubpageNavigation
              prevLink={{
                to: "/postanowienia/zmiany-prawne",
                label: "Zmiany prawne",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveActs;
