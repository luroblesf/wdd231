const form = document.querySelector("#form");
const input = document.querySelector("#position");
const output = document.querySelector("#submit");

const re = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s\-]{7,}$/;

function testInfo(positionInput) {
    const ok = re.exec(positionInput.value);

    output.innerHTML = ok
        ? `Correct`(location.href = "thankyou.html")

        : `Title of position invalid`;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(input);
});


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