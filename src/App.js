// Na początek potrzebujemy zainstalować nasz Bootstrap za pomocą:
// npm i bootstrap
// A następnie importujemy wszystkie wymagane pliki do Bootstrap'a 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// UseState słuzy nam do pobierania wartości od uzytkownika dzięki polom "Input"
import { useState } from "react";

// Łączymy nasz plik CSS do naszej aplikacji,
import './App.css';

// Import listy z innego pliku (Filmy.js)
import { Filmy } from './Filmy';

// Tworzenie statycznej tablicy stringów
const gatunki = ["Komedia", "Horror", "Akcja", "Dramat"];

// Tworzenie tablicy zawierającej rozbudowane dane
const pracownicy = [
  { id: 1, fname: "Jan", lname: "Kowalski", wiek: 23, stanowisko: "Kasjer" },
  { id: 2, fname: "Krystian", lname: "Nowicki", wiek: 27, stanowisko: "Asystent techniczny" },
  { id: 3, fname: "Marianna", lname: "Kruk", wiek: 42, stanowisko: "Dyrektor" }
];

function WyswietlListe(){
  // Metoda "map" słuzy nam do tworzenia elementu dla kazdego obiektu z naszej tablicy.
  // Wewnątrz nawiasu definiujemy sobie nazwę naszego pojedynczego elementu (w tym wypadku "x")
  const lista = gatunki.map(x => (
    <li key={x}>{x}</li>
  ));

  // Na koniec do naszego "return" wrzucamy naszą zmienną "lista" w {}
  return (
    <ol>
      {lista}
    </ol>
  );
}

function Formularz(){
  // Tworzenie zmiennych, które będą przechowywały wartości podawane przez uzytkownika
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [film, setFilm] = useState(1);

  const filmySelect = Filmy.map((film) => (
    <option key={film.id} value={film.id}>{film.tytul}</option>
  ));

  // Tak, mozemy tworzyć równiez funkcje w funkcji. 
  function handleSubmit(){
    for (let i = 0; i < Filmy.length; i++) {
      if(Filmy[i].id == film){
        // Wyświetlanie komunikatu w konsoli przeglądarki
        console.log(`Uzytkownik ${imie} ${nazwisko} musi zapłacić ${Filmy[i].cena} zł za bilet na ${Filmy[i].tytul}`);

        // Wyświetlanie komunikatu w postaci powiadomienia
        alert(`Uzytkownik ${imie} ${nazwisko} musi zapłacić ${Filmy[i].cena} zł za bilet na ${Filmy[i].tytul}`);
      }
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <label htmlFor='imieBox'>Imię:</label>
      <input type='text' className='form-control mb-3' id='imieBox' onChange={(e) => { setImie(e.target.value) }} />
      <label htmlFor='nazwiskoBox'>Nazwisko:</label>
      <input type='text' className='form-control mb-3' id='nazwiskoBox' onChange={(e) => { setNazwisko(e.target.value) }} />
      <label htmlFor='wyborFilmuBox'>Wybierz film:</label>
      <select className='form-control mb-3' id='wyborFilmuBox' onChange={(e) => { setFilm(e.target.value) }}>
        {filmySelect}
      </select>
      <button type='submit' className='btn btn-primary'>Prześlij</button>
    </form>
  );
}

function TabelaPracownikow(){
  const listWork = pracownicy.map((pracownik) => (
    <tr>
      <td>{pracownik.id}</td>
      <td>{pracownik.fname}</td>
      <td>{pracownik.lname}</td>
      <td>{pracownik.wiek}</td>
      <td>{pracownik.stanowisko}</td>
    </tr>
  )); 

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Wiek</th>
          <th>Stanowisko</th>
        </tr>
      </thead>
      <tbody>
        {listWork}
      </tbody>
    </table>
  );
}

function App() {
  const [showTable, changeShowTable] = useState(false);
  
  // Funkcja działająca jako "przełącznik" zmiennej typu logicznego
  function theTable(){
    changeShowTable(!showTable);
  }

  // Funkcja moze zwracać wyłącznie jeden element, czyli musimy np. wrzucić wszystko w jednego Div'a lub w znaczniki JSX.
  return (
    <>
      {/* Jest róźnica między zwykłym HTML i React taka, ze jezeli chcemy dać klasę do naszego obiektu, to zamiast class dajemy className */}
      <div className='container'>
        <h2>Oto dostępne gatunki filmowe w naszym kinie</h2>
        {/* Aby wyświetlić nasz kod HTML z innej funkcji wrzucamy do naszego kodu w postaci znacznika HTML */}
        <WyswietlListe />
        <hr />
        <Formularz />
        <hr />
        {
          // Operator trójargumentowy do wyświetlania widoku względem wartości danej zmiennej
          showTable ? 
          (<TabelaPracownikow />) : 
          ("Tabela jest ukryta")
        }
        <button className='btn btn-primary' onClick={theTable}>{showTable ? ("Ukryj") : ("Pokaz")} tabelę</button>
      </div>
    </>
  );
}

// Eksportuje wskazaną funkcje, aby była widoczna poza tym plikiem.
// Parametr default oznacza, ze jest on domyślną funkcją, więc nie potrzebujemy zapisywać np.:
// import { App } from "App.js"
export default App;