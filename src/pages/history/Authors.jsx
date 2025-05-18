// Authors.js - Poprawiona strona z autorami Konstytucji
import React from "react";
import { motion } from "framer-motion";
import AuthorCard from "../../components/AuthorCard";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { historiaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const Authors = () => {
  // Dane autorów Konstytucji
  const authors = [
    {
      name: "Stanisław August Poniatowski",
      role: "Król Polski, główny inicjator reform",
      image: imageData.authors.poniatowski.src,
      imageAttribution: imageData.authors.poniatowski.attribution,
      bio: `Stanisław August Poniatowski (1732-1798) - ostatni król Polski, panujący w latach 1764-1795. Był głównym inicjatorem i współautorem Konstytucji 3 Maja.

      Jako władca oświecony wspierał naukę, sztukę i edukację. Założył Szkołę Rycerską, Komisję Edukacji Narodowej i Teatr Narodowy. Organizował też słynne "obiady czwartkowe", gromadzące intelektualistów i artystów.

      Przygotował pierwotną wersję tekstu Konstytucji 3 Maja i aktywnie wspierał jej uchwalenie. Po klęsce reform i III rozbiorze Polski abdykował w 1795 roku i wyjechał do Rosji, gdzie zmarł. Mimo kontrowersji wokół jego polityki wobec Rosji, jego rola w stworzeniu Konstytucji 3 Maja jest nie do przecenienia.`,
    },
    {
      name: "Hugo Kołłątaj",
      role: "Ostateczny redaktor tekstu Konstytucji",
      image: imageData.authors.kollataj.src,
      imageAttribution: imageData.authors.kollataj.attribution,
      bio: `Hugo Kołłątaj (1750-1812) - wybitny działacz polityczny, filozof i publicysta polskiego oświecenia. Jako ksiądz i rektor Akademii Krakowskiej przeprowadził jej gruntowną reformę.

      Podczas Sejmu Czteroletniego należał do najaktywniejszych zwolenników reform ustrojowych. Jako jeden z głównych autorów Konstytucji 3 Maja, zajmował się ostateczną redakcją jej tekstu. Miał ogromny wpływ na nowoczesne rozwiązania dotyczące ustroju państwa, w tym trójpodział władzy.

      Kołłątaj planował dalsze reformy, w tym tzw. "konstytucję ekonomiczną" i "konstytucję moralną", które jednak nie zostały zrealizowane z powodu upadku Konstytucji 3 Maja. Za udział w powstaniu kościuszkowskim został uwięziony przez Austriaków na 8 lat.`,
    },
    {
      name: "Ignacy Potocki",
      role: "Współautor Konstytucji, polityk i reformator",
      image: imageData.authors.potocki.src,
      imageAttribution: imageData.authors.potocki.attribution,
      bio: `Ignacy Potocki (1750-1809) - polski polityk, marszałek wielki litewski, pisarz i działacz oświatowy. Był jednym z przywódców stronnictwa patriotycznego i czołowych autorów Konstytucji 3 Maja.

      Jako współtwórca Konstytucji, skupił się szczególnie na reformie parlamentu i zniesienia liberum veto. Był zwolennikiem nowoczesnych koncepcji ustrojowych, wzorowanych na ideach oświeceniowych. Współpracował ściśle z królem Stanisławem Augustem Poniatowskim i Hugonem Kołłątajem przy opracowywaniu tekstu ustawy zasadniczej.

      Po upadku Konstytucji próbował negocjować z Rosją, a następnie uczestniczył w powstaniu kościuszkowskim. Po klęsce powstania został uwięziony. Po uwolnieniu podjął próby odbudowy polskiej państwowości przy wsparciu Napoleona.`,
    },
    {
      name: "Stanisław Małachowski",
      role: "Marszałek Sejmu Czteroletniego",
      image: imageData.authors.malachowski.src,
      imageAttribution: imageData.authors.malachowski.attribution,
      bio: `Stanisław Małachowski (1736-1809) - polski polityk, marszałek Sejmu Czteroletniego, nazywany "polskim Arystydesem" ze względu na nieskazitelny charakter i uczciwość. Pełnił kluczową rolę organizacyjną i proceduralną podczas uchwalania Konstytucji 3 Maja.

      Jako marszałek sejmu, sprawnie kierował jego obradami i wspierał stronnictwo patriotyczne. W dniu 3 maja 1791 roku zorganizował przebieg głosowania w sposób umożliwiający przyjęcie konstytucji mimo sprzeciwu opozycji. Był jednym z pierwszych, który złożył przysięgę na wierność nowej ustawie zasadniczej.

      Po upadku reform pozostał wierny ideałom Konstytucji 3 Maja. Brał udział w powstaniu kościuszkowskim, a później współpracował z Napoleonem przy tworzeniu Księstwa Warszawskiego.`,
    },
    {
      name: "Scipione Piattoli",
      role: "Włoski sekretarz króla, pośrednik między reformatorami",
      image: imageData.authors.piattoli.src,
      imageAttribution: imageData.authors.piattoli.attribution,
      bio: `Scipione Piattoli (1749-1809) - włoski ksiądz, naukowiec i dyplomata, osobisty sekretarz króla Stanisława Augusta Poniatowskiego. Choć mniej znany, odegrał istotną rolę w procesie tworzenia Konstytucji 3 Maja.

      Piattoli pełnił funkcję pośrednika między królem a innymi reformatorami, szczególnie Ignacym Potockim. Uczestniczył w tajnych spotkaniach, podczas których opracowywano tekst Konstytucji. Dzięki swojemu wykształceniu i znajomości europejskich koncepcji ustrojowych, wniósł cenny wkład w formułowanie nowoczesnych zasad zawartych w dokumencie.

      Po upadku reform, towarzyszył królowi Stanisławowi Augustowi w jego podróży do Grodna. Później kontynuował działalność dyplomatyczną na rzecz sprawy polskiej.`,
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
          Twórcy Konstytucji 3 Maja
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
                Konstytucja 3 Maja była dziełem zbiorowym, ale kilka postaci
                odegrało szczególnie ważną rolę w jej powstaniu. Poznaj głównych
                twórców pierwszej w Europie nowoczesnej konstytucji, ludzi,
                którzy swą mądrością i odwagą próbowali uratować Rzeczpospolitą.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {authors.map((author, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <AuthorCard author={author} />
                </motion.div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  className="h-6 w-6 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ciekawostki o twórcach Konstytucji
              </h3>
              <ul className="space-y-3">
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
                    Hugo Kołłątaj, ze względu na swoje radykalne poglądy i
                    energiczną działalność reformatorską, był nazywany "polskim
                    Robespierrem".
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
                    Stanisław August Poniatowski był jednym z najlepiej
                    wykształconych monarchów Europy - znał kilka języków,
                    interesował się nauką i sztuką, kolekcjonował dzieła sztuki.
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
                    Scipione Piattoli, zanim przybył do Polski, był
                    bibliotekarzem i wykładowcą na uniwersytecie w Modenie oraz
                    nauczycielem francuskich arystokratów.
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
                    Twórcy Konstytucji określili ją jako "ostatnią wolę i
                    testament gasnącej Ojczyzny", przewidując trudności, z
                    jakimi przyjdzie im się zmierzyć po jej uchwaleniu.
                  </span>
                </li>
              </ul>
            </div>
            <SubpageNavigation
              prevLink={{
                to: "/historia/chronologia",
                label: "Chronologia wydarzeń",
              }}
              nextLink={{
                to: "/historia/okolicznosci",
                label: "Okoliczności uchwalenia",
              }}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Authors;
