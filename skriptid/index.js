a = document.getElementById("popup"); //võtab popup id-ga elemendi ning paneb selle muutujasse a
küpsis = document.cookie.split(';')
küpsis = küpsis[0] 
if (küpsis != "nõustunud") {a.style.display = "block"} //küsib ainult siis, kui tingimustele pole nõustutud.

sulge = document.getElementById("sulge")
sulge.onclick = function () { //lisab sulge nupule onclick funktsiooni
    a.style.display = "none"
    document.cookie = "nõustunud" //kirjutab cookie milles on nõustumine kirjas, by default kustutatakse cookie kui browser sulgeda.
    kontrolliKüpsist()
}

function kontrolliKüpsist(){
    if (küpsis == "nõustunud"){ 
        tekst1 = document.getElementById("tekst1")
        tekst2 = document.getElementById("tekst2")
        tekst1.classList.add("näita")
        setTimeout(function(){
            tekst2.classList.add("näita")
            pilt = document.getElementsByTagName("img")
            let i = 0
            setTimeout(function(){
                intervall = setInterval(() => {
                    if (i==3){clearInterval(intervall)}
                    pilt[i].classList.add("näita")
                    i++
                }, 500)
            },1000)        
        }, 4000)}      
}

window.addEventListener('load', function () {
    kontrolliKüpsist()
});