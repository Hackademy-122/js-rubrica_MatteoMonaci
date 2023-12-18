
const containerContact = document.querySelector('#containerContact');
const btnShowContact = document.querySelector('#btnShowContact');
const btnAddContact = document.querySelector('#btnAddContact');
const newName = document.querySelector('#newName');
const newNumber = document.querySelector('#newNumber');


let rubrica = {

    'contacts' : [
        {'name':'claudio', 'number':'2222222'},
        {'name':'sara', 'number':'3333333'},
        {'name':'giulia', 'number':'4444444'},
    ],

    'showCard' : function () {
        this.contacts.forEach((singleContact) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add('col-8', 'my-2', 'px-0');
            newDiv.innerHTML = `
                <div class='contactCard'>
                    <p class="text-capitalize">${singleContact.name}</p>
                    <p class="text-capitalize">${singleContact.number}</p>
                </div>
            `
            containerContact.appendChild(newDiv);
        });
    },

    'addContact' : function (newName, newNumber) {
        this.contacts.push({'name' : newName, 'number' : newNumber});
        // if (variabileDiConferma == false) {
        //     rubrica.showCard();
        //     variabileDiConferma = true;
        //     btnShowContact.innerHTML = '<i class="fa-solid fa-eye-slash pe-3"></i>nasconti contatti'
        // }
    }

}


// btn vedi/nascondi contatti (si crea la funzionalità di un toggle)
let variabileDiConferma = false;

btnShowContact.addEventListener('click', () => {
    if (variabileDiConferma == false) {
        rubrica.showCard();
        variabileDiConferma = true;
        btnShowContact.innerHTML = '<i class="fa-solid fa-eye-slash pe-3"></i>nasconti contatti'
    } else {
        containerContact.innerHTML='';
        variabileDiConferma = false;
        btnShowContact.innerHTML = '<i class="fa-regular fa-eye pe-3"></i>mostra contatti'

    }
})

// btn aggiungi contatto
btnAddContact.addEventListener('click', () => {
    if (newName.value != '' && newNumber.value != '') {

        containerContact.innerHTML='';
        rubrica.addContact(newName.value, newNumber.value);
        rubrica.showCard();
        btnShowContact.innerHTML = '<i class="fa-solid fa-eye-slash pe-3"></i>nasconti contatti';
        newName.value = '';
        newNumber.value = '';

    } else if (newName.value == '' && newNumber.value != '') {
        alert('inserisci il nome');
    } else if (newName.value != '' && newNumber.value == '') {
        alert('inserisci il numero'); 
    } else {
        alert('inserisci i valori');
    }
});