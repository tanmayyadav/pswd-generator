const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btn = document.getElementById("pswd-btn")
let pswdOutput1 = document.getElementById("pswd1")
let pswdOutput2 = document.getElementById("pswd2")
let pswdlength = 12

btn.addEventListener('click', function() {
    let pswd1 = ""
    let pswd2 = ""
for (let i=0;i<pswdlength;i++){
    pswd1 += generate()
    pswd2 += generate()
    pswdOutput1.textContent = pswd1
    pswdOutput2.textContent = pswd2
}
})
function generate() {
let randnum = Math.floor( Math.random() * characters.length)
return characters[randnum]
}