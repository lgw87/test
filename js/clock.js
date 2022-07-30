const clock = document.getElementById("clock");

function setNowTime(){
    const date = new Date();
    let nowYear = date.getFullYear();
    let nowMon = String(date.getMonth()+1).padStart(2 , "0");
    let nowDay = String(date.getDate()).padStart(2 , "0");
    let nowTime = date.getHours() + ':' + date.getMinutes() + ':' + String(date.getSeconds()).padStart(2,"0");


    clock.innerText = nowYear + '-' + nowMon + '-' + nowDay + '-' + nowTime;
}

setNowTime();
setInterval(setNowTime , 1000);