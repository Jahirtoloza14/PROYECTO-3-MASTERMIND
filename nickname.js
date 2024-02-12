document.addEventListener('click',()=>{
    let val = document.getElementById("input").value;
    sessionStorage.setItem("valor",val);
})



const direccionarBeginner = document.querySelector('.beginner');

// Agregar un evento de clic al botón
direccionarBeginner.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'select-color.html';
});




const direccionarIntermedio = document.querySelector('.intermedio');

// Agregar un evento de clic al botón
direccionarIntermedio.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'select-color-intermedio.html';
});

const direccionarAdvanced = document.querySelector('.advanced');

// Agregar un evento de clic al botón
direccionarAdvanced.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'select-color-advanced.html';
});