//JavaScript Document

var pos = document.getElementById("mobile").style.left;

//Open

document.getElementById("open").addEventListener("click", function() {
    if(pos == "-100vw") {
        document.getElementById("mobile").style.left = "0vw"
        console.log ("Yes");
    }
    else {
        document.getElementById("mobile").style.left = "0vw"
        console.log ("No");
    }
})

//Close

document.getElementById("close").addEventListener("click", function() {
    if(pos == "0vw") {
        document.getElementById("mobile").style.left = "-100vw"
        console.log ("Wooh");
    }
    else {
        document.getElementById("mobile").style.left = "-100vw"
        console.log ("Bah");
    }
})