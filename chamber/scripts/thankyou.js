const form = document.querySelector("#form");
const positionInput = document.querySelector("#position");
const timestampInput = document.querySelector("#datetime");
const output = document.querySelector("#output");
const submitButton = document.querySelector("#submit");

const re = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s\-]{7,}$/;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const isValid = re.test(positionInput.value);

    if (isValid) {
        const now = new Date();
        timestampInput.value = now.toLocaleString();

        form.submit();
    } else {
        output.textContent = "❌ Organization Title must be at least 7 characters.";
        output.style.color = "red";
    }
});

function submitForm() {
    let namec = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let product = document.getElementById('product').value;
    let cakeEvent = document.querySelector('input[name="cakeEvent"]:checked').value;

    localStorage.setItem('name', namec);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('product', product);
    localStorage.setItem('cakeEvent', cakeEvent);


    window.location.href = 'thankyou.html';
}

let namec = localStorage.getItem('name');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let cakeEvent = localStorage.getItem('cakeEvent');
let message = localStorage.getItem('message');

document.getElementById('displayName').textContent = namec;
document.getElementById('displayPhone').textContent = phone;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displayProduct').textContent = products.find(p => p.id === localStorage.getItem('product')).name;
document.getElementById('displayCakeEvent').textContent = cakeEvent;
document.getElementById('displayMessage').textContent = message;









/* TimeStamp */

var now = new Date();
var datetime = now.toLocaleString();

document.getElementById("datetime").innerHTML = datetime




/*MODALS */

const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxtext = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxtext.innerHTML = 'Prices No fee<br><br>BENEFITS<br>• One annual training<br> • Advertising on social networks<br> • Non discount on tickets to events.'
});
openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxtext.innerHTML = 'Prices $100<br><br>BENEFITS<br>•Two annual training<br>• Advertising on social networks<br>• 5% discount on tickets to events.'
});
openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxtext.innerHTML = 'Prices $200<br><br>BENEFITS<br>• No fee<br>• Three annual training<br> • Advertising on social networks<br> • 10% discount on tickets to events.'
});
openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxtext.innerHTML = 'Prices $300<br><br>BENEFITS• No fee<br>• Ilimited trainings<br> • Advertising on social networks and chamber of commerce events<br> • 20% discount on tickets to events.'
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

