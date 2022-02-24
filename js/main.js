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
        'm-2',
        'rounded-3', 
        'align-items-center', 
        'text-uppercase',
        'justify-content-center'
        );
    divBoard.append(newDiv);

    // Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        newDiv.innerHTML = '<h5 class="text-primary fs-bold">FizzBuzz</h5>';
        newDiv.classList.add('shake');

    // per i multipli di 3 stampa “Fizz” al posto del numero
    } else if (i % 3 == 0) {
        newDiv.innerHTML = '<h5 class="fs-bold my-text-neon">Fizz</h5>';
        // newDiv.classList.add('');
    // e per i multipli di 5 stampa Buzz
    } else if (i % 5 == 0) {
        newDiv.innerHTML = '<h5 class="fs-bold">Buzz</h5>';
        newDiv.classList.add('text-dark');
    } else {
        newDiv.innerHTML = '<h5 class="fs-2 my-text-lightg">' + i + '</h5>';
        newDiv.classList.add('rounded-circle', 'blue-gradient', 'spin');
    }
}
