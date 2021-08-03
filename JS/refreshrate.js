

const figure = document.querySelector(".figure"),
      nxt = document.querySelector(".next"),
      prv = document.querySelector(".prev");

window.onload = ()=>{
    var imgCounter=0;
    var imgs = "";
    while(imgCounter < 36){
        imgCounter= imgCounter +1;
        imgs += `<img src="images/stalled-from-windows/ff (${imgCounter}).jpg" alt="" class="img">`
    }
    figure.innerHTML = imgs;
}

// a function to split the number
function getCleanNum(Num){
    Num = Num.replace("%", "");
    Num = Number(Num);
    return Num;
}

nxt.addEventListener("click", ()=>{
    var left = getCleanNum(figure.style.left);
    if(left == -((figure.querySelectorAll("img").length - 1) * 100)){}else
        {
            figure.style.left = `${(left - 100)}%`; 
        }
});
prv.addEventListener("click", ()=>{
    var left = getCleanNum(figure.style.left);
    if(left == 0 || -0){}else
        {
            figure.style.left = `${(left + 100)}%`; 
        }
});
