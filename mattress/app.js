$(document).ready(function () {
  var active_index = [0, 1, 2,3];
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const carousel = document.getElementById("carousel");
  var elements_carousel = carousel.children;
  function update() {
    for (var i = 0; i < elements_carousel.length; i++) {
      var div = elements_carousel[i];
      if (active_index.includes(i)) {
        div.style.display = "block";
        //nodeList.push(div);
      } else {
        div.style.display = "none";
      }
    }
  }
  nextButton.addEventListener("click", () => {
    active_index = active_index.map((e) => e + 1);

    if (active_index.some((e) => e >= elements_carousel.length)) {
      console.log("text");
      active_index = [0, 1, 2,3];
    }
    console.log(active_index);
    update();
  });
  prevButton.addEventListener("click", () => {
    active_index = active_index.map((e) => e - 1);
    if (active_index.some((e) => e < 0)) {
      active_index = [
        elements_carousel.length - 4,
        elements_carousel.length - 3,
        elements_carousel.length - 2,
        elements_carousel.length - 1,
      ];
    }
    console.log(active_index);
    update();
  });
  update();
});
