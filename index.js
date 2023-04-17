const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const outputMessage = document.querySelector("#outputMessage");
const btn = document.querySelector("#confirm-btn");

const passwordSpan1 = document.querySelector("#passwordSpan1");
const passwordSpan2 = document.querySelector("#passwordSpan2");

const minLength = document.querySelector("#length");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const special = document.querySelector("#special");

//--- making all the text initially red
minLength.style.color = "red";
upper.style.color = "red";
lower.style.color = "red";
number.style.color = "red";
special.style.color = "red";

const matchInput = (element) => {
    let enteredValue = element.value;
    console.log("enteredValue: ", enteredValue)

    if (enteredValue?.match(/[a-z]/g)) {
        lower.style.color = "green";
        lower.children.item(0).classList.remove("fa-times-circle")
        lower.children.item(0).classList.add("fa-check-circle")
    } else {
        lower.style.color = "red";
        lower.children.item(0).classList.remove("fa-check-circle")
        lower.children.item(0).classList.add("fa-times-circle")
    }

    if (enteredValue?.match(/[A-Z]/g)) {
        upper.style.color = "green";
        upper.children.item(0).classList.remove("fa-times-circle")
        upper.children.item(0).classList.add("fa-check-circle")
    } else {
        upper.style.color = "red";
        upper.children.item(0).classList.remove("fa-check-circle")
        upper.children.item(0).classList.add("fa-times-circle")
    }

    if (enteredValue?.match(/[0-9]/g)) {
        number.style.color = "green";
        number.children.item(0).classList.remove("fa-times-circle")
        number.children.item(0).classList.add("fa-check-circle")
    } else {
        number.style.color = "red";
        number.children.item(0).classList.remove("fa-check-circle")
        number.children.item(0).classList.add("fa-times-circle")
    }

    if (enteredValue?.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g)) {
        special.style.color = "green";
        special.children.item(0).classList.remove("fa-times-circle")
        special.children.item(0).classList.add("fa-check-circle")
    } else {
        special.style.color = "red";
        special.children.item(0).classList.remove("fa-check-circle")
        special.children.item(0).classList.add("fa-times-circle")
    }

    if (enteredValue?.length >= 8) {
        minLength.style.color = "green";
        minLength.children.item(0).classList.remove("fa-times-circle")
        minLength.children.item(0).classList.add("fa-check-circle")
    } else {
        minLength.style.color = "red";
        minLength.children.item(0).classList.remove("fa-check-circle")
        minLength.children.item(0).classList.add("fa-times-circle")
    }

    if (enteredValue?.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/)) {
        btn.disabled = false;
    } else if (!btn.disabled) {
        btn.disabled = true
    }
}

btn.addEventListener("click", () => {
    if(password2.value == ""){
        alert("Error: Please enter confirm password")
        passwordSpan2.innerText = "Error: Please enter confirm password";
    } else if (password1.value != password2.value) {
        alert("Error: Password mismatch\n" +
            "You Entered: \nNew password: " + password1.value +
            "\nConfirm password: " + password2.value)
        passwordSpan1.innerText = "Error: Password mismatch";
        passwordSpan2.innerText = "Error: Password mismatch";
        outputMessage.style.color = "red";
        outputMessage.innerText = "Password mismatch";
    } else {
        alert("Password reset successful\n" +
            "You Entered: \nNew password: " + password1.value +
            "\nConfirm password: " + password2.value)
        outputMessage.style.color = "green";
        outputMessage.innerText = "Password reset successful";
    }
})

password1.addEventListener("input", () => {
    matchInput(password1);
})

//Listers for removing the messages
password1.addEventListener("focus", () => {
    passwordSpan1.innerText = "";
    passwordSpan2.innerText = "";
    outputMessage.innerText = "";
})

password2.addEventListener("focus", () => {
    passwordSpan1.innerText = "";
    passwordSpan2.innerText = "";
    outputMessage.innerText = "";
})
