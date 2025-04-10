
let encabezado1 = document.getElementsByTagName ("h1").item(0);
let Nombre = localStorage.getItem(`Nombre`); //se llamo al mismo del inicio de let
let btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function(event){
    event.preventDefault();
        //welcome.html
if(localStorage.getItem("Nombre") != null){ //se cambio en nombre a "Nombre"
    encabezado1.innerText = `Hola, ${Nombre} bienvenido de nuevo`
    
}else{ //funciona else
    encabezado1.innerText = "ingresa tu nombre en index por favor";
}

    console.log("se termino de cargar la pagina");
}); //load



//boton eliminar funciona
btnEliminar.addEventListener("click", function (event){
    event.preventDefault();
    localStorage.removeItem("Nombre"); // elimina la entrada de nombre que pusimos en local storage
    window.location.href = "./welcome.html"; // recargar la pagina al momento para que se note al momento los cambios
})