// CitizenRights.js - strona o prawach obywateli
import React from "react";
import { motion } from "framer-motion";
import InfoCard from "../../components/InfoCard";
import ComparisonTable from "../../components/ComparisonTable";
import IconList from "../../components/IconList";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { postanowieniaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const CitizenRights = () => {
  const compareHeaders = [
    "Stan społeczny",
    "Przed Konstytucją 3 Maja",
    "Po Konstytucji 3 Maja",
  ];

  const compareRows = [
    [
      "Szlachta",
      "Pełne prawa polityczne dla całej szlachty niezależnie od majątku. Monopol na piastowanie urzędów i posiadanie ziemi.",
      "Ograniczenie praw politycznych dla szlachty nieposiadającej ziemi (gołoty). Szlachta posiadająca majątki zachowała większość przywilejów.",
    ],
    [
      "Mieszczanie",
      "Ograniczone prawa, brak dostępu do wyższych urzędów państwowych i wojskowych. Ograniczone prawo nabywania ziemi.",
      "Uzyskali prawo nietykalności osobistej, nabywania dóbr ziemskich, dostęp do urzędów cywilnych i wojskowych, możliwość nobilitacji. Posiadali przedstawicieli w Sejmie z głosem doradczym.",
    ],
    [
      "Chłopi",
      "Pełna zależność od szlachty, brak jakichkolwiek praw politycznych i osobistych, poddaństwo.",
      "Pozostali poddanymi, ale Konstytucja uznała ich za część narodu i objęła opieką prawa. Umowy między chłopami a właścicielami ziemskimi zyskały ochronę prawną.",
    ],
    [
      "Duchowieństwo",
      "Znaczące wpływy polityczne, szczególnie wyższe duchowieństwo. Zwolnienia podatkowe i przywileje.",
      "Zachowało większość przywilejów, a katolicyzm pozostał religią panującą, jednak wprowadzono zasadę tolerancji religijnej.",
    ],
    [
      "Żydzi i inne mniejszości",
      "Ograniczone prawa, często dyskryminacja. Funkcjonowanie w odrębnych strukturach społeczno-prawnych.",
      "Konstytucja nie zmieniła bezpośrednio ich sytuacji, choć zasada tolerancji religijnej mogła pośrednio wpłynąć na poprawę ich położenia.",
    ],
  ];

  const townLawFeatures = [
    "Nietykalność osobista - mieszczanie nie mogli być aresztowani bez wyroku sądowego",
    "Prawo nabywania dóbr ziemskich - mogli kupować ziemię, co wcześniej było przywilejem szlachty",
    "Dostęp do urzędów - mogli pełnić funkcje w administracji, sądownictwie i wojsku",
    "Możliwość nobilitacji - za zasługi dla kraju lub osiągnięcia w handlu i rzemiośle",
    "Samorząd miejski - miasta królewskie miały prawo do wybierania swoich władz",
    "Przedstawicielstwo w Sejmie - 24 plenipotentów miast z głosem doradczym w sprawach miejskich",
  ];

  const peasantSituation = [
    "Chłopi zostali uznani za część narodu i objęci ochroną prawa państwowego",
    "Umowy między chłopami a właścicielami ziemskimi zyskały moc prawną i były chronione przez państwo",
    "Zapowiedziano nagradzanie właścicieli ziemskich, którzy poprawiali los swoich chłopów",
    "Szczególną opieką objęto chłopów, którzy przybywali do Polski z zagranicy lub do niej wracali",
    "Jednak Konstytucja nie znosiła pańszczyzny ani poddaństwa - była to raczej zapowiedź stopniowych reform",
    "W praktyce sytuacja chłopów zależała nadal głównie od dobrej woli właścicieli ziemskich",
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
          Prawa obywateli według Konstytucji 3 Maja
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
                Konstytucja 3 Maja wprowadziła istotne zmiany w strukturze
                społecznej Rzeczypospolitej, dążąc do modernizacji państwa i
                stworzenia bardziej sprawiedliwego systemu. Choć nie zrównała
                wszystkich stanów, to poczyniła ważne kroki w kierunku
                rozszerzenia praw obywatelskich, szczególnie dla mieszczan.
              </p>
            </div>

            <ComparisonTable
              title="Porównanie praw różnych stanów społecznych"
              headers={compareHeaders}
              rows={compareRows}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <ImageWithAttribution
                    src={imageData.chronology.czarnaProcesja.src}
                    alt={imageData.chronology.czarnaProcesja.alt}
                    attribution={
                      imageData.chronology.czarnaProcesja.attribution
                    }
                    className="w-full h-48 object-cover"
                    position="top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">Prawa mieszczan</h3>
                    <p className="text-sm">
                      Czarna procesja - manifestacja mieszczan w 1789 roku
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-4">
                    Ustawa o miastach królewskich z 18 kwietnia 1791 roku,
                    włączona następnie do Konstytucji 3 Maja, znacząco poprawiła
                    sytuację prawną mieszczan. Była odpowiedzią na postulaty
                    przedstawione podczas "Czarnej procesji" w 1789 roku.
                  </p>

                  <IconList items={townLawFeatures} />

                  <p className="mt-4 text-sm italic">
                    Reforma praw mieszczan była jednym z najbardziej postępowych
                    elementów Konstytucji, częściowo zrównującym ich w prawach
                    ze szlachtą.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <ImageWithAttribution
                    src={imageData.citizenRights.harvestersRest.src}
                    alt={imageData.citizenRights.harvestersRest.alt}
                    attribution={
                      imageData.citizenRights.harvestersRest.attribution
                    }
                    className="w-full h-48 object-cover"
                    position="top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">Sytuacja chłopów</h3>
                    <p className="text-sm">
                      Wincenty Wodzinowski - Dożynki (scena z życia chłopów)
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-4">
                    Konstytucja 3 Maja nie przeprowadziła radykalnej reformy
                    sytuacji chłopów, ale zawierała pewne postanowienia, które
                    mogły w przyszłości prowadzić do poprawy ich położenia. Był
                    to pierwszy krok w kierunku uznania praw tej najliczniejszej
                    grupy społecznej.
                  </p>

                  <IconList items={peasantSituation} />

                  <p className="mt-4 text-sm italic">
                    Choć zmiany dotyczące chłopów były dość ograniczone, uznanie
                    ich za część narodu i objęcie ochroną prawa państwowego
                    stanowiło istotny przełom w myśleniu o strukturze
                    społecznej.
                  </p>
                </div>
              </motion.div>
            </div>

            <InfoCard
              title="Ograniczenie praw szlachty gołoty"
              content={
                <>
                  <p>
                    Jedną z ważnych reform była zmiana dotycząca szlachty
                    nieposiadającej ziemi (tzw. gołoty). Konstytucja odebrała im
                    prawa polityczne, pozostawiając jedynie przywileje osobiste.
                  </p>
                  <p>
                    Było to podyktowane pragmatycznymi względami - szlachta
                    gołota, zależna ekonomicznie od magnatów, często była
                    narzędziem w ich rękach i głosowała zgodnie z wolą swoich
                    patronów lub za odpowiednią opłatą. Ograniczenie jej praw
                    miało uzdrowić system polityczny i zmniejszyć wpływy
                    magnaterii.
                  </p>
                  <p>
                    Szlachta posiadająca ziemię zachowała swoje prawa i
                    przywileje, pozostając główną siłą polityczną w państwie.
                    Jednocześnie Konstytucja stworzyła możliwość awansu
                    społecznego dla mieszczan poprzez system nobilitacji.
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />

            <SubpageNavigation
              prevLink={{
                to: "/postanowienia/ustroj",
                label: "Struktura władzy",
              }}
              nextLink={{
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

export default CitizenRights;
