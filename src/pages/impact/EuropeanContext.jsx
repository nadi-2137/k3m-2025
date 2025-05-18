// EuropeanContext.js - strona o kontekście europejskim
import React from "react";
import { motion } from "framer-motion";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { znaczenieItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const EuropeanContext = () => {
  // Dane do porównania z innymi konstytucjami
  const constitutionComparison = [
    {
      name: "Konstytucja Stanów Zjednoczonych (1787)",
      features: [
        "Pierwsza nowoczesna konstytucja na świecie",
        "Wprowadziła trójpodział władzy",
        "Ustanowiła republikę federalną",
        "Obowiązuje do dziś z poprawkami",
      ],
      similarity:
        "Inspiracja dla polskich reformatorów, szczególnie w zakresie trójpodziału władzy.",
    },
    {
      name: "Konstytucja 3 Maja (1791)",
      features: [
        "Pierwsza konstytucja w Europie",
        "Wprowadziła trójpodział władzy",
        "Ustanowiła monarchię konstytucyjną",
        "Obowiązywała tylko 14 miesięcy",
      ],
      similarity: "-",
    },
    {
      name: "Konstytucja Francji (1791)",
      features: [
        "Uchwalona kilka miesięcy po polskiej",
        "Ustanowiła monarchię konstytucyjną",
        "Wprowadziła podział władzy",
        "Szybko zastąpiona przez kolejne konstytucje rewolucyjne",
      ],
      similarity:
        "Podobne założenia dotyczące monarchii konstytucyjnej, choć powstała niezależnie.",
    },
  ];

  // Dane do sekcji "Recepcja w Europie"
  const europeanReactions = [
    {
      country: "Francja",
      reaction:
        "Pozytywna reakcja rewolucjonistów francuskich, którzy widzieli w Konstytucji 3 Maja krok w kierunku podobnych reform, jakie sami wprowadzali.",
      icon: "🇫🇷",
    },
    {
      country: "Wielka Brytania",
      reaction:
        "Przychylne przyjęcie przez liberalnych polityków i prasę brytyjską, którzy widzieli w reformach szansę na wzmocnienie Polski jako przeciwwagi dla Rosji.",
      icon: "🇬🇧",
    },
    {
      country: "Prusy",
      reaction:
        "Początkowo pozytywne, później wrogie nastawienie - król pruski Fryderyk Wilhelm II obawiał się wzmocnienia Polski, co mogło zagrozić pruskim interesom terytorialnym.",
      icon: "🇩🇪",
    },
    {
      country: "Rosja",
      reaction:
        "Zdecydowanie wroga reakcja - caryca Katarzyna II uznała Konstytucję za przejaw 'jakobińskiej zarazy' i zagrożenie dla interesów Rosji w Polsce.",
      icon: "🇷🇺",
    },
    {
      country: "Austria",
      reaction:
        "Neutralna do umiarkowanie pozytywnej - cesarz Leopold II doceniał potrzebę reform ustrojowych, ale nie poparł Polski w konflikcie z Rosją.",
      icon: "🇦🇹",
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
          Konstytucja 3 Maja w kontekście europejskim
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
                Konstytucja 3 Maja była nie tylko wydarzeniem o znaczeniu
                narodowym, ale także ważnym elementem europejskiej historii
                konstytucjonalizmu. Powstała w okresie, gdy Europą wstrząsały
                idee oświeceniowe i rewolucyjne, a jej wpływ i znaczenie
                wykraczały daleko poza granice Rzeczypospolitej.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ImageWithAttribution
                  src={imageData.europeancontext.declaration.src}
                  alt={imageData.europeancontext.declaration.alt}
                  attribution={
                    imageData.europeancontext.declaration.attribution
                  }
                  className="w-full h-48 object-cover"
                  position="top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Idee oświeceniowe</h3>
                  <p>
                    Konstytucja 3 Maja była głęboko zakorzeniona w ideach
                    oświeceniowych, które rozprzestrzeniały się po całej Europie
                    w XVIII wieku. Czerpała z koncepcji Monteskiusza
                    (trójpodział władzy), Rousseau (umowa społeczna) i
                    fizjokratów (reformy gospodarcze).
                  </p>
                  <p className="mt-2">
                    Twórcy Konstytucji, w szczególności król Stanisław August
                    Poniatowski i Hugo Kołłątaj, byli dobrze zaznajomieni z
                    najnowszymi prądami intelektualnymi Europy i starali się
                    adaptować je do polskich warunków, tworząc nowoczesny, ale
                    jednocześnie uwzględniający polskie tradycje akt ustrojowy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ImageWithAttribution
                  src={imageData.europeancontext.bastille.src}
                  alt={imageData.europeancontext.bastille.alt}
                  attribution={imageData.europeancontext.bastille.attribution}
                  className="w-full h-48 object-cover"
                  position="top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Między rewolucją a ewolucją
                  </h3>
                  <p>
                    Konstytucja 3 Maja powstała w okresie między Rewolucją
                    Amerykańską (1775-1783) a Rewolucją Francuską (1789-1799). W
                    przeciwieństwie do gwałtownych przemian we Francji, polskie
                    reformy miały charakter ewolucyjny i były wprowadzane drogą
                    parlamentarną, bez rozlewu krwi.
                  </p>
                  <p className="mt-2">
                    Polscy reformatorzy starali się połączyć nowoczesne idee z
                    poszanowaniem tradycji, tworząc konstytucyjną monarchię
                    zamiast republiki. Ta droga pośrednia między radykalizmem
                    rewolucji a konserwatyzmem absolutyzmu była unikatowym
                    polskim wkładem w europejską myśl polityczną.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                Porównanie pierwszych konstytucji
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">
                        Konstytucja
                      </th>
                      <th className="py-3 px-4 border-b text-left">
                        Główne cechy
                      </th>
                      <th className="py-3 px-4 border-b text-left">
                        Podobieństwa z Konstytucją 3 Maja
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {constitutionComparison.map((constitution, index) => (
                      <tr
                        key={index}
                        className={index === 1 ? "bg-red-50" : ""}
                      >
                        <td className="py-3 px-4 border-b font-semibold">
                          {constitution.name}
                        </td>
                        <td className="py-3 px-4 border-b">
                          <ul className="list-disc pl-5 mb-0">
                            {constitution.features.map(
                              (feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                              )
                            )}
                          </ul>
                        </td>
                        <td className="py-3 px-4 border-b">
                          {constitution.similarity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Recepcja w Europie</h3>

              <div className="grid grid-cols-1 gap-4">
                {europeanReactions.map((reaction, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow p-4 flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="text-4xl mr-4"
                      role="img"
                      aria-label={reaction.country}
                    >
                      {reaction.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-lg">{reaction.country}</h4>
                      <p className="text-gray-700">{reaction.reaction}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Wpływ na europejski konstytucjonalizm
              </h3>

              <div className="prose prose-lg max-w-none">
                <p>
                  Choć Konstytucja 3 Maja obowiązywała krótko, jej znaczenie dla
                  europejskiego konstytucjonalizmu jest niepodważalne:
                </p>
                <ul>
                  <li>
                    <strong>Pionierski charakter</strong> - jako pierwsza
                    konstytucja w Europie, stała się dowodem na możliwość
                    wprowadzenia nowoczesnych reform ustrojowych bez krwawej
                    rewolucji.
                  </li>
                  <li>
                    <strong>Model transformacji</strong> - pokazała, że możliwe
                    jest przekształcenie monarchii absolutnej w konstytucyjną w
                    sposób pokojowy i ewolucyjny.
                  </li>
                  <li>
                    <strong>Równowaga między władzami</strong> - wypracowała
                    oryginalny model równowagi między królem, parlamentem i
                    sądownictwem, który był studiowany przez europejskich
                    myślicieli politycznych.
                  </li>
                  <li>
                    <strong>Inspiracja dla innych narodów</strong> - choć jej
                    bezpośredni wpływ legislacyjny był ograniczony przez szybki
                    upadek, stanowiła inspirację dla ruchów konstytucyjnych w
                    innych krajach Europy, szczególnie w pierwszej połowie XIX
                    wieku.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-4">Pamiętane w Europie</h3>
              <p className="mb-4">
                Do dziś Konstytucja 3 Maja jest przedmiotem zainteresowania
                europejskich historyków i prawników, którzy badają ją jako ważny
                etap w rozwoju europejskiego konstytucjonalizmu. W 2021 roku, z
                okazji 230. rocznicy jej uchwalenia, Parlament Europejski
                przyjął specjalną rezolucję, oddającą hołd twórcom Konstytucji i
                podkreślającą jej znaczenie dla wspólnego europejskiego
                dziedzictwa.
              </p>
              <blockquote className="italic border-l-4 border-red-700 pl-4 py-1">
                "Konstytucja 3 maja była ważnym przykładem demokratycznej
                transformacji politycznej, pierwszym tego rodzaju w Europie, i
                drugim na świecie po Stanach Zjednoczonych. (...) Przyjęcie
                Konstytucji 3 maja było aktem odwagi i nadziei, próbą reformy i
                ocalenia państwa w trudnych warunkach geopolitycznych."
              </blockquote>
              <p className="text-right text-sm mt-2">
                — Fragment rezolucji Parlamentu Europejskiego, 2021
              </p>
            </div>
            <SubpageNavigation
              prevLink={{
                to: "/znaczenie/dziedzictwo",
                label: "Dziedzictwo Konstytucji",
              }}
              nextLink={{
                to: "/znaczenie/tozsamosc-narodowa",
                label: "Tożsamość narodowa",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default EuropeanContext;
