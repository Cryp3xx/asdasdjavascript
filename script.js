function mainfunction() {
    const inputcheck = document.getElementById("ageInput").value;
    if (inputcheck >= 18) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}

function checkYear() {
    const yearSelect = document.getElementById("yearInput");
    if (yearSelect >= 2005) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}