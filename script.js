
const containerContact = document.querySelector('#containerContact');
const btnShowContact = document.querySelector('#btnShowContact');
const btnAddContact = document.querySelector('#btnAddContact');
const newName = document.querySelector('#newName');
const newNumber = document.querySelector('#newNumber');
const btnSearchContacts = document.querySelector('#btnSearchContacts');


let rubrica = {

    'contacts' : [
        {'name':'claudio', 'number':'2222222222'},
        {'name':'sara', 'number':'3333333333'},
        {'name':'giulia', 'number':'4444444444'},
    ],

    'showCard' : function (array) {
        array.forEach((singleContact) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add('col-8', 'my-2', 'px-0');
            newDiv.innerHTML = `
                <div class='contactCard px-5'>
                    <p class="text-capitalize">${singleContact.name}</p>
                    <p class="text-capitalize">${singleContact.number}</p>
                    <i class="fa-regular fa-trash-can fs-4 text-danger trash"></i>
                </div>
            `
            containerContact.appendChild(newDiv);
        });

        let trashIcons = document.querySelectorAll('.fa-trash-can');
        console.log(trashIcons);
        trashIcons.forEach((icon, index) => {
            icon.addEventListener('click',() => {
                console.log(this.contacts[index].name);
                this.removeContact(this.contacts[index].name);
                this.showCard(this.contacts);
            })
        })
    },

    'addContact' : function (newName, newNumber) {
        this.contacts.push({'name' : newName, 'number' : newNumber});
        this.showCard(this.contacts);
    },

    'removeContact' : function (removedName) {
        containerContact.innerHTML='';
        let names = this.contacts.map ((contact) => contact.name);
        let index = names.indexOf(removedName);
        this.contacts.splice(index, 1);
    },

    'searchContact' : function (searchedName) {
        let filtered = this.contacts.filter((contact) => searchedName == contact.name);
        console.log(filtered);
        this.showCard(filtered);
        if (filtered <= 0) {
            let avviso = document.createElement('h2');
            avviso.innerHTML = 'Nessun contatto trovato';
            containerContact.appendChild(avviso);
        }
    },

}

// btn vedi/nascondi contatti (si crea la funzionalità di un toggle)
let confirm = false;

btnShowContact.addEventListener('click', () => {
    if (confirm == false) {
        btnShowContact.innerHTML = '<i class="fa-solid fa-eye-slash pe-3"></i>nasconti contatti';
        confirm = true;
        rubrica.showCard(rubrica.contacts);
    } else {
        containerContact.innerHTML='';
        btnShowContact.innerHTML = '<i class="fa-regular fa-eye pe-3"></i>mostra contatti'
        confirm = false;
    }
})


// btn aggiungi contatto
btnAddContact.addEventListener('click', () => {
    if (newName.value != '' && newNumber.value != '') {
        containerContact.innerHTML='';
        rubrica.addContact(newName.value, newNumber.value);
        newName.value = '';
        newNumber.value = '';
        if(confirm == false) {
            btnShowContact.innerHTML = '<i class="fa-regular fa-eye-slash"></i> Nascondi contatti'
            confirm = true;
        }
    } else if (newName.value == '' && newNumber.value != '') {
        alert('inserisci il nome');
    } else if (newName.value != '' && newNumber.value == '') {
        alert('inserisci il numero'); 
    } else {
        alert('inserisci i valori');
    }
});

// btn cerca contatto
btnSearchContacts.addEventListener('click', () => {
    rubrica.searchContact(newName.value)
    newName.value = '';
})