// PowerStructure.js - strona o ustroju państwa
import React from "react";
import { motion } from "framer-motion";
import InfoCard from "../../components/InfoCard";
import IconList from "../../components/IconList";
import SectionNavigation from "../../components/SectionNavigation";
import { postanowieniaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const PowerStructure = () => {
  const branches = [
    {
      title: "Władza ustawodawcza",
      content: (
        <>
          <p>
            Władzę ustawodawczą sprawował dwuizbowy Sejm, składający się z Izby
            Poselskiej i Senatu. Izba Poselska była uznawana za "świątynię
            prawodawstwa", co oznaczało jej prymat w stanowieniu prawa.
          </p>
          <ul>
            <li>Posłowie byli wybierani na sejmikach szlacheckich</li>
            <li>Prawo głosu mieli tylko posiadacze ziemi</li>
            <li>
              Zniesiono liberum veto - decyzje podejmowano większością głosów
            </li>
            <li>
              Senat pełnił rolę izby wyższej, mającej prawo zawieszającego weta
            </li>
          </ul>
        </>
      ),
      icon: (
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
      ),
      color: "red",
    },
    {
      title: "Władza wykonawcza",
      content: (
        <>
          <p>
            Władzę wykonawczą sprawował król wraz ze Strażą Praw, który był
            swego rodzaju rządem - pierwszym w historii Polski nowoczesnym
            organem administracji rządowej.
          </p>
          <ul>
            <li>
              Straż Praw składała się z króla jako przewodniczącego i pięciu
              ministrów (prymasa, ministra policji, ministra pieczęci, ministra
              wojny i ministra skarbu)
            </li>
            <li>
              Ministrowie byli powoływani przez króla, ale odpowiadali przed
              Sejmem
            </li>
            <li>
              Król miał prawo łaski, mianowania biskupów, senatorów i ministrów
            </li>
            <li>
              Król był odpowiedzialny za prowadzenie polityki zagranicznej
            </li>
          </ul>
        </>
      ),
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Władza sądownicza",
      content: (
        <>
          <p>
            Władza sądownicza została wyodrębniona jako niezależna gałąź władzy,
            co było nowatorskim rozwiązaniem w ówczesnej Europie, zgodnym z
            koncepcją trójpodziału władzy.
          </p>
          <ul>
            <li>
              Utworzono niezależne i stałe sądy, działające "w imieniu króla"
            </li>
            <li>Zachowano sądy szlacheckie, mieszczańskie i wiejskie</li>
            <li>
              Sprawy o najcięższe przestępstwa rozpatrywał Sejm jako Sąd Sejmowy
            </li>
            <li>
              Sędziowie byli wybierani na sejmikach i pełnili swoje funkcje
              dożywotnio
            </li>
          </ul>
        </>
      ),
      icon: (
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
      ),
      color: "green",
    },
  ];

  const monarchyFeatures = [
    "Tron stał się dziedziczny, co miało zapobiec chaosowi wolnych elekcji",
    "Po śmierci Stanisława Augusta Poniatowskiego tron miał przejść na dynastię Wettynów",
    "Król miał być głową rządu, a nie tylko reprezentacyjnym monarchą",
    "Monarcha musiał wyznawać religię katolicką",
    "Królowa również musiała być koronowana i również musiała być katoliczką",
    'Króla uznano za "ojca i głowę narodu" - miał być gwarantem praw i jedności narodu',
  ];

  const liberumVetoNegatives = [
    "Paraliżowało prace Sejmu - jeden poseł mógł zerwać obrady i unieważnić wszystkie uchwały",
    "Było narzędziem w rękach magnaterii i obcych mocarstw do blokowania reform",
    "Prowadziło do anarchii politycznej i niezdolności państwa do szybkiego działania",
    "Uniemożliwiało podejmowanie trudnych, ale koniecznych decyzji politycznych",
    "Było sprzeczne z zasadą dobra wspólnego, stawiając interes jednostki ponad interesem państwa",
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
          Ustrój państwa według Konstytucji 3 Maja
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
                Jedną z najważniejszych reform wprowadzonych przez Konstytucję 3
                Maja była fundamentalna zmiana ustroju państwa. Zastąpiono
                anarchiczną "złotą wolność szlachecką" z liberum veto i wolną
                elekcją nowoczesnym systemem opartym na trójpodziale władzy,
                monarchii dziedzicznej i rządach prawa.
              </p>
            </div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Trójpodział władzy
              </h3>
              <p className="text-center text-lg mb-8">
                Konstytucja 3 Maja wprowadziła nowoczesny podział władzy na trzy
                niezależne gałęzie:
              </p>

              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <InfoCard
                    key={index}
                    title={branch.title}
                    content={branch.content}
                    icon={branch.icon}
                    color={branch.color}
                  />
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Monarchia dziedziczna
                </h3>
                <div className="prose prose-lg">
                  <p>
                    Konstytucja zmieniła ustrój z monarchii elekcyjnej na
                    dziedziczną. Miało to zapobiec okresom bezkrólewia, które
                    często prowadziły do ingerencji obcych mocarstw i
                    wewnętrznych konfliktów.
                  </p>

                  <IconList items={monarchyFeatures} />

                  <p>
                    Ta zmiana była jedną z najbardziej kontrowersyjnych i
                    wywołała silny sprzeciw części szlachty, która obawiała się
                    utraty wpływu na wybór monarchy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">
                  Zniesienie liberum veto
                </h3>
                <div className="prose prose-lg">
                  <p>
                    Konstytucja 3 Maja zniosła liberum veto, które było jedną z
                    głównych przyczyn słabości polskiego parlamentaryzmu.
                    Decyzje w Sejmie miały być teraz podejmowane większością
                    głosów.
                  </p>

                  <p className="font-bold">
                    Dlaczego liberum veto było szkodliwe:
                  </p>
                  <IconList items={liberumVetoNegatives} />

                  <p>
                    Zniesienie liberum veto było kluczowym krokiem w kierunku
                    usprawnienia funkcjonowania państwa i umożliwienia
                    koniecznych reform.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative bg-red-700 text-white rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Tło z efektem półprzezroczystości */}
              <div className="absolute inset-0 bg-red-800 opacity-50 z-0"></div>

              {/* Treść */}
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Cytat z Konstytucji 3 Maja
                </h3>
                <blockquote className="text-xl italic mb-4 text-center">
                  "Wszelka władza społeczności ludzkiej początek swój bierze z
                  woli narodu"
                </blockquote>
                <p className="text-center">
                  Ten fragment z preambuły Konstytucji 3 Maja wprowadzał
                  rewolucyjną jak na tamte czasy zasadę suwerenności narodu,
                  odchodząc od koncepcji boskiego pochodzenia władzy
                  królewskiej.
                </p>
              </div>
            </motion.div>
            <SubpageNavigation
                prevLink={{
                  to: "/postanowienia",
                  label: "Postanowienia",
                }}
              nextLink={{
                to: "/postanowienia/prawa-obywateli",
                label: "Prawa obywateli",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default PowerStructure;
