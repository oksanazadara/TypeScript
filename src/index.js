const chekForm = document.querySelector("#check-form");
const message = document.createElement("p");
chekForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name-buyer");
    const age = document.querySelector("#age-buyer");
    const message = document.querySelector("p");
    const legalAge = 18;
    if (Number(age.value) >= legalAge) {
        message.textContent = `${name.value}, вам дозволено купувати алкоголь`;
    }
    else {
        message.textContent = `${name.value}, вам не дозволено купувати алкоголь`;
    }
});
