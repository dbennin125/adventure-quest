import makeUser from './makeUser.js';
const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const form = new FormData(myForm);
    
    const user = makeUser(form);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
    
    

});