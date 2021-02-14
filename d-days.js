let dday = new Date("March 26, 2021, 0:00:00").getTime();

setInterval(function () {
    let today = new Date().getTime();
    let gap = dday - today;
    let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.ceil((gap % (1000 * 60)) / 1000);

    document.getElementById("count").innerHTML = day + "d " + hour + "h " + min + "m " + sec + "s";
}, 1000);
// end