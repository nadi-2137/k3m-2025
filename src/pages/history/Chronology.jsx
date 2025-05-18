// Chronology.js - Poprawiona strona z chronologią wydarzeń
import React from "react";
import { motion } from "framer-motion";
import Timeline from "../../components/Timeline";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { historiaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const Chronology = () => {
  // Dane chronologiczne
  const timelineEvents = [
    {
      date: "6 października 1788",
      title: "Rozpoczęcie obrad Sejmu Czteroletniego",
      description:
        "W Warszawie rozpoczyna się Sejm Czteroletni (zwany także Wielkim) zwołany za zgodą carycy Rosji Katarzyny II. Sejm miał na celu przeprowadzenie reform i wzmocnienie państwa po I rozbiorze Polski.",
      image: imageData.chronology.sejmCzteroletni.src,
      imageAlt: imageData.chronology.sejmCzteroletni.alt,
      imageAttribution: imageData.chronology.sejmCzteroletni.attribution,
    },
    {
      date: "20 października 1788",
      title: "Uchwalenie zwiększenia armii",
      description:
        "Sejm uchwalił zwiększenie liczebności stałego wojska do 100 tysięcy żołnierzy, choć w praktyce nigdy nie udało się osiągnąć takiej liczebności.",
    },
    {
      date: "19 stycznia 1789",
      title: "Zniesienie Rady Nieustającej",
      description:
        "Likwidacja Rady Nieustającej – organu wykonawczego powołanego wcześniej przez króla, co znacząco osłabiło wpływy rosyjskie w polskiej polityce.",
    },
    {
      date: "2 grudnia 1789",
      title: "Czarna Procesja",
      description:
        'Manifestacja mieszczan („Czarna Procesja") domagających się równych praw, co miało istotny wpływ na późniejsze reformy dotyczące miast i mieszczan.',
      image: imageData.chronology.czarnaProcesja.src,
      imageAlt: imageData.chronology.czarnaProcesja.alt,
      imageAttribution: imageData.chronology.czarnaProcesja.attribution,
    },
    {
      date: "24 marca 1791",
      title: "Prawo o sejmikach",
      description:
        "Uchwalenie prawa o sejmikach, które m.in. pozbawiało prawa głosu szlachtę nieposiadającą ziemi (tzw. gołotę), co było ważnym krokiem w reformie systemu politycznego.",
    },
    {
      date: "18 kwietnia 1791",
      title: "Prawo o miastach królewskich",
      description:
        "Uchwalenie prawa o miastach królewskich, które znacząco rozszerzało prawa mieszczan, dając im m.in. prawo nabywania ziemi i dostęp do urzędów.",
    },
    {
      date: "3 maja 1791",
      title: "Uchwalenie Konstytucji 3 Maja",
      description:
        "W sali Senatorskiej Zamku Królewskiego w Warszawie odbyło się uchwalenie Konstytucji 3 Maja, która wprowadzała trójpodział władzy, znosiła liberum veto i konfederacje, zwiększała prawa mieszczan oraz ustanawiała monarchię dziedziczną.",
      image: imageData.chronology.uchwalenie.src,
      imageAlt: imageData.chronology.uchwalenie.alt,
      imageAttribution: imageData.chronology.uchwalenie.attribution,
    },
    {
      date: "maj-czerwiec 1791",
      title: "Przyjęcie ustaw szczegółowych",
      description:
        "Uchwalenie szeregu ustaw wykonawczych do Konstytucji, m.in. o Straży Praw (organ władzy wykonawczej) oraz o Komisji Policji (pierwsze polskie ministerstwo).",
    },
    {
      date: "maj 1792",
      title: "Konfederacja targowicka i interwencja rosyjska",
      description:
        "Zawiązanie konfederacji targowickiej przez przeciwników reform i wkroczenie wojsk rosyjskich do Polski, co rozpoczęło wojnę polsko-rosyjską.",
      image: imageData.chronology.konfederacja.src,
      imageAlt: imageData.chronology.konfederacja.alt,
      imageAttribution: imageData.chronology.konfederacja.attribution,
    },
    {
      date: "23 listopada 1793",
      title: "Sejm grodzieński",
      description:
        "Sejm grodzieński pod presją Rosji uznaje Sejm Czteroletni za niebyły i uchyla wszystkie jego akty prawne, w tym Konstytucję 3 Maja, co przypieczętowało klęskę reform.",
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
          Chronologia wydarzeń związanych z Konstytucją 3 Maja
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blok nawigacyjny */}
          <aside className="md:w-64 lg:w-72 flex-shrink-0">
            <div className="sticky top-4">
              <SectionNavigation section="historia" items={historiaItems} />
            </div>
          </aside>

          {/* Blok treści */}
          <main className="flex-grow max-w-4xl">
            <div className="prose prose-lg max-w-none mb-10">
              <p>
                Uchwalenie Konstytucji 3 Maja było efektem długiego procesu
                reform, które zostały zapoczątkowane przez Sejm Czteroletni
                (zwany także Wielkim). Poniższa oś czasu prezentuje
                najważniejsze wydarzenia, które doprowadziły do powstania i
                przyjęcia pierwszej w Europie nowoczesnej konstytucji, a także
                wydarzenia, które nastąpiły po jej uchwaleniu.
              </p>
            </div>

            <Timeline events={timelineEvents} />

            <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Czy wiesz, że...</h3>
              <ul className="space-y-3">
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
                    Datę uchwalenia Konstytucji (3 maja) wybrano specjalnie, gdy
                    wielu posłów opozycji nie wróciło jeszcze do Warszawy po
                    przerwie świątecznej.
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
                    Konstytucja 3 Maja obowiązywała tylko przez 14 miesięcy i 3
                    tygodnie, ale jej wpływ na polską myśl polityczną i
                    tożsamość narodową trwa do dziś.
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
                    Po uchwaleniu Konstytucji 3 Maja, król Stanisław August
                    Poniatowski wydał uroczysty obiad, podczas którego wznoszono
                    toasty na cześć nowej ustawy zasadniczej.
                  </span>
                </li>
              </ul>
            </div>
            <SubpageNavigation
              prevLink={{
                to: "/historia",
                label: "Historia",
              }}
              nextLink={{
                to: "/historia/autorzy",
                label: "Twórcy Konstytucji",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Chronology;
