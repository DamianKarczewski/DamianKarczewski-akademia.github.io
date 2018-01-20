var tablica = ['Adam', 'Ewa', 'Kacper'];

tablica.forEach(function (element, index) {
    console.log("Element z indexem " + index + " ma wartość " + element);
})

var it = 10;
var flaga = true;
while (flaga) {
    console.log(it);
    if (it < 5) {
        flaga = false;
    }
    it--;
}

do {
    console.log('Pętla do...while');
    it--;
} while (it > 0);

var a = 0;
while (a < 10) {
    console.log(++a);
    if (a == 5) {
        break
    }
}
