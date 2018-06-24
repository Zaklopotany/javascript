function myEval(a, b, operation) {//definicja funkcji myEval przyjmującej 3 argumenty: a, b, operation
    //Ciało funkcji
    var result = 0;
    if( typeof a === 'number' && typeof b === 'number') {


    switch (operation) {
        case'+':
            result = a + b; break;
        case'-':
            result = a - b;break;
        case'/':
            result = a / b;break;
        case'*':
            result = a * b;break;
        case'%':
            result = a % b;break;
        case'^':
            result = Math.pow(a, b);break;//użycie wbudowanego obiektu obliczającego potęgę b z a
    }
    return result;//zwrócenie wyniku z funkcji
  }
  return "invalid argument";

    //Koniec ciała funkcji
}

//w każdej linijce wywoływwana jest funkcja z przekazaniem odpowiednich argumentów, 2 liczb i operacji matematycznej
console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
console.log("4/10= " + myEval(4,10,'/'));
console.log("5*5 = " + myEval(5,5,'*'));
//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja
