'use strict'

const form = document.querySelector('form');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('.error-msg');
const email = document.querySelector('.email-input');



form.addEventListener('submit',(s)=>{
    s.preventDefault();
    let emailValue = email.value;
    console.log(emailValue);   

    if (validateEmail(emailValue)) {
        errorIcon.style.display= 'none';
        errorMsg.style.display= 'none';
        form.classList.remove('error');

        
	} else {
        errorIcon.style.display= 'block';
        errorMsg.style.display= 'block';
        form.classList.add('error');
	}
});


function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
