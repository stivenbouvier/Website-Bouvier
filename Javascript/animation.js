const text = document.querySelector(".two-text");

const textload = () => {
    setTimeout(()=>{
        text.textContent = "¡NONSTOP!";
    }, 0);
    setTimeout(()=>{
        text.textContent = "¡NONSTOP!";
    }, 4000);
    setTimeout(()=>{
        text.textContent = "¡NONSTOP!";
    }, 8000);//1s = 1000 milliseconds
}
textload();
setInterval(textload,12000);