pilt = document.getElementById("puppeyPilt")
allkiri = document.getElementById("ajamasin")
pilt.onclick = function muudaPilt(){
    vanapilt = pilt.src
    //console.log(vanapilt)
    if (vanapilt.slice(-6) == "ey.jpg"){
        pilt.setAttribute("src", "images/puppey2018.jpg")
        allkiri.innerHTML = "2018 aasta Puppey.";
    } else {
        vananumber = vanapilt.slice(-6,-4)
        if (vananumber > 10){
            vananumber--
            pilt.setAttribute("src", "images/puppey20"+vananumber+".jpg")
            allkiri.innerHTML = '20'+vananumber+' aasta Puppey.';

        }
    }

}