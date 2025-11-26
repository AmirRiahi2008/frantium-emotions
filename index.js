const container = document.querySelector(".container");
let rows = 4;
window.addEventListener("DOMContentLoaded", (e) => {
  for (let i = 1; i <= rows; i++) {
    const div = document.createElement("div");
    div.classList.add("container_item");
    if (i % 2 !== 0) {
      for (let i = 0; i < 2; i++) {
        const img = document.createElement("img");
        div.classList.add("two-icons");
        img.src = "./icons/happy.png";
        div.appendChild(img);
      }
      container.appendChild(div);
    } else {
      const imgHappy = document.createElement("img");
      imgHappy.src = "./icons/happy.png";
      const imgSad = document.createElement("img");
      imgSad.src = "./icons/sad.png";
      const imgAngry = document.createElement("img");
      imgAngry.src = "./icons/angry.png";
      div.appendChild(imgHappy);
      div.appendChild(imgSad);
      div.appendChild(imgAngry);
      container.appendChild(div);
    }
    if (i == 1) div.classList.add("row-blue");
    else if (i == 2) div.classList.add("row-teal");
    else if (i == 3) div.classList.add("row-red");
    else if (i == 4) div.classList.add("row-lightred");
  }
});
