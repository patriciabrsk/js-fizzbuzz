// Scrivi un programma che stampi i numeri da 1 a 100, 

// ma per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi Buzz.

const divBoard = document.getElementById('board');

for (i = 0; i <= 100; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add(
        'box', 
        'd-flex',
        'shadow', 
        'rounded-3', 
        'align-items-center', 
        'text-uppercase',
        'justify-content-center'
        );
    divBoard.append(newDiv);

    // Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        newDiv.innerHTML = '<h6>FizzBuzz</h6>';
        newDiv.classList.add();
    } else if (i % 3 == 0) {
        newDiv.innerHTML = '<h6>Fizz</h6>';
    } else if (i % 5 == 0) {
        newDiv.innerHTML = '<h6>Buzz</h6>';
    } else {
        newDiv.innerHTML = '<h6></h6>';
    }
}

