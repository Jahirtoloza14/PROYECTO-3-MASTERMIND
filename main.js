function changeColor(i)
{
    let color = i.value;
    i.style.backgroundColor= color;
}
const next = document.getElementById('next');
next.addEventListener('click', ()=>{
    let val = document.querySelectorAll('select').style.backgroundColor;
    sessionStorage.setItem('miColor', val); 

    window.location.href ='juego.html';
})



