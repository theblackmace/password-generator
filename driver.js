const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate(){
    console.log("generate() called")

    let password1 = "";

    for(let i=0; i<15; i++){
        let tempChar = randomChar()
        password1 += tempChar;
    }

    document.querySelector("#fld1").textContent = password1

    let password2 = ""

    for(let i=0; i<15; i++){
        let tempChar = randomChar()
        password2 += tempChar;
    }

    document.querySelector("#fld2").textContent = password2

}

function randomChar(){
    console.log("randomChar() called")

    let randomIndex = Math.floor(91*Math.random())
    return characters[randomIndex]
}


function copyDivToClipboard1() {
    var range = document.createRange();
    range.selectNode(document.getElementById("fld1"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied Password");
}

function copyDivToClipboard2() {
    var range = document.createRange();
    range.selectNode(document.getElementById("fld2"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied Password");
}


