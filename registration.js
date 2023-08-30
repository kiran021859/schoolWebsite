const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const gaurdianName = document.getElementById('gaurdianName');
const gaurdianSurname = document.getElementById('gaurdianSurname');
const streetAddress = document.getElementById('streetAddress');
const city = document.getElementById('city');
const suburb = document.getElementById('suburb');
const zipCode = document.getElementById('zipCode');
const idNumber = document.getElementById('idNumber');
const thankyou = document.getElementById('thankyou')


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
    const gaurdianNameValue = gaurdianName.value.trim();
    const gaurdianSurnameValue = gaurdianSurname.value.trim();
    const streetAddressValue = streetAddress.value.trim();
    const cityValue = city.value.trim();
    const suburbValue = suburb.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const idNumberValue = idNumber.value.trim();

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

    if(gaurdianNameValue === '') {
        setError(gaurdianName, 'Gaurdian Name is required');
    } else {
        setSuccess(gaurdianName);
    }

    if(gaurdianSurnameValue === '') {
        setError(gaurdianSurname, 'Gaurdian Surname is required');
    } else {
        setSuccess(gaurdianSurname);
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
        setError(mobile, 'Phone Number must be at least 10 digits.')
    } else {
        setSuccess(mobile);
    }

    if(streetAddressValue === '') {
        setError(streetAddress, 'Street Address is required');
    } else {
        setSuccess(streetAddress);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if(suburbValue === '') {
        setError(suburb, 'Suburb is required');
    } else {
        setSuccess(suburb);
    }

    if(zipCodeValue === '') {
        setError(zipCode, 'Zip Code is required');
    } else {
        setSuccess(zipCode);
    }

    if(idNumberValue === '') {
        setError(idNumber, 'ID Number is required');
    } else if (idNumberValue.length != 13 ) {
        setError(idNumber, 'Invalid ID Number! Please ensure that your ID Number consists of 13 digits');
    } else {
        setSuccess(idNumber);
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
