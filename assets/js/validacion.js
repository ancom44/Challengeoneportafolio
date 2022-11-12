export function valida(input){
    const tipoDeInput=input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML=""
    }
    else{

        input.parentElement.classList.add("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML=mostrarMensajeDeError(tipoDeInput, input)
        
    }
}

const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError={
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "El formato requerido es de mínimo 10 digitos"
    },
    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "El formato requerido es de mínimo 10 digitos"
    },
}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje=" "
    tipoDeErrores.forEach(error=>{
        if(input.validity[error]){
            mensaje=mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}