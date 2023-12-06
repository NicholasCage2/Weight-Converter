let pounds = document.querySelector(".pounds"),
    kilograms = document.querySelector(".kilograms"),
    grams = document.querySelector(".grams"),
    ounces = document.querySelector(".ounces");
    form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e) {
    if (e.target.classList.contains("pounds")) {
        let x = e.target.value;
        kilograms.value = (x / 2.2046).toFixed(2);
        grams.value = (x / 0.0022046).toFixed(2);
        ounces.value = (x * 16).toFixed(2);
    }

    if (e.target.classList.contains("kilograms")) {
        let x = e.target.value;
        kilograms.value = x / 2.2046;
        grams.value = x / 1000;
        ounces.value = x * 35.274
    }

    if (e.target.classList.contains("grams")) {
        let x = e.target.value;
        kilograms.value = x / 1000;
        grams.value = x * 0.0022046;
        ounces.value = x * 0.035274
    }

    if (e.target.classList.contains("ounces")) {
        let x = e.target.value;
        kilograms.value = x / 35.274;
        grams.value = x / 0.035274;
        ounces.value = x * 0.0625;
    }
}
