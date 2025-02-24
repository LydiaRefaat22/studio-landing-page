let btn=document.getElementById("button");

window.onscroll = function () {
    if (window.scrollY >= 350) {
        btn.style.display = "block";
    
}
};
btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",

      })
}
console.log(btn)

 
// let btn1=document.getElementById("button1");
// btn1.onclick=function(){
//     document.body.style.background="black";
// }


