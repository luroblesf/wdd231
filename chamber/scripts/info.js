window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("displayName").textContent = localStorage.getItem("name");
    document.getElementById("displayLast").textContent = localStorage.getItem("last");
    document.getElementById("displayPosition").textContent = localStorage.getItem("position");
    document.getElementById("displayEmail").textContent = localStorage.getItem("email");
    document.getElementById("displayPhone").textContent = localStorage.getItem("phone");
    document.getElementById("displayOrganization").textContent = localStorage.getItem("organization");
    document.getElementById("displayMessage").textContent = localStorage.getItem("message");
    document.getElementById("displayMembership").textContent = localStorage.getItem("membership");
    document.getElementById("displayTimestamp").textContent = localStorage.getItem("timestamp");
});