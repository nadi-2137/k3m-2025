# Instrukcja implementacji obrazów w projekcie Konstytucja 3 Maja

## Struktura folderów

Aby poprawnie zaimplementować obrazy w projekcie, należy utworzyć następującą strukturę folderów w katalogu `src/`:

```
src/
├── assets/
│   └── images/
│       ├── chronology/
│       │   ├── sejm_czteroletni.jpg
│       │   ├── czarna_procesja.jpg
│       │   ├── uchwalenie_konstytucji.jpg
│       │   └── szczesy_potocki.jpg
│       ├── authors/
│       │   ├── poniatowski.jpg
│       │   ├── kollataj.jpg
│       │   ├── potocki.jpg
│       │   ├── malachowski.jpg
│       │   └── piattoli.jpg
│       └── circumstances/
│           ├── rejtan.jpg
│           └── matejko_uchwalenie.jpg
```

## Pobieranie obrazów

Wszystkie obrazy należy pobrać z Wikipedii lub innych źródeł z wolną licencją. Poniżej znajdują się szczegółowe informacje o źródłach obrazów:

### Chronologia

1. **sejm_czteroletni.jpg** - "Inauguracyjne posiedzenie Sejmu Czteroletniego" (Jan Piotr Norblin)
   - Źródło: https://commons.wikimedia.org/wiki/File:Inauguracyjne_posiedzenie_Sejmu_Czteroletniego.jpg

2. **czarna_procesja.jpg** - "Czarna Procesja" (Jan Piotr Norblin)
   - Źródło: https://commons.wikimedia.org/wiki/File:Black_Procession.jpg

3. **uchwalenie_konstytucji.jpg** - "Konstytucja 3 Maja" (Jan Matejko)
   - Źródło: https://commons.wikimedia.org/wiki/File:Konstytucja_3_Maja.jpg

4. **szczesy_potocki.jpg** - "Stanisław Szczęsny Potocki" (Anton Graff)
   - Źródło: https://commons.wikimedia.org/wiki/File:Stanisław_Szczęsny_Potocki.PNG

### Autorzy

1. **poniatowski.jpg** - "Stanisław August Poniatowski" (Marcello Bacciarelli)
   - Źródło: https://commons.wikimedia.org/wiki/File:Bacciarelli-Poniatowski.jpg

2. **kollataj.jpg** - "Hugo Kołłątaj" (autor nieznany)
   - Źródło: https://commons.wikimedia.org/wiki/File:Hugo_Kołłątaj.PNG

3. **potocki.jpg** - "Ignacy Potocki" (autor nieznany)
   - Źródło: https://commons.wikimedia.org/wiki/File:Ignacy_Potocki.PNG

4. **malachowski.jpg** - "Stanisław Małachowski" (autor nieznany)
   - Źródło: https://commons.wikimedia.org/wiki/File:Stanisław_Małachowski.PNG

5. **piattoli.jpg** - "Scipione Piattoli" (autor nieznany)
   - Źródło: https://commons.wikimedia.org/wiki/File:Scipione_Piattoli.jpg

### Okoliczności

1. **rejtan.jpg** - "Rejtan - Upadek Polski" (Jan Matejko)
   - Źródło: https://commons.wikimedia.org/wiki/File:Rejtan_Matejko.jpg

2. **matejko_uchwalenie.jpg** - "Uchwalenie Konstytucji 3 Maja" (Jan Matejko)
   - Źródło: https://commons.wikimedia.org/wiki/File:Uchwalenie_Konstytucji_3_Maja.jpg

## Aktualizacja pliku imageData.js

Po pobraniu wszystkich obrazów, należy upewnić się, że ścieżki w pliku `imageData.js` są poprawne. Poniżej przykład jak powinny wyglądać ścieżki:

```javascript
// Przykładowa ścieżka
chronology: {
  sejmCzteroletni: {
    src: '/assets/images/chronology/sejm_czteroletni.jpg',
    alt: 'Inauguracyjne posiedzenie Sejmu Czteroletniego',
    attribution: {
      source: 'Wikimedia Commons',
      author: 'Jan Piotr Norblin',
      license: 'Domena publiczna',
      link: 'https://commons.wikimedia.org/wiki/File:Inauguracyjne_posiedzenie_Sejmu_Czteroletniego.jpg'
    }
  },
  // itd.
}
```

## Import obrazów w index.js

Aby upewnić się, że wszystkie obrazy są dołączone do finalnej wersji aplikacji, należy dodać ich import w pliku `index.js`. Przykład:

```javascript
// Importowanie obrazów
import './assets/images/chronology/sejm_czteroletni.jpg';
import './assets/images/chronology/czarna_procesja.jpg';
// itd.
```

## Implementacja komponentu ImageWithAttribution

Komponent `ImageWithAttribution` jest używany do wyświetlania obrazów z informacją o ich źródle. Należy upewnić się, że jest poprawnie zaimplementowany i używany wszędzie, gdzie wyświetlane są obrazy.

## Sprawdzenie wszystkich komponentów

Należy sprawdzić następujące komponenty, czy poprawnie korzystają z komponentu `ImageWithAttribution`:

1. `Timeline.js` - sprawdzić czy obrazy w osi czasu są wyświetlane z informacją o źródle
2. `AuthorCard.js` - sprawdzić czy zdjęcia autorów mają przypisane informacje o źródle
3. `Circumstances.js` - sprawdzić czy obrazy Jana Matejki są wyświetlane z informacją o źródle

## Testowanie

Po implementacji wszystkich obrazów, należy przetestować stronę pod kątem:

1. Poprawnego wyświetlania obrazów
2. Działania przycisków informacyjnych pokazujących źródło
3. Poprawności wyświetlanych informacji o źródle
4. Działania animacji przy najechaniu na obrazy

## Uwagi końcowe

Wszystkie użyte obrazy pochodzą z domeny publicznej, jednak należy pamiętać o prawidłowym przypisaniu autorstwa. Komponent `ImageWithAttribution` zapewnia zgodność z wymogami licencji Creative Commons i domeny publicznej, wyświetlając informacje o autorze i źródle.
