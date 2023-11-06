import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onInputdataForm, 500));
form.addEventListener('submit', onFormSubmit);

//let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
//const { email, message } = form.elements;
let dataForm = {};

reloadPage();

function onInputdataForm(event) {
//let dataForm = localStorage.getItem(LOCAL_KEY);
//dataForm = dataForm ? JSON.parse(dataForm) : {};
dataForm[event.target.name] = event.target.value.trim();
localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
event.preventDefault();

//const { email, message } = event.currentTarget.elements;
//if (!email.value || !message.value) {
//   return alert('Заповніть, будь-ласка, всі поля.');
//} else {
    localStorage.removeItem(LOCAL_KEY);
 //   console.log({ email: email.value, message: message.value });
//}
console.log(dataForm);
dataForm = {};

event.currentTarget.reset();
}

//function reloadPage() {
//if (dataForm) {
//    email.value = dataForm.email || '';
//    message.value = dataForm.message || '';
//}
//}
const reloadPage = () => {
    try {
const data = localStorage.getItem(LOCAL_KEY);
if (!data) return;
dataForm = JSON.parse(data);
Object.entries(dataForm).forEach(([key, val]) => {
    form.elements[key].value = val;
});
    } catch (error) {
        console.log(error.massage);
    }
};

