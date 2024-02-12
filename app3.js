const boton= document.getElementById('miBoton');
const miFondo = document.getElementById('fondo');
const miFondo2 = document.getElementById('fondo2');
const miFondo3 = document.getElementById('fondo3');
const miFondo4 = document.getElementById('fondo4');
const miFondo5 = document.getElementById('fondo5');
const miFondo6 = document.getElementById('fondo6');




let arrayColores = ['green','blue','red', 'grey', 'yellow', 'orange'];


arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo.add(opcion);
});
arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo2.add(opcion);
});
arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo3.add(opcion);
});
arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo4.add(opcion);
});
arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo5.add(opcion);
});
arrayColores.forEach(function(color){
    const opcion = document.createElement("option");
    opcion.value= color;
    opcion.text = color.charAt(0).toUpperCase() + color.slice(1);
    miFondo6.add(opcion);
});





/* guardar los colores */

boton.addEventListener("click", function(){

    const colorSeleccionado = miFondo.value;
    const colorSeleccionado2 = miFondo2.value;
    const colorSeleccionado3 = miFondo3.value;
    const colorSeleccionado4 = miFondo4.value;
    const colorSeleccionado5 = miFondo5.value;
    const colorSeleccionado6 = miFondo6.value;


    miFondo.style.backgroundColor = colorSeleccionado ;
    miFondo2.style.backgroundColor = colorSeleccionado2 ;
    miFondo3.style.backgroundColor = colorSeleccionado3 ;
    miFondo4.style.backgroundColor = colorSeleccionado4 ;
    miFondo5.style.backgroundColor = colorSeleccionado5 ;
    miFondo6.style.backgroundColor = colorSeleccionado6 ;



    /*sessionStorage*/

    sessionStorage.setItem('miColor', colorSeleccionado );
    sessionStorage.setItem('miColor2', colorSeleccionado2 );
    sessionStorage.setItem('miColor3', colorSeleccionado3 );
    sessionStorage.setItem('miColor4', colorSeleccionado4 );
    sessionStorage.setItem('miColor5', colorSeleccionado5 );
    sessionStorage.setItem('miColor6', colorSeleccionado6 );




    const coloresSeleccionadosArray = [colorSeleccionado, colorSeleccionado2, colorSeleccionado3, colorSeleccionado4, colorSeleccionado5, colorSeleccionado6 ];

    // Guardar el array en sessionStorage
    sessionStorage.setItem('coloresSeleccionados', JSON.stringify(coloresSeleccionadosArray));

    window.location.href = 'advanced.html';
});

