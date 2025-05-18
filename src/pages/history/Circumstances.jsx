// Circumstances.js - strona o okolicznościach uchwalenia Konstytucji
import React from "react";
import { motion } from "framer-motion";
import ImageWithAttribution from "../../components/ImageWithAttribution";
import imageData from "../../data/imageData";
import SectionNavigation from "../../components/SectionNavigation";
import { historiaItems } from "./menu";
import SubpageNavigation from "../../components/SubpageNavigation";

const Circumstances = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Okoliczności uchwalenia Konstytucji 3 Maja
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <ImageWithAttribution
                  src={imageData.circumstances.rejtan.src}
                  alt={imageData.circumstances.rejtan.alt}
                  attribution={imageData.circumstances.rejtan.attribution}
                  className="rounded-lg shadow-lg w-full h-auto mb-4"
                />
                <p className="text-sm text-gray-600 italic text-center">
                  Jan Matejko - "Rejtan, czyli upadek Polski" - obraz
                  symbolizujący sprzeciw wobec I rozbioru Polski, wydarzenia
                  które pokazało konieczność reform ustrojowych
                </p>
              </div>
              <div className="prose prose-lg">
                <h3 className="text-xl font-bold mb-3">
                  Sytuacja polityczna przed uchwaleniem
                </h3>
                <p>
                  Po I rozbiorze Polski w 1772 roku stało się jasne, że bez
                  gruntownych reform państwo polskie może całkowicie zniknąć z
                  mapy Europy. Rzeczpospolita zmagała się z wieloma problemami
                  wewnętrznymi - anarchią polityczną spowodowaną liberum veto,
                  słabością władzy centralnej i dominacją magnaterii, a
                  jednocześnie była zagrożona przez sąsiednie mocarstwa - Rosję,
                  Prusy i Austrię.
                </p>
                <p>
                  W 1788 roku rozpoczął obrady Sejm Czteroletni, który miał na
                  celu przeprowadzenie reform i wzmocnienie państwa. Sytuacja
                  międzynarodowa sprzyjała reformatorom, gdyż Rosja była
                  zaangażowana w konflikt z Turcją i Szwecją, co osłabiło jej
                  wpływy w Polsce.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
              <div className="relative">
                <ImageWithAttribution
                  src={imageData.circumstances.matejkoUchwalenie.src}
                  alt={imageData.circumstances.matejkoUchwalenie.alt}
                  attribution={
                    imageData.circumstances.matejkoUchwalenie.attribution
                  }
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Przebieg uchwalenia</h3>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Uchwalenie Konstytucji 3 Maja było starannie zaplanowaną
                    operacją polityczną. Datę wybrano celowo na 3 maja 1791
                    roku, gdy wielu posłów opozycji nie wróciło jeszcze do
                    Warszawy po przerwie świątecznej. Zwolennicy reform
                    przeprowadzili wcześniej serię tajnych spotkań, podczas
                    których uzgodnili strategię działania.
                  </p>
                  <p>
                    W dniu uchwalenia pod Zamkiem Królewskim w Warszawie
                    zgromadził się tłum mieszczan i szlachty popierającej
                    reformy. Niektórzy byli uzbrojeni, obawiając się próby
                    siłowego zablokowania obrad przez przeciwników reform lub
                    interwencji rosyjskiej.
                  </p>
                  <p>
                    W sali senatorskiej Zamku Królewskiego marszałek Stanisław
                    Małachowski przeprowadził sprawnie obrady, umożliwiając
                    odczytanie projektu Konstytucji. Mimo dramatycznego protestu
                    posła Jana Suchorzewskiego, który groził nawet zabiciem
                    swojego syna, aby "nie dożył niewoli, którą Konstytucja
                    przyniesie", dokument został przyjęty przez aklamację.
                  </p>
                  <p>
                    Po przyjęciu Konstytucji, król Stanisław August Poniatowski
                    jako pierwszy złożył przysięgę na wierność nowej ustawie
                    zasadniczej. Za jego przykładem poszli obecni posłowie i
                    senatorowie. Następnie wszyscy udali się do pobliskiej
                    katedry św. Jana, gdzie odśpiewano uroczyste Te Deum (Ciebie
                    Boga wysławiamy).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  Strategia reformatorów
                </h3>
                <div className="prose prose-lg">
                  <p>
                    Reforma ustrojowa została przygotowana w tajemnicy przez
                    wąskie grono osób skupionych wokół króla Stanisława Augusta
                    Poniatowskiego. Twórcy Konstytucji zdawali sobie sprawę, że
                    jawne przygotowanie tak radykalnych zmian zostałoby
                    zablokowane przez opozycję wewnętrzną i ingerencję rosyjską.
                  </p>
                  <p>
                    Przed formalnym uchwaleniem Konstytucji wprowadzono kilka
                    ustaw przygotowawczych, m.in. prawo o sejmikach i prawo o
                    miastach, które stanowiły elementy przyszłej reformy
                    ustrojowej.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">Reakcje społeczne</h3>
                <div className="prose prose-lg">
                  <p>
                    Uchwalenie Konstytucji 3 Maja wywołało falę entuzjazmu wśród
                    patriotycznie nastawionej szlachty, mieszczan i części
                    duchowieństwa. Ulice Warszawy wypełniły się świętującymi
                    ludźmi, a wiadomość o reformie ustrojowej rozeszła się
                    szybko po całym kraju.
                  </p>
                  <p>
                    Część magnaterii i szlachty konserwatywnej przyjęła jednak
                    Konstytucję z nieufnością lub wręcz wrogością, widząc w niej
                    zagrożenie dla swoich przywilejów. To właśnie ta grupa,
                    wspierana przez Rosję, stworzyła później konfederację
                    targowicką, która doprowadziła do upadku Konstytucji.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <blockquote className="italic text-xl border-l-4 border-red-700 pl-4 py-2 mb-4">
                "Ostatnia wola i testament gasnącej Ojczyzny"
              </blockquote>
              <p className="text-lg">
                Tak określili Konstytucję 3 Maja jej twórcy, świadomi zagrożeń,
                które czyhały na nową ustawę zasadniczą. Mimo krótkiego okresu
                obowiązywania, Konstytucja stała się symbolem polskich dążeń do
                niepodległości i nowoczesności, a dzień jej uchwalenia - jednym
                z najważniejszych świąt narodowych.
              </p>
            </div>
            <SubpageNavigation
              prevLink={{
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

export default Circumstances;
