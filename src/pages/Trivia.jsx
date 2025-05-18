// Trivia.js - ulepszona strona z ciekawostkami
import React, { useState } from "react";
import { motion } from "framer-motion";
import imageData from "../data/imageData";
import ImageWithAttribution from "../components/ImageWithAttribution";
import { Link } from "react-router-dom";

const Trivia = () => {
  // Stan dla aktywnej kategorii ciekawostek
  const [activeCategory, setActiveCategory] = useState("all");

  // Dane ciekawostek
  const triviaItems = [
    {
      title: "Pierwsza w Europie",
      content:
        "Konstytucja 3 Maja była pierwszą w Europie i drugą na świecie (po konstytucji amerykańskiej z 1787 roku) nowoczesną, spisaną konstytucją państwową.",
      image: imageData.europeancontext.bastille,
      imageCaption:
        "Początek rewolucji francuskiej - Francja przyjęła swoją pierwszą konstytucję dopiero we wrześniu 1791 roku, kilka miesięcy po Polsce",
      category: "dokument",
    },
    {
      title: "Tajne przygotowania",
      content:
        "Tekst Konstytucji przygotowywano w tajemnicy, by nie dopuścić do zablokowania reform przez opozycję. Obrady wyznaczono celowo po przerwie świątecznej, gdy wielu przeciwników reform nie wróciło jeszcze do Warszawy.",
      image: imageData.trivia.zamek,
      imageCaption:
        "Zamek Królewski w Warszawie - miejsce uchwalenia Konstytucji 3 Maja",
      category: "uchwalenie",
    },
    {
      title: "Dramatyczny protest",
      content:
        'Podczas obrad poseł Jan Suchorzewski w dramatyczny sposób protestował przeciwko uchwaleniu Konstytucji, grożąc nawet zabiciem własnego syna, którego przywiódł na salę obrad, aby "nie dożył niewoli, którą Konstytucja przyniesie".',
      image: imageData.circumstances.rejtan,
      imageCaption:
        'Jan Matejko, "Rejtan" - obraz symbolizujący dramatyczny protest przeciw rozbiorom Polski',
      category: "uchwalenie",
    },
    {
      title: "Niewielka objętość",
      content:
        "Konstytucja 3 Maja składała się z zaledwie 11 artykułów, znacznie mniej niż współczesne konstytucje. Jednak mimo niewielkiej objętości, wprowadzała fundamentalne zmiany w ustroju państwa.",
      category: "dokument",
    },
    {
      title: "Tłumaczenia na obce języki",
      content:
        "Wkrótce po uchwaleniu Konstytucję przetłumaczono na wiele języków europejskich, w tym francuski, angielski i niemiecki. Była komentowana w prasie europejskiej i wzbudziła duże zainteresowanie.",
      image: imageData.documents.konstytucjaStrona75,
      imageCaption: "Pierwsze wydanie Konstytucji 3 Maja z 1791 roku",
      category: "dokument",
    },
    {
      title: "Zróżnicowany odbiór w Europie",
      content:
        "Konstytucja wywołała zróżnicowane reakcje w Europie - entuzjastyczne we Francji, gdzie trwała rewolucja, pozytywne w Anglii, ale negatywne w absolutystycznych monarchiach: Rosji, Prusach i Austrii.",
      category: "wpływ",
    },
    {
      title: "Zaginiony oryginał",
      content:
        "Pierwotny egzemplarz Konstytucji 3 Maja nie zachował się do naszych czasów. Zaginął podczas II wojny światowej.",
      category: "dokument",
    },
    {
      title: "Sto tysięcy żołnierzy",
      content:
        "Konstytucja wprowadzała stałą armię liczącą do 100 tysięcy żołnierzy, choć w praktyce nigdy nie udało się osiągnąć takiej liczebności z powodu problemów finansowych państwa.",
      category: "reformy",
    },
    {
      title: "Zakazane święto",
      content:
        "Święto Konstytucji 3 Maja było zakazane zarówno podczas zaborów, jak i w okresie PRL. Ponownie stało się oficjalnym świętem państwowym dopiero w 1990 roku.",
      image: imageData.trivia.flaga_polski,
      imageCaption:
        "Flaga Polski - w dniu 3 maja wywieszana na budynkach publicznych i prywatnych",
      category: "wpływ",
    },
    {
      title: "Dzieło zbiorowe",
      content:
        "Konstytucja była dziełem zbiorowym - główny wkład w jej powstanie wnieśli: król Stanisław August Poniatowski, Ignacy Potocki, Hugo Kołłątaj, Stanisław Małachowski oraz włoski sekretarz króla Scipione Piattoli.",
      category: "autorzy",
    },
    {
      title: "Zaledwie 14 miesięcy obowiązywania",
      content:
        "Konstytucja 3 Maja obowiązywała zaledwie 14 miesięcy i 3 tygodnie - od uchwalenia 3 maja 1791 roku do zwycięstwa konfederacji targowickiej wspieranej przez Rosję w lipcu 1792 roku.",
      category: "wpływ",
    },
    {
      title: "Inspiracja dla innych narodów",
      content:
        "Mimo krótkiego okresu obowiązywania, Konstytucja stała się inspiracją dla wielu ruchów niepodległościowych i reform ustrojowych w Europie XIX wieku.",
      category: "wpływ",
    },
    {
      title: "Trójpodział władzy",
      content:
        "Konstytucja 3 Maja wprowadzała nowoczesny trójpodział władzy na ustawodawczą (Sejm), wykonawczą (król i Straż Praw) oraz sądowniczą (niezawisłe sądy) - wzorowany na koncepcji Monteskiusza i rozwiązaniach amerykańskich.",
      category: "reformy",
    },
    {
      title: "Zmiana ustroju",
      content:
        "Ustawa zmieniała ustrój państwa z monarchii elekcyjnej na dziedziczną, gdzie tron miał być przekazywany w ramach dynastii. Po śmierci Stanisława Augusta Poniatowskiego tron miał przejść na saską dynastię Wettinów.",
      category: "reformy",
    },
    {
      title: "Porównanie z rewolucją francuską",
      content:
        "W przeciwieństwie do rewolucji francuskiej, reformy wprowadzone przez Konstytucję 3 Maja miały charakter ewolucyjny, a nie rewolucyjny. Przeprowadzono je bez rozlewu krwi i radykalnego zrywania z tradycją.",
      category: "wpływ",
    },
    {
      title: "Testament gasnącej Ojczyzny",
      content:
        'Twórcy Konstytucji określili ją jako "ostatnią wolę i testament gasnącej Ojczyzny", przewidując trudności, z jakimi przyjdzie im się zmierzyć po jej uchwaleniu.',
      category: "autorzy",
    },
    {
      title: "Dzień Flagi",
      content:
        "2 maja, dzień przed rocznicą uchwalenia Konstytucji, obchodzony jest w Polsce jako Dzień Flagi Rzeczypospolitej Polskiej, co tworzy dwudniowe święto patriotyczne.",
      category: "wpływ",
    },
    {
      title: "Wspólne święto z Litwą",
      content:
        "3 maja jest świętem nie tylko w Polsce, ale także na Litwie, gdzie jest obchodzony jako Dzień Konstytucji (Konstitucijos diena), upamiętniający wspólną historię obu krajów.",
      category: "wpływ",
    },
  ];

  // Filtrowanie ciekawostek według aktywnej kategorii
  const filteredTrivia =
    activeCategory === "all"
      ? triviaItems
      : triviaItems.filter((item) => item.category === activeCategory);

  // Kategorie ciekawostek
  const categories = [
    { id: "all", name: "Wszystkie" },
    { id: "dokument", name: "O dokumencie" },
    { id: "uchwalenie", name: "Uchwalenie" },
    { id: "reformy", name: "Reformy" },
    { id: "autorzy", name: "Autorzy" },
    { id: "wpływ", name: "Wpływ i dziedzictwo" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ciekawostki o Konstytucji 3 Maja
          </motion.h2>

          <div className="prose prose-lg max-w-none mb-10 text-center">
            <p>
              Konstytucja 3 Maja to nie tylko ważny dokument w historii Polski,
              ale też źródło wielu fascynujących faktów i historii. Poznaj
              interesujące ciekawostki o pierwszej w Europie nowoczesnej
              konstytucji, jej twórcach, okolicznościach powstania i wpływie na
              przyszłość Polski.
            </p>
          </div>

          {/* Hero image */}
          <motion.div
            className="mb-12 relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithAttribution
              src={imageData.chronology.uchwalenie.src}
              alt={imageData.chronology.uchwalenie.alt}
              attribution={imageData.chronology.uchwalenie.attribution}
              className="w-full h-full object-cover"
              position="top"
            />
            {/* <img
              src={imageData.chronology.uchwalenie}
              alt="Jan Matejko - Konstytucja 3 Maja"
              className="w-full h-auto"
            /> */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                Jan Matejko - "Konstytucja 3 Maja 1791 roku"
              </h3>
              <p className="text-gray-200">
                Najbardziej znane artystyczne przedstawienie uchwalenia
                Konstytucji 3 Maja
              </p>
            </div>
          </motion.div>

          {/* Filtry kategorii */}
          <div className="mb-10 flex flex-wrap justify-center">
            <div className="text-center mb-4 w-full">
              <h3 className="text-xl font-semibold mb-2">
                Wybierz kategorię ciekawostek:
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-red-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid ciekawostek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTrivia.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {item.image && (
                  <div className="relative">
                    <ImageWithAttribution
                    src={item.image.src}
                    alt={item.title}
                    attribution={item.image.attribution}
                    className="w-full h-48 object-cover"
                    ></ImageWithAttribution>
                    {/* <img
                      src={item.image.src}
                      alt={item.title}

                    /> */}
                    {item.imageCaption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2">
                        {item.imageCaption}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                  <div className="mt-3">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {categories.find((cat) => cat.id === item.category)
                        ?.name || "Ogólne"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quiz promocja */}
          <motion.div
            className="bg-red-50 border border-red-200 rounded-lg p-6 md:p-8 mb-8 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute right-0 top-0 w-40 h-40 bg-red-100 rounded-full -mt-10 -mr-10 z-0"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-red-100 rounded-full -mb-6 -ml-6 z-0"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Sprawdź swoją wiedzę!</h3>
              <p className="text-lg mb-6">
                Poznałeś już wiele ciekawych faktów o Konstytucji 3 Maja. Czy
                jesteś gotowy, aby sprawdzić swoją wiedzę w naszym interaktywnym
                quizie?
              </p>
              <div className="text-center">
                <Link
                  to="/quiz"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Przejdź do quizu
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Cytaty o Konstytucji */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Słynne cytaty o Konstytucji 3 Maja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <blockquote className="italic text-xl border-l-4 border-red-700 pl-4 py-2">
                "Ostatnia wola i testament gasnącej Ojczyzny"
                <footer className="text-base font-normal mt-2">
                  — Określenie użyte przez twórców Konstytucji
                </footer>
              </blockquote>
              <blockquote className="italic text-xl border-l-4 border-red-700 pl-4 py-2">
                "...konstytucja była najwyższym stopniem, do którego dojrzała
                cywilizacja polska..."
                <footer className="text-base font-normal mt-2">
                  — Adam Mickiewicz, "Literatura słowiańska"
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trivia;
