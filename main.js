
const redireccionarBtn = document.getElementById('play');

// Agregar un evento de clic al botón
redireccionarBtn.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'Nickname.html';
});

const redireccionarBtn2 = document.getElementById('about');

// Agregar un evento de clic al botón
redireccionarBtn2.addEventListener('click', function () {
    // Cambiar la ubicación de la ventana a la nueva página
    window.location.href = 'about.html';
});







const next = document.getElementById('next');
next.addEventListener('click', () => {
    let val = document.querySelectorAll('select').style.backgroundColor;
    sessionStorage.setItem('miColor', val);

    window.location.href = 'juego.html';
})



