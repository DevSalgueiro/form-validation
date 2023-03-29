const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Preencha o seu nome, por favor");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencha o seu e-mail, por favor");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa de no mínimo 8 dígitos");
        return;
    }


    if(jobSelect.value === ""){
        alert("Selecione a sua situação, por favor");
        return;
    }

    if(messageTextarea.value === ""){
        alert("Escreva uma mensagem, por favor");
        return;
    }
    

    form.submit();


});


function isEmailValid (email){

    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
}


function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        return true
    }

    return false
}
