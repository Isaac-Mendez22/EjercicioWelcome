let btnGuardar = document.getElementById(`btnGuardar`);
let txtNombre = document.getElementById(`txtNombre`);

// boton guardar
    btnGuardar.addEventListener("click", function(event){ //boton, ponerle una oreja para un evento
    event.preventDefault(); //para que no se comporte de otra forma
    txtNombre.value = txtNombre.value.trim();


//main.js
if(txtNombre.value.length>=2){
        localStorage.setItem("Nombre", txtNombre.value);
    }
});