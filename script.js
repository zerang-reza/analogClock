const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function clockFunction(){
    var date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    let hrPosition = hours*360/12;
    let minPosition = minutes*360/60;
    let secPosition = seconds*360/60;



    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    console.log(hrPosition)


}

var interval = setInterval (clockFunction, 1000);