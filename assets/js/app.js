import {valida} from "./validacion.js";
const inputs=document.querySelectorAll(".input"); //Llama a todos los inputs

//Para cada input estará atento por si ocurre algun evento
inputs.forEach(input=>{
    input.addEventListener('blur',(input)=>{
        valida(input.target);
        
    });
});