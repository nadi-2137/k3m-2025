// Failures.js - strona o przyczynach porażki
import React from "react";
import { motion } from "framer-motion";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { znaczenieItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const Failures = () => {
  // Dane o przyczynach porażki
  const failureReasons = [
    {
      title: "Silna opozycja wewnętrzna",
      description:
        "Część polskiej magnaterii i szlachty, niezadowolona z ograniczenia swoich przywilejów, sprzeciwiła się reformom. Ta grupa, skupiona wokół konfederacji targowickiej, uznała Konstytucję za zagrożenie dla swoich interesów.",
      icon: "users-slash",
      color: "red",
    },
    {
      title: "Interwencja wojsk rosyjskich",
      description:
        "Imperium Rosyjskie, które od 1768 roku było protektorem Rzeczypospolitej i gwarantem jej ustroju, uznało Konstytucję za zagrożenie dla swoich wpływów i zorganizowało interwencję zbrojną w 1792 roku.",
      icon: "shield-exclamation",
      color: "amber",
    },
    {
      title: "Brak wsparcia sojuszników",
      description:
        "Polska została zdradzona przez swojego sprzymierzeńca, Prusy, które mimo początkowego poparcia dla reform, ostatecznie nie wsparły kraju w konflikcie z Rosją, co osłabiło pozycję Rzeczypospolitej.",
      icon: "user-minus",
      color: "blue",
    },
    {
      title: "Niedostateczna siła militarna",
      description:
        "Rzeczpospolita była słaba militarnie i politycznie, a reforma armii i systemu państwowego była wciąż niedokończona. To utrudniało obronę przed agresją zewnętrzną i skuteczne wdrożenie reform.",
      icon: "fire",
      color: "green",
    },
    {
      title: "Atmosfera polityczna w Europie",
      description:
        "Konstytucja 3 Maja była postrzegana jako zagrożenie dla absolutystycznych monarchii sąsiednich państw oraz jako wyraz rewolucyjnych idei oświeceniowych, co budziło niechęć i obawy wśród europejskich elit.",
      icon: "globe",
      color: "purple",
    },
  ];

  // Funkcja generująca ikonę
  const getIcon = (iconName) => {
    switch (iconName) {
      case "users-slash":
        return (
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 18l-6-6"
            />
          </svg>
        );
      case "shield-exclamation":
        return (
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016M12 9v2m0 4h.01"
            />
          </svg>
        );
      case "user-minus":
        return (
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
            />
          </svg>
        );
      case "fire":
        return (
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        );
      case "globe":
        return (
          <svg
            className="w-7 h-7"
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
        );
      default:
        return null;
    }
  };

  // Funkcja zwracająca kolor tła dla ikony
  const getColorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-red-600";
      case "amber":
        return "bg-amber-600";
      case "blue":
        return "bg-blue-600";
      case "green":
        return "bg-green-600";
      case "purple":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Przyczyny porażki Konstytucji 3 Maja
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
                  src={imageData.failures.wieszanieZdrajcow.src}
                  alt={imageData.failures.wieszanieZdrajcow.alt}
                  attribution={imageData.failures.wieszanieZdrajcow.attribution}
                  className="w-full h-auto"
                  position="top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end pointer-events-none">
                  <p className="text-white p-4 text-center w-full text-sm">
                    Obraz „Wieszanie zdrajców” Jana Piotra Norblina, ukazujący
                    symboliczne potępienie konfederacji targowickiej i jej roli
                    w upadku reform Konstytucji 3 Maja.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  Konstytucja 3 Maja obowiązywała zaledwie 14 miesięcy i 3
                  tygodnie. Mimo swojego przełomowego charakteru i szerokich
                  reform, które wprowadzała, nie zdołała uchronić
                  Rzeczypospolitej przed upadkiem. Jakie były główne przyczyny
                  jej porażki i dlaczego ten pionierski dokument miał tak krótki
                  żywot?
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Główne przyczyny upadku
              </h3>

              {failureReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 mb-4 flex items-start"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`${getColorClass(
                      reason.color
                    )} rounded-full p-3 text-white mr-4 flex-shrink-0`}
                  >
                    {getIcon(reason.icon)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-12">
              <motion.h3
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Konfederacja targowicka
              </motion.h3>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3">Czym była?</h4>
                    <p className="mb-4">
                      Konfederacja targowicka była związkiem politycznym
                      zawiązanym 27 kwietnia 1792 roku w Petersburgu, a
                      formalnie ogłoszonym 14 maja 1792 roku w Targowicy na
                      Ukrainie przez grupę polskich magnatów przeciwnych
                      reformom Sejmu Czteroletniego, w tym Konstytucji 3 Maja.
                    </p>
                    <p>
                      Na czele konfederacji stali: Stanisław Szczęsny Potocki,
                      Seweryn Rzewuski i Ksawery Branicki. Zwrócili się oni o
                      pomoc do carycy Katarzyny II, argumentując, że Konstytucja
                      jest zamachem na "złotą wolność szlachecką" i tradycyjny
                      ustrój Rzeczypospolitej.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-6">
                    <h4 className="text-xl font-bold mb-3">Konsekwencje</h4>
                    <p className="mb-4">
                      Konfederacja targowicka stała się pretekstem do rosyjskiej
                      interwencji zbrojnej w Polsce w 1792 roku. Pomimo
                      początkowych sukcesów wojsk polskich pod dowództwem
                      księcia Józefa Poniatowskiego, król Stanisław August
                      Poniatowski przystąpił do konfederacji, co doprowadziło do
                      klęski w wojnie.
                    </p>
                    <p>
                      W wyniku tych wydarzeń, wszystkie reformy Sejmu
                      Czteroletniego, w tym Konstytucja 3 Maja, zostały
                      unieważnione, a w 1793 roku doszło do II rozbioru Polski.
                      Targowica stała się w polskiej historii i kulturze
                      symbolem zdrady narodowej.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                Wojna polsko-rosyjska 1792 roku
              </h3>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Bezpośrednią konsekwencją uchwalenia Konstytucji 3 Maja i
                    powstania konfederacji targowickiej była wojna
                    polsko-rosyjska, określana również jako wojna w obronie
                    Konstytucji lub jako wojna z Rosją 1792 roku. Oto jej
                    przebieg:
                  </p>
                  <ul>
                    <li>
                      <strong>Wybuch wojny</strong> - 18 maja 1792 roku armia
                      rosyjska (ok. 100 tys. żołnierzy) przekroczyła granice
                      Rzeczypospolitej, rozpoczynając działania wojenne.
                    </li>
                    <li>
                      <strong>Siły polskie</strong> - Polska dysponowała
                      zaledwie ok. 37 tys. żołnierzy, podzielonych na dwie
                      armie: koronną (dowodzoną przez księcia Józefa
                      Poniatowskiego) i litewską (dowodzoną przez księcia
                      Ludwika Wirtemberskiego).
                    </li>
                    <li>
                      <strong>Przebieg</strong> - Mimo znacznej przewagi
                      liczebnej Rosjan, polskie wojska odnosiły początkowo pewne
                      sukcesy, m.in. w bitwach pod Zieleńcami i Dubienką. Jednak
                      ze względu na przewagę wroga zmuszone były do ciągłego
                      odwrotu w kierunku Warszawy.
                    </li>
                    <li>
                      <strong>Kapitulacja</strong> - 24 lipca 1792 roku król
                      Stanisław August Poniatowski, wbrew radom dowódców
                      wojskowych, przystąpił do konfederacji targowickiej i
                      nakazał wojsku zaprzestanie walk. Oznaczało to faktyczną
                      kapitulację i koniec wojny.
                    </li>
                  </ul>
                  <p>
                    Konsekwencją przegranej wojny było unieważnienie Konstytucji
                    3 Maja i wszystkich reform Sejmu Czteroletniego, a następnie
                    II rozbiór Polski w 1793 roku.
                  </p>
                </div>
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
                  Perspektywa międzynarodowa
                </h3>
                <p>
                  Z perspektywy międzynarodowej, upadek Konstytucji 3 Maja był
                  wynikiem skomplikowanej sytuacji geopolitycznej w Europie
                  końca XVIII wieku. Rzeczpospolita znalazła się między trzema
                  potężnymi monarchiami absolutnymi, które nie były
                  zainteresowane istnieniem silnego, zreformowanego państwa
                  polskiego.
                </p>
                <p className="mt-2">
                  Dodatkowo, wybuch rewolucji francuskiej w 1789 roku zmienił
                  układ sił w Europie. Mocarstwa absolutystyczne, zaangażowane w
                  konflikt z rewolucyjną Francją, postanowiły rozwiązać "kwestię
                  polską" przez rozbiory, co miało ułatwić im współpracę
                  przeciwko Francji.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">
                  Perspektywa wewnętrzna
                </h3>
                <p>
                  Z perspektywy wewnętrznej, porażka Konstytucji 3 Maja była
                  wynikiem głębokich podziałów społecznych i politycznych w
                  ówczesnej Rzeczypospolitej. Część magnaterii i szlachty,
                  przyzwyczajona do swojej dominującej pozycji, nie była gotowa
                  zaakceptować reform ograniczających ich przywileje.
                </p>
                <p className="mt-2">
                  Dodatkowo, sama konstytucja była wprowadzana w pośpiechu i w
                  kontrowersyjnych okolicznościach, co dało przeciwnikom
                  argumenty do kwestionowania jej legalności. Zbyt krótki czas
                  obowiązywania (14 miesięcy) nie pozwolił także na pełne
                  wdrożenie reform i konsolidację nowego ustroju.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-red-50 rounded-lg p-6 border border-red-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Historyczna lekcja</h3>
              <div className="prose prose-lg">
                <p>
                  Porażka Konstytucji 3 Maja stanowi ważną lekcję historyczną o
                  tym, jak ambitne i postępowe reformy mogą zostać zniweczone
                  przez kombinację wewnętrznych podziałów i zewnętrznej presji.
                  Mimo to, sama konstytucja pozostała symbolem dążeń do naprawy
                  państwa i inspiracją dla przyszłych pokoleń.
                </p>
                <p>
                  Dzięki temu, mimo krótkiego okresu obowiązywania, Konstytucja
                  3 Maja miała ogromny wpływ na kształtowanie polskiej
                  tożsamości narodowej i myśli politycznej. Jej upadek nie
                  oznaczał końca idei w niej zawartych, które odrodziły się w
                  późniejszych polskich konstytucjach, po odzyskaniu
                  niepodległości.
                </p>
                <blockquote className="italic border-l-4 border-red-700 pl-4 py-1">
                  "Ostatnia wola i testament gasnącej Ojczyzny"
                </blockquote>
                <p className="text-right">
                  — tak określili Konstytucję 3 Maja jej twórcy, przewidując
                  trudności, z jakimi przyjdzie im się zmierzyć.
                </p>
              </div>
            </motion.div>
            <SubpageNavigation
              prevLink={{
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

export default Failures;
