const billInput = document.getElementById("bill-text-input");
const peopleInput = document.getElementById("people-text-input");
const tipButtons = document.querySelectorAll(".tip-button");
const customInput = document.querySelector(".custom-input");
const resetButton = document.querySelector(".reset-button");
const totalTip = document.getElementById("tip-per-person");
const totalPerson = document.getElementById("total-per-person");
const inputError = document.querySelector(".error");


// RESET BUTTON 
resetButton.onclick = function () {
    billInput.value = 0;
    customInput.value = 0;
    peopleInput.value = 0;
    totalTip.innerHTML = "$0.00";
    totalPerson.innerHTML = "$0.00";
    // Untoggles tip buttons
    tipButtons.forEach((tip) => {
        tip.classList.remove("tip-button-toggle");
    });
    
}

// GET NUMBER OF PEOPLE INPUT
function getNumberofPeople() {
    let numberPerson = peopleInput.value;
    return numberPerson;
}

// GET BILL INPUT
function getBillTotal() {
    let billTotal = +billInput.value;
    return billTotal;
}

// TOGGLE TIP BUTTONS
function toggledButton(index) {
    tipButtons.forEach((tip) => {
        tip.classList.remove("tip-button-toggle");
    });

    if (index < 5) {
        tipButtons[index].classList.add("tip-button-toggle");
    }
}


// GET TIP BUTTON VALUES AND FORMAT THEM
let tipValue;
let formattedTip = 0;
tipButtons.forEach((tip, index) => {
    tip.addEventListener("click", () => {
        toggledButton(index);
        tipValue = tip.getAttribute("data-tip");
        formattedTip = +tipValue / 100;
    });
});


// CALCULATE AFTER BILL INPUT CHANGE
billInput.addEventListener("change", () => {
    let numberPerson = getNumberofPeople();
    let billTotal = getBillTotal();
    
    if (numberPerson > 0) {
        let billValue = (+billInput.value * +formattedTip) / numberPerson;

        totalTip.innerHTML = `$${billValue.toFixed(2)}`;
        totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
    }
    if (numberPerson == 0) {
        inputError.classList.remove("hide");
        peopleInput.style.outline = "2px solid red";
    } else {
        inputError.classList.add("hide");
        peopleInput.style.outline = "none";
    }
});


// CALCULATE AND OUTPUT AFTER TIP BUTTON CLICK
tipButtons.forEach((tip) => {
    tip.addEventListener("click", () => {
        let numberPerson = getNumberofPeople();
        let billTotal = getBillTotal();

        if (numberPerson > 0) {
            let billValue = (+billInput.value * +formattedTip) / numberPerson;
            totalTip.innerHTML = `$${billValue.toFixed(2)}`;
            totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
        }
        if (numberPerson === 0) {
            let billValue = +billInput.value * +formattedTip;
            totalTip.innerHTML = `$${billValue.toFixed(2)}`;
            totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
        }
    });
});


// CALCULATE AND OUTPUT AFTER CUSTOM INPUT CHANGE
customInput.addEventListener("change", () => {
    let customInputNumber = +customInput.value / 100;
    let numberPerson = getNumberofPeople();
    let billTotal = getBillTotal();

    if (numberPerson > 0) {
        tipButtons.forEach((tip) => {
            tip.classList.remove("tip-button-toggle");
        });
        let billValue = (+billInput.value * +customInputNumber) / numberPerson;
        totalTip.innerHTML = `$${billValue.toFixed(2)}`;
        totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
    }
    if (numberPerson === 0) {
        let billValue = +billInput.value * +formattedTip;
        totalTip.innerHTML = `$${billValue.toFixed(2)}`;
        totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
        
    }
});


// CALCULATE AFTER PEOPLE INPUT CHANGE
peopleInput.addEventListener("change", () => {
    let numberPerson = +peopleInput.value;
    let billTotal = getBillTotal();

    if (numberPerson > 0) {
        let billValue = (+billInput.value * +formattedTip) / numberPerson;
        totalTip.innerHTML = `$${billValue.toFixed(2)}`;
        totalPerson.innerHTML = `$${(billTotal / numberPerson + billValue).toFixed(2)}`;
    }
    if (numberPerson == 0) {
        inputError.classList.remove("hide");
        peopleInput.style.outline = "2px solid red";
    } else {
        inputError.classList.add("hide");
        peopleInput.style.outline = "none";
    }
});