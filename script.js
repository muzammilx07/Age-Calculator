var userDate = document.getElementById("inputDate");
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
    var birthdate = new Date(userDate.value);

    if (isNaN(birthdate.getTime())) {
        alert("Please Enter a Valid DOB");
    } else {
        calculateAge(birthdate);
    }
});

function calculateAge(birthdate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('resultText').textContent = `Your age is: ${age} years`;
}
