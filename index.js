let btn = document.getElementById("sign-in")
let w = document.querySelector(".welcome")
let y = document.querySelector(".login")
let b = document.querySelector("#login")
let z = document.querySelector("#account")
let s = document.querySelector("#signup")
let e = document.querySelector("#alr_acct")
let f = document.querySelector("#forgot-password")
let n = document.querySelector("#new-password")
btn.addEventListener("click", ()=>{
    w.style.width = "500px"
    y.style.visibility = "visible"
    y.style.opacity = "1"
    y.style.width = "500px"
    btn.style.visibility = "hidden"
    btn.style.opacity = "0"
    btn.style.transition = "0.3s ease"
    f.style.top = "0"
    f.style.visibility = "hidden"
    f.style.opacity = "0"
    console.log('clicked')
})
z.addEventListener("click", ()=>{
    b.style.visibility = "hidden"
    b.style.opacity = "0"
    b.style.top = "-400px"
    b.style.position = "absolute"
    s.style.top = "-10px"
    s.style.position = "relative"
    s.style.visibility = "visible"
    s.style.opacity = "1"
    f.style.visibility = "hidden"
    f.style.opacity = "0"
   
   
})
e.addEventListener("click", ()=>{
    b.style.visibility = "visible"
    b.style.opacity = "1"
    b.style.top = "0px"
    b.style.position = "relative"
    // s.style.position = "relative"
    s.style.top = "-600px"
    s.style.visibility = "hidden"
    s.style.opacity = "0"                      
    f.style.top = "-800px"
    f.style.visibility = "hidden"  
    f.style.opacity = "0"
    // b.style.transition = "0.4s ease-in-out"
    // f.style.transition = "0.3s ease-in-out"
    // s.style.transition = "0.3s ease-in-out"
    // b.style.transform = "translateX(-50px, 50px)"
    // f.style.position = "relative"
   
   
})
n.addEventListener("click", ()=>{
    b.style.top = "-600px"
    b.style.visibility = "hidden"
    b.style.opacity = "0"
    b.style.position = "absolute"
    s.style.top = "-500px"
    s.style.position = "absolute"
   s.style.visibility = "hidden"
   s.style.opacity = "0"
    f.style.top = "0"
    f.style.visibility = "visible"
    f.style.opacity = "1"
})



let el_down = document.getElementById("text")

function genPassword(){ 
    let pass = ''
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()'
    for(let i = 0; i <= 20; i++){
     console.log(str)
     var char = Math.floor(Math.random()* str.length + 1)
     pass += str.charAt(char)
   
}
return pass
}
function run(){
    el_down.value = genPassword()
}
function copyPassword(){
    let copyText = document.getElementById('text')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
}


//for (let i = 0; i <= 8; i++){
//     var randomNumber = Math.floor(Math.ranndom() * chars.length)
//     password += charset.charAt(randomNumber, randomNumber + 1)
// }
// document.getElementById('text').innerText = password
// } 
 //  el_down.value = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2) + sym[2]
            // console.log(el_down)-->