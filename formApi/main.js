let getData = document.querySelector(".getData")
let buuton2 = document.querySelector(".btn btn-secondary")
let buuton3 = document.querySelector(".btn btn-primary")
let buuton4 = document.querySelector(".btn btn-danger")

let tbody = document.querySelector("tbody")


getData.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
})