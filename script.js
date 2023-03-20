const claimBtn = document.querySelector("#claim-btn")
const mailContainer = document.querySelector("#mail")
const mailInput = document.querySelector("#email")
const textInputs = document.querySelectorAll(".text-input")
const allInputs = document.querySelectorAll(".input")

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

claimBtn.addEventListener("click", () => {
    if (validateEmail(mailInput.value)) {
        mailContainer.classList.remove("error")
    } else {
        mailContainer.classList.add("error")
    }
    textInputs.forEach(element => {
        if (element.value === "") {
            element.parentElement.classList.add("empty")
        } else {
            element.parentElement.classList.remove("empty")
        }
    });
})

allInputs.forEach(element => {
    element.addEventListener("keypress", () => {
        if (event.key === "Enter") {
            if (validateEmail(mailInput.value)) {
                mailContainer.classList.remove("error")
            } else {
                mailContainer.classList.add("error")
            }
            textInputs.forEach(element => {
                if (element.value === "") {
                    element.parentElement.classList.add("empty")
                } else {
                    element.parentElement.classList.remove("empty")
                }
            });
        }
    })
});