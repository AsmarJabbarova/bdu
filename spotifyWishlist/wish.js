let tablee = document.querySelector("tbody")
fetch("http://localhost:3000/singers")
  .then((res) => res.json())
  .then((singers) => {
    singers.forEach(singer => {
        tablee.innerHTML += ` <tr>
        <th scope="row">1</th>
        <td>${singer.name}</td>
        <td><img src="${singer.image}" alt=""></td>
        <td>${singer.age}</td>
        <td>${singer.genre}</td>
        <td><i class="fa-solid fa-trash deletee"></i></td>
        
      </tr>
 `
        
    });


    let deleteeBtn = document.querySelectorAll(".deletee")
    for( btn of deleteeBtn){
        btn.addEventListener("click", function(){
            this.parentElement.parentElement.remove();
        })
    }


    
})