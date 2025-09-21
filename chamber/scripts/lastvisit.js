document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("visit-overlay");
    const closeButton = document.getElementById("close-overlay");
    const message = document.getElementById("visit-message");

    function showOverlay(text) {
        message.textContent = text;
        overlay.style.display = "block";
    }

    function hideOverlay() {
        overlay.style.display = "none";
    }

    closeButton.addEventListener("click", hideOverlay);

    let visitCount = localStorage.getItem("visitCount");
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem("visitCount", visitCount);

    const isReturning = localStorage.getItem("returningVisitor");
    if (isReturning) {
        showOverlay(`Back so soon! Awesome! You've visited ${visitCount} times.`);
        localStorage.removeItem("returningVisitor");
    } else {
        showOverlay(`Welcome! Let us know if you have any questions. This is your visit #${visitCount}.`);
    }
});

window.addEventListener("beforeunload", function () {
    localStorage.setItem("returningVisitor", "true");
});