// JavaScript program to print Fizz Buzz

// Selecting element by id 
const divBoard = document.getElementById('board');

// Iterating through numbers from 0 to 100
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

    // Number divisible by 3 and 5 will print FizzBuzz, replacing existing number
    if ((i % 3 == 0) && (i % 5 == 0)) {
        newDiv.innerHTML = '<h5 class="text-primary fs-bold">FizzBuzz</h5>';
        newDiv.classList.add('shake');

    // Number divisible by 3 will print Fizz, replacing existing number
    } else if (i % 3 == 0) {
        newDiv.innerHTML = '<h5 class="fs-bold my-text-neon">Fizz</h5>';
        // newDiv.classList.add('');

    // Number divisible by 5 will print Buzz, replacing existing number
    } else if (i % 5 == 0) {
        newDiv.innerHTML = '<h5 class="fs-bold">Buzz</h5>';
        newDiv.classList.add('text-dark');

    // If none of the above conditions are satisfied, it just prints the number
    } else {
        newDiv.innerHTML = '<h5 class="fs-2 my-text-lightg">' + i + '</h5>';
        newDiv.classList.add('rounded-circle', 'blue-gradient', 'spin');
    }
}
