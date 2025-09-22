document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); 

    const positionValue = document.getElementById("position").value;
    const re = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s\-]{7,}$/;

    if (!re.test(positionValue)) {
        document.getElementById("output").textContent = "❌ Organization Title must be at least 7 characters.";
        document.getElementById("output").style.color = "red";
        return;
    }

    const now = new Date();
    document.getElementById("datetime").value = now.toLocaleString();

    const data = {
        name: document.getElementById("name").value,
        last: document.getElementById("last").value,
        position: positionValue,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        organization: document.getElementById("organization").value,
        message: document.getElementById("description").value,
        membership: document.querySelector('input[name="audience"]:checked')?.value || "No seleccionado",
        timestamp: document.getElementById("datetime").value
    };

    for (const key in data) {
        localStorage.setItem(key, data[key]);
    }

    window.location.href = "thankyou.html";
});

window.addEventListener("DOMContentLoaded", () => {
    const campos = {
        "First Name": localStorage.getItem("name"),
        "Last Name": localStorage.getItem("last"),
        "Organization Title": localStorage.getItem("position"),
        "Email": localStorage.getItem("email"),
        "Phone": localStorage.getItem("phone"),
        "Organization": localStorage.getItem("organization"),
        "Message": localStorage.getItem("message"),
        "Membership": localStorage.getItem("membership"),
        "Timestamp": localStorage.getItem("timestamp")
    };

    const container = document.createElement("div");
    container.style.fontFamily = "Arial";
    container.style.padding = "20px";

    const title = document.createElement("h2");
    title.textContent = "🎉 Thank you for your submission!";
    container.appendChild(title);

    for (const [label, value] of Object.entries(campos)) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${label}:</strong> ${value || "Not provided"}`;
        container.appendChild(p);
    }

    document.body.appendChild(container);
});

/*MODALS */

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