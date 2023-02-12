 function clock(){
    let date = new Date();
    let hours = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 10) {hours = '0' + hours};
    let h = document.getElementById('hours').innerHTML = hours;
    if(minutes<10){ minutes = '0' + minutes; }
    let m = document.getElementById('minutes').innerHTML = minutes;
    if(seconds < 10){ seconds = '0' + seconds; }
    let s = document.getElementById('seconds').innerHTML = seconds;
    let ampm = date.getHours() >= 12 ? '&nbsp;'+'PM' : '&nbsp;'+'AM';
    document.getElementById('indicator').innerHTML =ampm;
    
   
}
let timerId;
let update = () => {
     timerId = setInterval(clock,1000);
};
let stopTime = () => {
    clearInterval(timerId);
}
let start = document.getElementById('start-btn').addEventListener('click',update);
let stop = document.getElementById('stop-btn').addEventListener('click',stopTime);




