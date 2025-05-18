// imageData.js - Plik z danymi o obrazach

// Imports
import sejm_czteroletni_webp from "../assets/images-optimized/chronology/sejm_czteroletni-lg.webp";
import sejm_czteroletni from "../assets/images-optimized/chronology/sejm_czteroletni-lg.jpg";
import czarna_procesja_webp from "../assets/images-optimized/chronology/czarna_procesja-lg.webp";
import czarna_procesja from "../assets/images-optimized/chronology/czarna_procesja-lg.jpg";
import uchwalenie_konstytucji_webp from "../assets/images-optimized/chronology/uchwalenie_konstytucji-lg.webp";
import uchwalenie_konstytucji from "../assets/images-optimized/chronology/uchwalenie_konstytucji-lg.jpg";
import szczesny_potocki_webp from "../assets/images-optimized/chronology/szczesy_potocki-lg.webp";
import szczesny_potocki from "../assets/images-optimized/chronology/szczesy_potocki-lg.jpg";

import poniatowski_webp from "../assets/images-optimized/authors/poniatowski-lg.webp";
import poniatowski from "../assets/images-optimized/authors/poniatowski-lg.jpg";
import kollataj_webp from "../assets/images-optimized/authors/kollataj-lg.webp";
import kollataj from "../assets/images-optimized/authors/kollataj-lg.jpg";
import potocki_webp from "../assets/images-optimized/authors/potocki-lg.webp";
import potocki from "../assets/images-optimized/authors/potocki-lg.jpg";
import malachowski_webp from "../assets/images-optimized/authors/malachowski-lg.webp";
import malachowski from "../assets/images-optimized/authors/malachowski-lg.jpg";
import piattoli_webp from "../assets/images-optimized/authors/piattoli-lg.webp";
import piattoli from "../assets/images-optimized/authors/piattoli-lg.jpg";

import rejtan_webp from "../assets/images-optimized/circumstances/rejtan-lg.webp";
import rejtan from "../assets/images-optimized/circumstances/rejtan-lg.jpg";
import matejko_uchwalenie_webp from "../assets/images-optimized/circumstances/matejko_uchwalenie-lg.webp";
import matejko_uchwalenie from "../assets/images-optimized/circumstances/matejko_uchwalenie-lg.jpg";

import bastille_webp from "../assets/images-optimized/europeancontext/bastille-lg.webp";
import bastille from "../assets/images-optimized/europeancontext/bastille-lg.jpg";
import declaration_webp from "../assets/images-optimized/europeancontext/declaration-lg.webp";
import declaration from "../assets/images-optimized/europeancontext/declaration-lg.jpg";

import chicago_webp from "../assets/images-optimized/nationalidentity/chicago-lg.webp";
import chicago from "../assets/images-optimized/nationalidentity/chicago-lg.jpg";

import wieszanieZdrajcow_webp from "../assets/images-optimized/failures/wieszanie_zdrajcow-lg.webp";
import wieszanieZdrajcow from "../assets/images-optimized/failures/wieszanie_zdrajcow-lg.jpg";

import dozynki_webp from "../assets/images-optimized/citizenrights/dozynki-lg.webp";
import dozynki from "../assets/images-optimized/citizenrights/dozynki-lg.jpg";

import zamek_krolewski_webp from "../assets/images-optimized/trivia/zamek_krolewski-lg.webp";
import zamek_krolewski from "../assets/images-optimized/trivia/zamek_krolewski-lg.jpg";
import flaga_polski_webp from "../assets/images-optimized/trivia/POL_flag-lg.webp";
import flaga_polski from "../assets/images-optimized/trivia/POL_flag-lg.png";

import rekopis_webp from "../assets/images-optimized/documents/rekopis-lg.webp";
import rekopis from "../assets/images-optimized/documents/rekopis-lg.jpg";

const imageData = {
  chronology: {
    sejmCzteroletni: {
      src: { webp: sejm_czteroletni_webp, fallback: sejm_czteroletni },
      alt: "Obrady Sejmu Czteroletniego – obraz Jana Matejki",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jan Matejko",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Konstytucja_3_Maja_Sejm_Czteroletni_Komisja_edukacyjna_Rozbior.jpg",
      },
    },
    czarnaProcesja: {
      src: { webp: czarna_procesja_webp, fallback: czarna_procesja },
      alt: "Czarna Procesja - manifestacja mieszczan w 1789 roku",
      attribution: {
        source: "Wikimedia Commons",
        author: "Stanisław Bagieński",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Stanis%C5%82aw_Bagie%C5%84ski_-_Jan_Dekert_na_czele_Czarnej_Procesji_przed_Zamkiem_w_Warszawie.jpg",
      },
    },
    uchwalenie: {
      src: {
        webp: uchwalenie_konstytucji_webp,
        fallback: uchwalenie_konstytucji,
      },
      alt: "Uchwalenie Konstytucji 3 Maja",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jan Matejko",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Konstytucja_3_Maja.jpg",
      },
    },
    konfederacja: {
      src: { webp: szczesny_potocki_webp, fallback: szczesny_potocki },
      alt: "Stanisław Szczęsny Potocki - jeden z przywódców konfederacji targowickiej",
      attribution: {
        source: "Wikimedia Commons",
        author: "Johann Baptist von Lampi the Elder",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Stanislaw_Szczesny_Potocki_(1753-1805).jpg",
      },
    },
  },
  authors: {
    poniatowski: {
      src: { webp: poniatowski_webp, fallback: poniatowski },
      alt: "Stanisław August Poniatowski - portret",
      attribution: {
        source: "Wikimedia Commons",
        author: "Josef Grass",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Bacciarelli-Poniatowski.jpg",
      },
    },
    kollataj: {
      src: { webp: kollataj_webp, fallback: kollataj },
      alt: "Hugo Kołłątaj - portret",
      attribution: {
        source: "Wikimedia Commons",
        author: "Józef Peszka",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Kollataj_hugo.jpg",
      },
    },
    potocki: {
      src: { webp: potocki_webp, fallback: potocki },
      alt: "Ignacy Potocki - portret",
      attribution: {
        source: "Wikimedia Commons",
        author: "Anna Rajecka",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Ignacy_Potocki.PNG",
      },
    },
    malachowski: {
      src: { webp: malachowski_webp, fallback: malachowski },
      alt: "Stanisław Małachowski - portret",
      attribution: {
        source: "Wikimedia Commons",
        author: "Josef Grassi",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Stanisław_Małachowski.PNG",
      },
    },
    piattoli: {
      src: { webp: piattoli_webp, fallback: piattoli },
      alt: "Scipione Piattoli - portret",
      attribution: {
        source: "Wikimedia Commons",
        author: "Marcello Bacciarelli (1731-1818)",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Scipione_Piattoli.PNG",
      },
    },
  },
  circumstances: {
    rejtan: {
      src: { webp: rejtan_webp, fallback: rejtan },
      alt: "Rejtan - Upadek Polski, obraz Jana Matejki",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jan Matejko",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Rejtan_Upadek_Polski_Matejko.jpg",
      },
    },
    matejkoUchwalenie: {
      src: { webp: matejko_uchwalenie_webp, fallback: matejko_uchwalenie },
      alt: "Uchwalenie Konstytucji 3 Maja, obraz Jana Matejki",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jan Matejko",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Uchwalenie_Konstytucji_3_Maja.jpg",
      },
    },
  },
  europeancontext: {
    bastille: {
      src: { webp: bastille_webp, fallback: bastille },
      alt: "Zdobycie Bastylii - symboliczny początek Rewolucji Francuskiej",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jean-Pierre Houël",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Prise_de_la_Bastille.jpg",
      },
    },
    declaration: {
      src: { webp: declaration_webp, fallback: declaration },
      alt: "Deklaracja Niepodległości Stanów Zjednoczonych - John Trumbull",
      attribution: {
        source: "Wikimedia Commons",
        author: "John Trumbull",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Declaration_of_Independence_(1819),_by_John_Trumbull.jpg",
      },
    },
  },
  nationalidentity: {
    chicago: {
      src: { webp: chicago_webp, fallback: chicago },
      alt: "Parada z okazji Dnia Konstytucji 3 Maja w Chicago",
      attribution: {
        source: "Wikimedia Commons",
        author: "Kkarolina99",
        license: "CC BY-SA 4.0",
        link: "https://commons.wikimedia.org/wiki/File:Polish_Day_Parade_2015.jpg",
      },
    },
  },
  failures: {
    wieszanieZdrajcow: {
      src: { webp: wieszanieZdrajcow_webp, fallback: wieszanieZdrajcow },
      alt: "Wieszanie portretów zdrajców – obraz Jana Piotra Norblina z 1794 roku",
      attribution: {
        source: "Wikimedia Commons",
        author: "Jan Piotr Norblin",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Norblin_Hanging_of_traitors_in_effigie.jpg",
      },
    },
  },
  citizenRights: {
    harvestersRest: {
      src: { webp: dozynki_webp, fallback: dozynki },
      alt: "Odpoczynek żniwiarzy – obraz Wincentego Wodzinowskiego z 1890 roku",
      attribution: {
        source: "Wikimedia Commons",
        author: "Wincenty Wodzinowski",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Wodzinowski_Harvesters_rest.jpg",
      },
    },
  },
  documents: {
    konstytucjaStrona75: {
      src: { webp: rekopis_webp, fallback: rekopis },
      alt: "Strona 75 rękopisu Konstytucji 3 Maja z 1791 roku",
      attribution: {
        source: "Archiwum Główne Akt Dawnych",
        author: "Sejm Czteroletni",
        license: "Domena publiczna",
        link: "https://agad.gov.pl/230K3M/index.html",
      },
    },
  },
  trivia: {
    zamek: {
      src: { webp: zamek_krolewski_webp, fallback: zamek_krolewski },
      alt: "Zamek Królewski w Warszawie, zdjęcie z 2008 roku",
      attribution: {
        source: "Wikimedia Commons",
        author: "Alina Zienowicz (Ala z)",
        license: "CC BY-SA 3.0",
        link: "https://commons.wikimedia.org/wiki/File:POL_Warsaw_Royal_Castle_2008_(3).JPG",
      },
    },
    flaga_polski: {
      src: { webp: flaga_polski_webp, fallback: flaga_polski },
      alt: "Flaga Polski (wersja normatywna)",
      attribution: {
        source: "Wikimedia Commons",
        author: "Mareklug",
        license: "Domena publiczna",
        link: "https://commons.wikimedia.org/wiki/File:Flag_of_Poland_(normative).svg",
      },
    },
  },
};

export default imageData;
