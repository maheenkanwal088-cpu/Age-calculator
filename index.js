const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday first!");
        return;
    }

    const birthdayDate = new Date(birthdayValue);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    resultEl.textContent = `Your age is ${age} ${age === 1 ? "year" : "years"} old.`;
}

btnEl.addEventListener("click", calculateAge);