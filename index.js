let sho=document.getElementsByClassName("shoes")[0];
let box=document.getElementsByClassName("box")[0];
sho.onclick=function(){
    if(box!==""){
        box="undefined"
    }
    let clon=sho.cloneNode(true);
    box.appendChild(clon);
    
}
let sho1=document.getElementsByClassName("shoes")[1];
let sho2=document.getElementsByClassName("shoes")[2];
let sho3=document.getElementsByClassName("shoes")[3];
sho1.onclick=function(){
    let clon=sho1.cloneNode(true);
    box.appendChild(clon);
}
sho2.onclick=function(){
    let clon=sho2.cloneNode(true);
    box.appendChild(clon);
}
sho3.onclick=function(){
    let clon=sho3.cloneNode(true);
    box.appendChild(clon);
}