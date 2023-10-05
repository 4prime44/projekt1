//calendar

var date1 = document.getElementById("calendar");
var date2 = document.getElementById("calendar");

var dzisiejszaData = new Date();
var dniTygodnia = ["Niedzielę", "Poniedziałek", "Wtorek", "Środę", "Czwartek", "Piątek", "Sobotę"];
var dzienTygodnia = dniTygodnia[dzisiejszaData.getDay()];



var godzina = "godzina";
date2.classList.add(godzina);

function addLeadingZero(number) {  // funkcja dzk ktr dodaje 0 przed data
    return number < 10 ? "0" + number : number.toString();
}

function setTime() {
    var time = new Date();
    var formattedDate = dzienTygodnia + " " + addLeadingZero(time.getDate()) + "." + addLeadingZero(time.getMonth() + 1) + "." +addLeadingZero( time.getFullYear());
    var formattedTime = "Godzina: " + addLeadingZero(time.getHours()) + ":" + addLeadingZero(time.getMinutes()) + ":" + addLeadingZero(time.getSeconds());
    date1.innerHTML = formattedDate + "<br>" + formattedTime;
}
setTime();
setInterval(setTime, 1000);

