// Legacy.js - strona o dziedzictwie Konstytucji
import React from "react";
import { motion } from "framer-motion";
import imageData from "../../data/imageData";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import SectionNavigation from "../../components/SectionNavigation";
import { znaczenieItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const Legacy = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dziedzictwo Konstytucji 3 Maja
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
            <div className="mb-12">
              <div className="relative overflow-hidden rounded-xl mb-8">
                <ImageWithAttribution
                  src={imageData.chronology.uchwalenie.src}
                  alt={imageData.chronology.uchwalenie.alt}
                  attribution={imageData.chronology.uchwalenie.attribution}
                  className="rounded-lg shadow-lg w-full h-auto mb-4"
                  position="top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end pointer-events-none">
                  <p className="text-white p-4 text-center w-full text-sm">
                    Obchody rocznicy uchwalenia Konstytucji 3 Maja - współczesne
                    dziedzictwo dokumentu
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  Mimo krótkiego okresu obowiązywania, Konstytucja 3 Maja
                  pozostawiła trwałe dziedzictwo, które wpłynęło na
                  kształtowanie się nowoczesnego państwa polskiego i polskiej
                  tożsamości narodowej. Co zawdzięczamy obecnie temu
                  historycznemu dokumentowi?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Tradycja konstytucyjna</h3>
                </div>
                <p>
                  Konstytucja 3 Maja zapoczątkowała polską tradycję
                  konstytucyjną. Jako pierwsza polska konstytucja, stworzyła
                  podstawy dla przyszłych ustaw zasadniczych - od Konstytucji
                  Księstwa Warszawskiego, przez Konstytucję marcową (1921), aż
                  po współczesną Konstytucję RP z 1997 roku, która nawiązuje do
                  jej dziedzictwa w preambule.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <h3 className="text-xl font-bold">Wartości demokratyczne</h3>
                </div>
                <p>
                  Konstytucja wprowadziła do polskiej myśli politycznej
                  nowoczesne zasady demokratyczne: trójpodział władzy,
                  zwierzchnictwo narodu, odpowiedzialność rządzących. Te
                  wartości, choć nie mogły być w pełni zrealizowane w XVIII
                  wieku, stanowią dziś fundament polskiej demokracji i są
                  powszechnie uznawane za niezbywalne elementy ustrojowe.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Równość obywatelska</h3>
                </div>
                <p>
                  Choć Konstytucja 3 Maja nie wprowadziła pełnej równości
                  wszystkich obywateli, stanowiła ważny krok w tym kierunku
                  poprzez rozszerzenie praw mieszczan i zapowiedź ochrony
                  chłopów. Te idee równości wobec prawa i stopniowego włączania
                  wszystkich grup społecznych do narodu politycznego zostały
                  rozwinięte w późniejszych polskich aktach prawnych.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Święto narodowe</h3>
                </div>
                <p>
                  Dzień 3 maja jest obecnie jednym z najważniejszych polskich
                  świąt państwowych. Zostało ono ustanowione już w 1791 roku,
                  zakazane w czasie zaborów i w PRL, a przywrócone po odzyskaniu
                  niepodległości i ponownie po 1989 roku. Dziś obchody Święta
                  Konstytucji 3 Maja są okazją do refleksji nad polską tradycją
                  demokratyczną i przypominają o wartościach, które legły u
                  podstaw państwa polskiego.
                </p>
              </motion.div>
            </div>

            <div className="mb-12">
              <motion.h3
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Konstytucja 3 Maja we współczesnej Polsce
              </motion.h3>

              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">W edukacji</h4>
                    <p>
                      Historia Konstytucji 3 Maja jest obowiązkowym elementem
                      podstawy programowej nauczania historii w polskich
                      szkołach. Uczniowie poznają jej znaczenie jako symbolu
                      polskiej tradycji demokratycznej i reformatorskiej.
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">W kulturze</h4>
                    <p>
                      Konstytucja 3 Maja jest tematem licznych dzieł sztuki,
                      utworów literackich, filmów i przedstawień teatralnych.
                      Stanowi ważny element polskiej pamięci zbiorowej i
                      tożsamości kulturowej.
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">
                      W życiu publicznym
                    </h4>
                    <p>
                      Politycy i działacze społeczni często odwołują się do
                      dziedzictwa Konstytucji 3 Maja jako symbolu nowoczesnego
                      patriotyzmu, reform i jedności narodowej ponad podziałami.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Nawiązania w Konstytucji RP z 1997 roku
                    </h3>
                    <div className="prose prose-lg">
                      <p>
                        Współczesna Konstytucja Rzeczypospolitej Polskiej
                        nawiązuje do dziedzictwa Konstytucji 3 Maja już w
                        preambule, gdzie czytamy:
                      </p>
                      <blockquote className="italic border-l-4 border-red-700 pl-4 py-1">
                        "nawiązując do najlepszych tradycji Pierwszej i Drugiej
                        Rzeczypospolitej"
                      </blockquote>
                      <p>
                        To bezpośrednie odwołanie do tradycji konstytucyjnej
                        zapoczątkowanej przez Konstytucję 3 Maja. Ponadto
                        współczesna konstytucja rozwija wiele idei obecnych już
                        w dokumencie z 1791 roku, takich jak trójpodział władzy,
                        zwierzchność narodu czy ochrona praw obywatelskich.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Dziedzictwo poza granicami Polski
                    </h3>
                    <div className="prose prose-lg">
                      <p>
                        Dziedzictwo Konstytucji 3 Maja jest pielęgnowane również
                        przez Polonię na całym świecie. Duże obchody
                        organizowane są m.in. w Chicago, które posiada jedną z
                        największych społeczności polskich poza granicami kraju.
                      </p>
                      <p>
                        Konstytucja 3 Maja jest również przedmiotem
                        zainteresowania historyków i prawników z innych krajów,
                        którzy badają ją jako jeden z pierwszych dokumentów
                        konstytucyjnych w dziejach Europy i świata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                Dziedzictwo Konstytucji 3 Maja dla przyszłych pokoleń
              </h3>
              <div className="prose prose-lg">
                <p>
                  Konstytucja 3 Maja pozostaje dla kolejnych pokoleń Polaków nie
                  tylko historycznym dokumentem, ale przede wszystkim symbolem:
                </p>
                <ul>
                  <li>
                    Zdolności do podejmowania odważnych reform nawet w obliczu
                    kryzysu
                  </li>
                  <li>
                    Dążenia do nowoczesności i postępu przy poszanowaniu
                    tradycji
                  </li>
                  <li>
                    Umiejętności kompromisu i współpracy ponad podziałami dla
                    dobra państwa
                  </li>
                  <li>Wiary w praworządność i demokratyczne wartości</li>
                  <li>
                    Postawy patriotycznej wyrażającej się w trosce o dobro
                    wspólne
                  </li>
                </ul>
                <p>
                  Te wartości stanowią inspirację dla współczesnych Polaków i
                  przypominają, że nawet w najtrudniejszych momentach historii
                  możliwe jest podjęcie działań, które pozostawią trwały ślad w
                  dziejach narodu.
                </p>
              </div>
            </motion.div>
            <SubpageNavigation
              prevLink={{
                to: "/znaczenie",
                label: "Znaczenie i wpływ Konstytucji",
              }}
              nextLink={{
                to: "/znaczenie/kontekst-europejski",
                label: "Kontekst europejski",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
