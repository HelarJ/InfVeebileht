a = document.getElementById("testID2");
a.style.color = "red";
a.innerText = "💣";
i = 0;
intervall = setInterval(()=> {
    i = i+0.1
    if (i>=20.0){
        a.innerText = ""
        a.type = "img"
        pilt = document.createElement("img")
        pilt.src = "/images/meme.jpg"
        a.append(pilt)
        clearInterval(intervall)
    }
    a.style.fontSize = (String(i) + "vw");
    console.log(String(i) + "vw")
}, 50);

