pilt = document.getElementById("puppeyPilt")
pilt.onclick = function muudaPilt(){
    vanapilt = pilt.getAttribute("src")
    if (vanapilt.slice(-6) == "ey.jpg"){
        pilt.setAttribute("src", "images/puppey2018.jpg")
    } else {
        vananumber = vanapilt.slice(-6,-4)
        if (vananumber > 10){
            vananumber--
            pilt.setAttribute("src", "images/puppey20"+vananumber+".jpg")
        }
    }

}