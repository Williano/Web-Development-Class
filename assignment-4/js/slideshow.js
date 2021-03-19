var captions = new Array(
  "Caribou Migration",
  "Caribou Crossing River",
  "Ceremonial Dress",
  "Family's Home ",
  "Scenic View",
  "Family Stove",
  "Summer Camp",
  "Wolf",
  "Winter Caribou Herd",
  "Spring Caribou"
);

var imageArray = [
  "images/pics/0.jpg",
  "images/pics/1.jpg",
  "images/pics/2.jpg",
  "images/pics/3.jpg",
  "images/pics/4.jpg",
  "images/pics/5.jpg",
  "images/pics/6.jpg",
  "images/pics/7.jpg",
  "images/pics/8.jpg",
  "images/pics/9.jpg",
];

currentIndex = 0;
imageDuration = 3000;

function slideShow() {
  slider = document.getElementById("slider");
  caption = document.getElementById("caption");

  slider.className += "fadeOut";
  caption.style.fontWeight = "bold";

  setTimeout(function () {
    slider.src = imageArray[currentIndex];
    caption.innerHTML = captions[currentIndex];
    slider.className = "";
  }, 1000);

  currentIndex++;

  if (currentIndex == imageArray.length) {
    currentIndex = 0;
  }
  setTimeout(slideShow, imageDuration);
}
