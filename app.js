function app() {
// onclick, hide the empty state(checkbox)
// show the spinner
// 3 seconds later, show the checked icon
// get the button and icons


const checkboxButton = document.querySelector('#shopping-item-checkbox');
console.log(checkboxButton);

const notCompletedIcon = checkboxButton.querySelector('#not-completed-icon');
console.log(notCompletedIcon);

const completedIcon = checkboxButton.querySelector('#completed-icon');
console.log(completedIcon);


const loadingSpinner = checkboxButton.querySelector('#loading-spinner-icon');
console.log(loadingSpinner);

}

app();