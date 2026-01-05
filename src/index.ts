const chekForm = document.querySelector("#check-form") as HTMLFormElement;
const message =document.createElement("p") as HTMLParagraphElement;

chekForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const  name= document.querySelector("#name-buyer") as HTMLInputElement;
    const  age = document.querySelector("#age-buyer") as HTMLInputElement;
    
    const message = document.querySelector("p") as HTMLParagraphElement;

    const legalAge: number = 18;
   

    if (Number(age.value) >= legalAge) {

        message.textContent = `${name.value}, вам дозволено купувати алкоголь`;

    }

    else {
        message.textContent = `${name.value}, вам не дозволено купувати алкоголь`;
    }
    
})