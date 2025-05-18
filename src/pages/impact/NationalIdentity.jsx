// NationalIdentity.js - strona o wpływie na tożsamość narodową
import React from "react";
import { motion } from "framer-motion";
import imageData from "../../data/imageData";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import SectionNavigation from "../../components/SectionNavigation";
import { znaczenieItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const NationalIdentity = () => {
  // Dane o dziełach kultury związanych z Konstytucją
  const culturalWorks = [
    {
      title: "Konstytucja 3 Maja 1791 roku",
      author: "Jan Matejko",
      year: "1891",
      type: "Malarstwo",
      description:
        "Jedno z najsłynniejszych płócien Matejki, przedstawiające procesję z królem Stanisławem Augustem Poniatowskim po uchwaleniu Konstytucji.",
      image: imageData.chronology.uchwalenie,
    },
    {
      title: "Rejtan, czyli upadek Polski",
      author: "Jan Matejko",
      year: "1866",
      type: "Malarstwo",
      description:
        "Obraz przedstawiający dramatyczny protest posła Tadeusza Rejtana przeciwko I rozbiorowi Polski, symbolizujący późniejsze dążenia reformatorskie.",
      image: imageData.circumstances.rejtan,
    },
    {
      title: "Polonez Trzeciego Maja",
      author: "Stanisław Wyspiański",
      year: "1907",
      type: "Literatura",
      description:
        "Fragment dramatu 'Warszawianka', ukazujący nastroje towarzyszące obchodom rocznicy Konstytucji podczas powstania listopadowego.",
      image: null,
    },
    {
      title: "Mazurek 3 Maja",
      author: "Józef Wybicki",
      year: "ok. 1791",
      type: "Muzyka",
      description:
        "Patriotyczna pieśń napisana z okazji uchwalenia Konstytucji 3 Maja, która stała się jednym z nieformalnych hymnów narodowych.",
      image: null,
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
          Konstytucja 3 Maja a tożsamość narodowa
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
              <div className="relative h-80 rounded-xl overflow-hidden mb-8">
                <ImageWithAttribution
                  src={imageData.nationalidentity.chicago.src}
                  alt={imageData.nationalidentity.chicago.alt}
                  attribution={imageData.nationalidentity.chicago.attribution}
                  className="w-full h-full object-cover"
                  position="top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end pointer-events-none">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-xl font-bold mb-2">
                      Symbol polskości na emigracji
                    </h3>
                    <p className="text-sm md:text-base">
                      Parada z okazji Dnia Konstytucji 3 Maja w Chicago,
                      największym skupisku Polonii poza granicami Polski
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  Konstytucja 3 Maja odegrała kluczową rolę w kształtowaniu
                  polskiej tożsamości narodowej. W okresie zaborów i później,
                  stała się symbolem dążeń niepodległościowych i przypomnieniem
                  o czasach, gdy Polska była pionierem reform demokratycznych w
                  Europie.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">
                  Symbol w czasie rozbiorów
                </h3>
                <p>
                  Po utracie niepodległości, pamięć o Konstytucji 3 Maja stała
                  się jednym z filarów polskiej tożsamości narodowej. Jej
                  rocznica była obchodzona potajemnie jako manifestacja
                  sprzeciwu wobec zaborców. Wspomnienie o pierwszej polskiej
                  konstytucji podtrzymywało nadzieję na odzyskanie
                  niepodległości i odrodzenie państwa.
                </p>
                <p className="mt-2">
                  Zaborcy doskonale zdawali sobie sprawę z symbolicznego
                  znaczenia Konstytucji 3 Maja, dlatego jej obchody były surowo
                  zakazane, a uczestnictwo w nich karane. Mimo to, Polacy
                  organizowali tajne obchody i przekazywali pamięć o Konstytucji
                  kolejnym pokoleniom.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">Święto narodowe</h3>
                <p>
                  Dzień 3 maja został ustanowiony świętem narodowym już w 1791
                  roku. Po odzyskaniu niepodległości w 1918 roku, Święto
                  Konstytucji 3 Maja zostało oficjalnie przywrócone w 1919 roku.
                  W okresie PRL święto zostało zniesione przez władze
                  komunistyczne, które obawiały się jego niepodległościowego
                  wydźwięku.
                </p>
                <p className="mt-2">
                  Dopiero w 1990 roku, po transformacji ustrojowej, Święto
                  Konstytucji 3 Maja zostało ponownie ustanowione świętem
                  państwowym. Dziś jest jednym z najważniejszych polskich świąt,
                  symbolizującym przywiązanie do wartości demokratycznych,
                  suwerenności i tradycji.
                </p>
              </motion.div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Konstytucja 3 Maja w kulturze
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {culturalWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {work.image && (
                      <ImageWithAttribution
                        src={work.image.src}
                        alt={work.image.alt}
                        attribution={work.image.attribution}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{work.title}</h4>
                        <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                          {work.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {work.author}, {work.year}
                      </p>
                      <p className="text-gray-700">{work.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Międzypokoleniowy przekaz wartości
              </h3>

              <div className="prose prose-lg max-w-none">
                <p>
                  Konstytucja 3 Maja stała się nośnikiem wartości
                  konstytutywnych dla polskiej tożsamości narodowej:
                </p>
                <ul>
                  <li>
                    <strong>Dążenie do wolności i niepodległości</strong> -
                    Konstytucja jako symbol walki o suwerenność
                  </li>
                  <li>
                    <strong>Reformizm i postępowość</strong> - gotowość do
                    wprowadzania zmian i modernizacji
                  </li>
                  <li>
                    <strong>Legalizm i praworządność</strong> - szacunek dla
                    prawa jako podstawy funkcjonowania państwa
                  </li>
                  <li>
                    <strong>
                      Patriotyzm połączony z otwartością na Europę
                    </strong>{" "}
                    - równoczesne przywiązanie do polskości i do wartości
                    europejskich
                  </li>
                  <li>
                    <strong>Kompromis jako droga do reform</strong> -
                    umiejętność łączenia tradycji z nowoczesnością
                  </li>
                </ul>
                <p>
                  Te wartości były przekazywane z pokolenia na pokolenie,
                  kształtując polską tożsamość narodową w okresie zaborów, obu
                  wojen światowych, komunizmu, aż po współczesność.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-center mb-2">
                  W literaturze
                </h4>
                <p className="text-gray-700">
                  Konstytucja 3 Maja i jej dziedzictwo były ważnym motywem w
                  literaturze polskiego romantyzmu i pozytywizmu. Pojawiały się
                  w twórczości Adama Mickiewicza, Juliusza Słowackiego czy
                  Stanisława Wyspiańskiego.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-center mb-2">W muzyce</h4>
                <p className="text-gray-700">
                  Powstało wiele pieśni i utworów muzycznych związanych z
                  Konstytucją 3 Maja, w tym "Mazurek 3 Maja" oraz współczesne
                  kompozycje wykonywane podczas uroczystości państwowych.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-center mb-2">
                  W sztukach wizualnych
                </h4>
                <p className="text-gray-700">
                  Obrazy, rzeźby i inne dzieła sztuki upamiętniające Konstytucję
                  3 Maja są obecne w muzeach, galeriach i przestrzeni
                  publicznej. Ich zadaniem jest podtrzymywanie pamięci o tym
                  wydarzeniu.
                </p>
              </motion.div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                Pamięć o Konstytucji 3 Maja w edukacji
              </h3>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3">Przekaz szkolny</h4>
                    <p className="mb-3">
                      Historia Konstytucji 3 Maja jest nieodłącznym elementem
                      programu nauczania historii w polskich szkołach. Uczniowie
                      poznają okoliczności jej uchwalenia, główne postanowienia
                      oraz znaczenie dla polskiej historii i tożsamości.
                    </p>
                    <p>
                      Corocznie w szkołach organizowane są akademie i
                      uroczystości z okazji Święta Konstytucji 3 Maja, co
                      pozwala kolejnym pokoleniom poznawać i doceniać to
                      dziedzictwo narodowe.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-6">
                    <h4 className="text-xl font-bold mb-3">
                      Inicjatywy społeczne
                    </h4>
                    <p className="mb-3">
                      Liczne organizacje pozarządowe, muzea i instytucje kultury
                      realizują programy edukacyjne poświęcone Konstytucji 3
                      Maja, organizując wystawy, konkursy, warsztaty i inne
                      wydarzenia.
                    </p>
                    <p>
                      Dzięki tym inicjatywom pamięć o Konstytucji nie ogranicza
                      się tylko do formalnej edukacji, ale staje się elementem
                      żywej kultury i tożsamości narodowej.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">
                Konstytucja 3 Maja a współczesna tożsamość Polaków
              </h3>
              <div className="prose prose-lg">
                <p>
                  Współcześnie Konstytucja 3 Maja pozostaje ważnym punktem
                  odniesienia dla polskiej tożsamości narodowej. Stanowi dowód
                  na to, że Polska ma długą tradycję demokratyczną i
                  reformatorską, sięgającą XVIII wieku.
                </p>
                <p>
                  Dla wielu Polaków, szczególnie w kontekście członkostwa w Unii
                  Europejskiej, Konstytucja 3 Maja jest dowodem na przynależność
                  Polski do kręgu cywilizacji zachodniej i europejskich wartości
                  demokratycznych.
                </p>
                <p>
                  Jako symbol, Konstytucja 3 Maja łączy Polaków ponad
                  politycznymi podziałami, przypominając o wartościach, które
                  powinny być wspólne dla całego narodu: umiłowaniu wolności,
                  dążeniu do reform i modernizacji oraz trosce o dobro wspólne i
                  suwerenność państwa.
                </p>
              </div>
            </motion.div>
            <SubpageNavigation
              prevLink={{
                to: "/znaczenie/kontekst-europejski",
                label: "Kontekst europejski",
              }}
              nextLink={{
                to: "/znaczenie/przyczyny-porazki",
                label: "Przyczyny porażki",
              }}
            />

          </main>
        </div>
      </div>
    </section>
  );
};

export default NationalIdentity;
