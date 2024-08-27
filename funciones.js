
const botonEncriptar = document.querySelector(".boton_encriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto_exclamacion");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".respuesta_contenedor");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");


botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    
    if(texto == ""){
        aviso.style.background = "#0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//desencriptar//


botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "##0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0150EB";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "900";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//copiar//


botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});