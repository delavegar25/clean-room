function app() {
// onclick, hide the empty state(checkbox)
// show the spinner
// 3 seconds later, show the checked icon
// get the button and all the icons

const HIDDEN = 'hidden';
const MARKED_AS_DONE_CLASS = 'checkbox-done';

const checkboxButton = document.querySelector('#shopping-item-checkbox');
console.log(checkboxButton);

const notCompletedIcon = checkboxButton.querySelector('#not-completed-icon');
console.log(notCompletedIcon);

const completedIcon = checkboxButton.querySelector('#completed-icon');
console.log(completedIcon);


const loadingSpinner = checkboxButton.querySelector('#loading-spinner-icon');
console.log(loadingSpinner);


const checkboxButtonStatus = document.querySelector('#shopping-item-checkbox-status');

function handleMarkAsDone() {
    notCompletedIcon.classList.add(HIDDEN);

    loadingSpinner.classList.remove(HIDDEN);

    checkboxButton.arialabel = 'Loading. Please wait...';

    setTimeout(() => {
        loadingSpinner.classList.add(HIDDEN);
        completedIcon.classList.remove(HIDDEN);
        checkboxButton.classList.add(MARKED_AS_DONE_CLASS);

        checkboxButton.arialabel = checkboxButton.arialabel.replace('as done', 'as not done');

        checkboxButton.arialabel = 'Successfully marked clean your room as done...'
    }, 3000);
}


function handleMarkAsNotDone() {
    completedIcon.classList.add(HIDDEN);
    loadingSpinner.classList.remove(HIDDEN);


    setTimeout(() =>{
        loadingSpinner.classList.add(HIDDEN);

        notCompletedIcon.classList.remove(HIDDEN);

        checkboxButton.arialabel = checkboxButton.arialabel.replace(
            'as not done',
            'as done'
        );

        checkboxButtonStatus.arialabel = 'Successfully marked clean your room as not done.'
    }, 3000);

}



function handleMarkDoneOrNotDone() {
    const markedAsDone = checkboxButton.classList.contains(MARKED_AS_DONE_CLASS);


    if(markedAsDone){
        handleMarkAsNotDone();
    }
    else {
        handleMarkAsDone();
    }
}


checkboxButton.addEventListener('click', handleMarkDoneOrNotDone);

}

app();