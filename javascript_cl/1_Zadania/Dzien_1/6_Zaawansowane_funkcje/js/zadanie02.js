/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//definicja funkcji jeden
function jeden() {

//definicja zmeinnej
    var zmienna1 = 1;

    //funkcja zagnieżdżona
    function dwa() {
        //logowanie zmiennej1 lokalnej dla funkcji jeden()
        console.log(zmienna1);
        //definicja zmiennej lokalnej zmienna2 dla funkcji dwa()
        var zmienna2 = 3;
    }

    //wywolanie funkcji zagnieżdżonej dwa()
    dwa();

    //logowanie zmienna2 ktora nie istnieje
    //nie istnieje bo jest zagnieżdżona w funkcji wewnętrznej
    // nie istnieje poza tą funkcją
    // console.log(zmienna2)
}

//wywolanie funckjia
jeden()
