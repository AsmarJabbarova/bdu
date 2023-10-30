let btn = document.querySelector(".btn-light")
let body = document.querySelector("body")



// btn.addEventListener("click",function(){
//     btn.classList.replace("btn-light","btn-dark");
//     btn.textContent = "dark Mode"
//     body.style.backgroundColor = "black"

// }
// )




btn.addEventListener("click", function () {
    if (btn.classList.contains("btn-light")){
        btn.classList.replace("btn-light", "btn-dark");
        btn.textContent = "dark Mode";
        body.style.backgroundColor = "black";
        let darkMode = localStorage.setItem("drakMode",false)
    }

else if (btn.classList.contains("btn-dark")){
    btn.classList.replace("btn-dark", "btn-light");
    btn.textContent = "Light Mode";
    body.style.backgroundColor = "white";
    let darkMode = localStorage.setItem("drakMode",true)
}
}

)




