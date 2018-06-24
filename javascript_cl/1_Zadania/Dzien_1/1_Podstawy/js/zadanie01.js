function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log("To jest log");
    console.log("liczna parzysta: " + (randomNumber % 2 == 0));
    var dzielniki = "dzielniki ";
    for (i = 1; i<randomNumber; i++) {
      if(randomNumber % i == 0 && randomNumber != i) {
        dzielniki += (i + " ");
      }
    }
    console.log(dzielniki);
    console.log(Math.pow(randomNumber, randomNumber % 5));


    //poniżej napisz rozwiązanie zadania
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();
