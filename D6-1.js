/* ESERCIZIO 1

Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const concatString = (str1, str2) => console.log((str1.slice(0, 2) + str2.slice(-3)).toUpperCase());
const strings1 = "hello";
const strings2 = "words";
concatString(strings1, strings2);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const arrayGenerator = () => {
  const arrayRandom1 = [];
  for (let i = 0; i < 10; i++) {
    const valueCasual = Math.floor(Math.random() * 101);
    arrayRandom1.push(valueCasual);
  }
  return arrayRandom1;
};
const arrayRandom = arrayGenerator();
console.log(arrayRandom);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
const evenNumberFinder = (equalizer) => equalizer.filter((number) => number % 2 === 0);
const evenNumber = evenNumberFinder(arrayRandom);
console.log(evenNumber);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const sumOfNumber2 = (summ) => {
  let add = 0;
  summ.forEach((number1) => {
    add += number1;
  });
  return add;
};
const addNumbers = sumOfNumber2(arrayRandom);
console.log(addNumbers);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const sumOfNumber = (sum) => sum.reduce((acc, numb) => acc + numb);
const simplyNumber = [1, 2, 3, 4, 5];
const addedNumbers = sumOfNumber(simplyNumber);
console.log(addedNumbers);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const listOnly = (nam, n) => nam.map((namer) => namer + n);
const n = 1;
const increasedNumbers = listOnly(arrayRandom, n);
console.log(increasedNumbers);
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const singleWord = (wordList2) => wordList2.map((word) => word.length);
const wordList = ["auto", "casa", "lavoro", "moglie", "figli"];
const lenghtword = singleWord(wordList);
console.log(lenghtword);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const listOfOdd = () => {
  const valueodd = [];
  for (let i = 1; i <= 99; i += 2) {
    valueodd.push(i);
  }
  return valueodd;
};
const valueodd2 = listOfOdd();
console.log(valueodd2);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const trovaFilmPiuVecchio = (arrayDiFilm) => {
  let filmPiuVecchio = null;

  arrayDiFilm.forEach((film) => {
    if (!filmPiuVecchio || parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
};

const filmPiuVecchio2 = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio2);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const contaFilm = (arrayDiFilm) => {
  return arrayDiFilm.length;
};

const numeroDiFilm = contaFilm(movies);
console.log("Il numero di film è:", numeroDiFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const moviesTitle = (arraydifilm) => arraydifilm.map((film) => film.Title);
const titleOfMovie = moviesTitle(movies);
console.log(titleOfMovie);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const ottieniFilmDelMillennioCorrente = (arrayDiFilm) => {
  const annoCorrente = new Date().getFullYear();
  return arrayDiFilm.filter((film) => parseInt(film.Year) >= 2000 && parseInt(film.Year) <= annoCorrente);
};
const filmMillennioCorrente = ottieniFilmDelMillennioCorrente(movies);
console.log("Film del millennio corrente:", filmMillennioCorrente);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const calcolaSommaAnniDiProduzione = (arrayDiFilm) => {
  const sommaAnni = arrayDiFilm.reduce((acc, film) => acc + parseInt(film.Year), 0);
  return sommaAnni;
};

const sommaAnniDiProduzione = calcolaSommaAnniDiProduzione(movies);
console.log("Somma degli anni di produzione:", sommaAnniDiProduzione);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const trovaFilmPerIMDbID = (arrayDiFilm, imdbID) => {
  return arrayDiFilm.find((film) => film.imdbID === imdbID);
};

const imdbIDDaCercare = "tt0167260";
const filmTrovato = trovaFilmPerIMDbID(movies, imdbIDDaCercare);

if (filmTrovato) {
  console.log("Film trovato:", filmTrovato);
} else {
  console.log("Film non trovato");
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const trovaIndicePrimoFilmPerAnno = (arrayDiFilm, annoDaCercare) => {
  return arrayDiFilm.findIndex((film) => parseInt(film.Year) === annoDaCercare);
};

const annoDaCercare = 2002;
const indiceDelPrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoDaCercare);

if (indiceDelPrimoFilm) {
  console.log(`Indice del primo film uscito nel ${annoDaCercare}:`, indiceDelPrimoFilm);
} else {
  console.log(`Nessun film trovato per l'anno ${annoDaCercare}`);
}
