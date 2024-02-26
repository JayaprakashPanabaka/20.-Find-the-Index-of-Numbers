let numbers = [17, 31, 77, 20, 63];

let inputNumber = document.getElementById("number");
let numberIndex = document.getElementById("indexOfNum");

function onFindIndex() {
    let number = parseInt(inputNumber.value);

    if(inputNumber.value === '') {
        alert("Enter valid Number");
        return;
    }

    let itemIndex = numbers.findIndex((item) => {
        if(item === number) {
            return true;
        }else {
            return false;
        }
    })

    numberIndex.textContent = itemIndex;
}












