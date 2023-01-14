let numbers = document.querySelector(".inside-ludo");
let clickk = document.querySelector(".click");
let bodyy = document.querySelector(".ludo");
let wrapper = document.querySelector(".container");
let value;


clickk.addEventListener("click", function(){
    animate();
});



function animate(){
    
    setTimeout(function(){
        bodyy.style.transform = "rotate(359deg)";
        bodyy.style.transition = "0.5s";
        bodyy.style.boxShadow = "0px 30px 30px 0px";
    },250);


     setTimeout(function(){
       bodyy.style.transition = "0.5s";
       bodyy.style.boxShadow = "0px 0px 0px 0px";
      afterclick();
      bodyy.style.transform = "rotate(1deg)";
 }, 501);

}

function afterclick(){
    value = Math.floor(Math.random()*6);
    if(value == 0){
        value = Math.floor(Math.random()*6);
    }
    numbers.innerHTML = value;
}
