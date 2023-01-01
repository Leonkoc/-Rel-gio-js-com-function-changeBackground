const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    
    changeBackground()
});

function changeBackground () {
    let currentTime = new Date().getHours();
    if(currentTime > 18 && currentTime > 6){
        document.body.style.backgroundImage = "url('./assets/noite.gif')"
    }else{
        document.body.style.backgroundImage = "url('dia.gif')"
    }
    document.body.style.backgroundSize = "cover";
}

window.addEventListener('load',changeBackground);
window.addEventListener('timeupdate', changeBackground)