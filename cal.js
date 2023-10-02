//calendar

var date1 = document.getElementById("calendar");
var date2 = document.getElementById("calendar");

var dzisiejszaData = new Date();
var dniTygodnia = ["Niedzielę", "Poniedziałek", "Wtorek", "Środę", "Czwartek", "Piątek", "Sobotę"];
var dzienTygodnia = dniTygodnia[dzisiejszaData.getDay()];



var godzina = "godzina";
date2.classList.add(godzina);




function setTime(){

    var time = new Date();
    date1.innerHTML = "Dziś mamy " + dzienTygodnia + " "+ time.getDay () + time.getDate() + "." + time.getMonth()+"." + time.getFullYear() + "<br>";
    date2.innerHTML += "Godzina: " + time.getHours()+":" + time.getMinutes()+":"+time.getSeconds()+ "<br>";
}
setInterval(setTime, 1000);

