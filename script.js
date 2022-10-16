var counter = 2;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);



let portfolioList = document.querySelectorAll(".portfolio-list");
let portfolioImg = document.querySelectorAll(".portfolio-img");

for (let i = 0; i < portfolioList.length; i++) {
  portfolioList[i].addEventListener("click", function () {
    for (let j = 0; j < portfolioList.length; j++) {
      portfolioList[j].classList.remove("portfolio-list-active");
    }
    this.classList.add("portfolio-list-active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < portfolioImg.length; k++) {
      portfolioImg[k].classList.add("hide");

      if (
        portfolioImg[k].getAttribute("data-filter") == dataFilter ||
        dataFilter == "all"
      ) {
        portfolioImg[k].classList.remove("hide");
      }
    }
  });
}
