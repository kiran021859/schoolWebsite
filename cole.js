const form = document.getElementById('formContact');
const nameContact = document.getElementById('name');
const emailContact = document.getElementById('email');
const messageContact = document.getElementById('message');
const phoneContact = document.getElementById('phone');
const headerContact = document.querySelector('.headerContact')
const thankYou = document.querySelector('.Thankyou');

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


let isValid = true;

function checkInputs(){

  //get the values from the inputs or textarea

  const nameValue = nameContact.value.trim();
  const emailValue = emailContact.value.trim();
  const phoneValue = phoneContact.value.trim();
  const messageValue = messageContact.value.trim();

  if (nameValue === ''){
    //show error
    //add error class
    setErrorFor(nameContact, 'Name cannot be blank');
  } else{
    //add success class
    setSuccesFor(nameContact);
  }

  if (emailValue === ''){
    //show error
    //add error class
    setErrorFor(emailContact, 'Email cannot be blank');
  } else if(!isValidEmail(emailValue)){
    setErrorFor(emailContact, 'Please add a valid email adress');
  } else{
    setSuccesFor(emailContact);
  }

  if (phoneValue === ''){
    //show error
    //add error class
    setErrorFor(phoneContact, 'Phone Number cannot be blank');
  } else{
    //add success class
    setSuccesFor(phoneContact);
  }
}

function setErrorFor(input, message){
  isValid=false;
  const formControl = input.parentElement; 
  const errorContactMessage = formControl.querySelector('#Error');

  //add error message inside the span
  errorContactMessage.innerText = message;

  //add error class
  formControl.className = 'form-control error';

}

function setSuccesFor(input){
  isValid=true;
  const formControl = input.parentElement; 
  const errorContactMessage = formControl.querySelector('#Error');
  //remove message inside the span
  errorContactMessage.innerText='';

  //add success class
  formControl.className = 'form-control success';

}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  checkInputs();
  if(isValid){
    form.remove();
    headerContact.classList.add('hide');
    thankYou.classList.remove('hide');
    document.querySelector('#merci').innerHTML = `<h3>Dear ${nameThk}, thank you for reaching out ! </h3>`;
    
  }

});

let nameThk = "";
nameContact.addEventListener('input', (e) =>{
  nameThk = e.target.value;
});

