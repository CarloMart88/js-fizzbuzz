// Ciao ragazzi,
// Esercizio di oggi: FizzBuzz
// nome repo: js-fizzbuzz

// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Fate sempre il file README.md prima di cominciare a lavorare e scomponete il problema in sotto problemi.
// Numero minimo di push: 5

// Buon lavoro e buon divertimento!


//punto 1
// Scrivi un programma che stampi i numeri da 1 a 100,
for (i=0 ; i<=100 ; ++i) {
 //punto 2

  // ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  if(i % 3 === 0 && i % 5 === 0) {
    console.log( `FizzBuzz`)
          //punto 3
        //ma per i multipli di 3 stampi “Fizz”
  } else if(i % 3 === 0) {
    
    console.log(`Fizz`)
      //punto 4 per i multipli di 5 stampi Buzz
  }else if(i % 5 === 0)  {
    console.log(`Buzz`)
  } else {
    console.log(i)
  }
}
