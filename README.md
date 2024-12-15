# Podstawy React

// W trakcie opracowania

## Opis

Repozytorium "pomoc-react" zawiera przykładowy projekt wraz z komentarzami, które mogą pomóc w przygotowaniu do egzaminu.
Jest ono w ciągłym rozwoju oraz będą dodawane tutaj kolejne wiadomości/notatki. O czym trzeba pamiętać!

## Klonowanie projektu na swój komputer oraz uruchomienie

Po sklonowaniu projektu nalezy wejść do projektu w Terminalu i aby na waszym komputerze projekt działał odpowiednio nalezy przed uruchomieniem wpisać komendę:
```npm install```
a następnie wystarczy uruchomić projekt za pomocą
```npm start```

## Tworzenie nowego projektu

Projekty są tworzone za pomocą pakietu NPM **create-react-app**, który jest wywoływany za pomocą składni:
```npx create-react-app nazwa_projektu```
z czego musimy pamiętać o tym, ze nazwa projektu musi być zapisana z małych liter.

## Problemy z nowymi projektami (15.12.2024)

Jezeli przy tworzeniu nowego projektu Reacta wystepuje problem (brak waznych pakietów), to w nowym projekcie musicie edytować plik **package.json** i zmienić wersję dla **react** oraz **react-dom** na **"^18.0.0"**, usunąć plik **package-lock.json** oraz folder **node_modules** i zainstalować jeszcze **web-vitals** (*npm install web-vitals --save-dev*) no i na sam koniec zainstalować resztę pakietów za pomocą ```npm install```

## Najwazniejsze

Głównie kod piszecie w katalogu **/src**, a plik podstawowy waszego kodu nazywa się **App.js**. Nie ruszamy pliku **index** jezeli nie wymagają. Jezeli natomiast chcemy wrzucić jakieś obrazy czy inne statyczne pliki typu ikony, plik .txt to wrzucamy do folderu **public**. Co do Bootstrapa, to jedynie co wystarczy zrobić to zainstalować go za pomocą komendy:
```npm install bootstrap```
i następnie zaimportować pliki Bootstrapa z katalogu **bootstrap/dist/css/bootstrap.css** oraz **bootstrap/dist/js/bootstrap.bundle.js**. Mozna to zrobić w pliku **App.js** lub **index.js**, co sprawi ze bedzie dzialalo to w kazdym pliku.

Jezeli pojawią się jakieś pytania proszę pisać na Teams :)
