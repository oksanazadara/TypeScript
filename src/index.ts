

// for(let i = 0; i < 10; i+=2) {
//     if (i%2 === 0) {
        
//     console.log(`Число ${i}`);
//     }    
// }
// console.log(this.document)

const form = document.querySelector("#factorial-form") as HTMLFormElement;
const steplist = document.querySelector("#factorial-steps") as HTMLOListElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    steplist.textContent = "";

    const numberInput = document.querySelector("#number") as HTMLInputElement;

    const number: number = Number(numberInput.value);

    let factorial: number = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
        console.log(factorial);

        const listItem: HTMLLIElement = document.createElement('li');
        listItem.textContent = `Добуток ${factorial}`;
        steplist.appendChild(listItem);
        
    }
    

})

