const text = document.querySelector(".two-text");

const textload = () => {
    setTimeout(()=>{
        text.textContent = "NEW ALBUM";
    }, 0);
    setTimeout(()=>{
        text.textContent = "스티븐 부비에";
    }, 4000);
    setTimeout(()=>{
        text.textContent = "MAY 2022";
    }, 8000);//1s = 1000 milliseconds
}
textload();
setInterval(textload,12000);