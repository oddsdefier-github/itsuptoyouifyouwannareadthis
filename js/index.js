console.log('console logging');

let nameInput = document.getElementById('name-input');
let submitName = document.getElementById('submit');

let acceptedNames = [
    "emmanda", "emmanda hanes"
];

submitName.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(nameInput.value);

    let nameInputVal = nameInput.value.trim().toLowerCase();

    if (acceptedNames.includes(nameInputVal)) {
        console.log('Welcome Emmanda');
        redirectToPage(); // Function to handle redirection
    } else {
        manageErrorState(); // Function to handle errors
    }
});


nameInput.addEventListener('keyup', function (e) {
    e.preventDefault();
    let nameInputVal = nameInput.value.trim();
    nameInputVal = nameInputVal.toLowerCase();

    if (nameInputVal.length > 0) {
        submitName.removeAttribute('disabled');
    } else {
        submitName.setAttribute('disabled', 'disabled');
    }
});


function manageErrorState() {
    alert('Error: Please enter a valid name');
    nameInput.value = '';
    submitName.setAttribute('disabled', 'disabled');
}

function redirectToPage() {
    setTimeout(() => {
        console.log('Redirecting to letter page');
        window.location.href = '/letter/index.html';
    }, 500);
}