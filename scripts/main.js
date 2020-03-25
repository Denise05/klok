function digitalClock(){

    var today = new Date(); 

    var h = today.getHours(); // 0 - 23
    var m = today.getMinutes(); // 0 - 59
    var s = today.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h; //0 toevoegen aan uren onder 10
    m = (m < 10) ? "0" + m : m; //0 toevoegen aan minuten onder 10
    s = (s < 10) ? "0" + s : s; //0 toevoegen aan seconden onder 10

    var time = h + ":" + m + ":" + s; //variabele tijd samenbrengen en ':' toevoegen


    document.getElementById('clock').innerHTML = time
    var t= setTimeout(digitalClock, 500);



    if (h < 6) {
        document.body.style.backgroundColor = "#2F545F"; //kleur tussen 00:00 en 6:00 donkerblauw
    }

    else if (h < 8) {
        document.body.style.backgroundColor = "#668387"; //kleur tussen 6:00 en 8:00 schemerblauw
    }

    else if (h < 10) {
        document.body.style.backgroundColor = "#92B1BA"; //kleur tussen 8:00 en 10:00 licht schemerblauw
    }

    else if (h < 20) {
        document.body.style.backgroundColor = "#B9E1F1"; //kleur tussen 10:00 en 20:00 lichtblauw
    }

    else if (h < 22) {
        document.body.style.backgroundColor = "#F8B67F"; //kleur tussen 20:00 en 22:00 oranje
    }

    else {
        document.body.style.backgroundColor = "#2F545F"; //kleur tussen 22:00 en 00:00 donkerblauw
    }



}


window.onload = function() {
    digitalClock(); //functie klok activeren bij laden pagina
};




