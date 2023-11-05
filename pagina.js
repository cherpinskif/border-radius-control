document.getElementById("topright").onclick = function(){
    let topright = document.getElementById("topright").value
    const topborderright = document.getElementById("borderadiusdraw")
    topborderright.style.borderTopRightRadius = topright+`%`;

console.log(topright)
}

document.getElementById("topleft").onclick = function(){

    let topleft = document.getElementById("topleft").value
    const topborderleft = document.getElementById("borderadiusdraw")
    topborderleft.style.borderTopLeftRadius = topleft+`%`;

console.log(topleft)
}

document.getElementById("bottomright").onclick = function(){

    let bottomright = document.getElementById("bottomright").value
    const bottomborderright = document.getElementById("borderadiusdraw")
    bottomborderright.style.borderBottomRightRadius = bottomright+`%`;


console.log(bottomright)
}

document.getElementById("bottomleft").onclick = function(){

    let bottomleft = document.getElementById("bottomleft").value
    const bottomborderleft = document.getElementById("borderadiusdraw")
    bottomborderleft.style.borderBottomLeftRadius = bottomleft+`%`;


console.log(bottomleft)
}


document.getElementById("geracodigo").onclick = function(){

    document.getElementById("Lcodigo").value = 
    `border-top-right-radius:`+topright.value+`%;\nborder-top-left-radius:`+topleft.value+`%;\nborder-bottom-right-radius:`+bottomright.value+`%;\nborder-bottom-left-radius:`+bottomleft.value+`%;`
}

document.getElementById("copiacodigo").onclick = function(){

   var copycode = document.getElementById("Lcodigo")
   copycode.select()
   navigator.clipboard.writeText(copycode.value)
   alert("Texto copiado:" + copycode.value)

}


document.getElementById("resetcodigo").onclick = function(){

    topright.value = 0+`%`;
    topleft.value = 0+`%`;
    bottomright.value = 0+`%`;
    bottomleft.value = 0+`%`;
    let update = getElementById("borderadiusdraw")
 }
