const direccionarBeginner = document.querySelector('.beginner');

// Agregar un evento de clic al botón
direccionarBeginner.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'select-color.html';
});


beginner.addEventListener('click',()=>{
    let val = document.getElementById("input").value;
    sessionStorage.setItem("valor",val);
})
