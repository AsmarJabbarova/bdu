let cardd = document.querySelector(".cardd")


fetch("http://localhost:3000/singers")
  .then((res) => res.json())
  .then((singers) => {
    singers.forEach(singer => {
        cardd.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${singer.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="#" class="btn btn-primary">Info</a>
          <a href="#" class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></a>
          <a href="#" class="btn btn-danger"><i class="fa-regular fa-heart"></i></a>
        </div>
      </div>`
        
    });


    let deleteBtn = document.querySelectorAll(".delete")
    for( btn of deleteBtn){
        btn.addEventListener("click", function(){
            this.parentElement.parentElement.remove();
        })
    }


    
})