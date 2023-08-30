const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const bio = document.getElementById('bio');
const thankyou = document.getElementById('thankyou')

//open Tab For Cash Donate

document.getElementById('kiranB').addEventListener('click', this.openTab);

function openTab(ev) {
    console.log('open Tab');
    let win = window.open('https://southafrica.payu.com/', null, 'popup, width=1200, height=1000, left=205, right=300, top=500');
}

let isValid = true;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    isValid = false;
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    isValid = true
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const bioValue = bio.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if(surnameValue === '') {
        setError(surname, 'Surname is required');
    } else {
        setSuccess(surname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(mobileValue === '') {
        setError(mobile, 'Phone Number is required');
    } else if (mobileValue.length != 10 ) {
        setError(mobile, 'Phone Number must be at least 10 digits')
    } else {
        setSuccess(mobile);
    }

    if(bioValue === '') {
        setError(bio, 'Donation description is required');
         } else {
        setSuccess(bio);
        }
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
    validateInputs();
    if(isValid){
    form.remove();
    thankyou.classList.remove('hide');
    document.querySelector('#merci').innerHTML = 'Thank you, your information has been succssfully submitted!';
    }

});


let nameThk = "";
nameContact.addEventListener('input', (e) =>{
nameThk = e.target.value;
});


