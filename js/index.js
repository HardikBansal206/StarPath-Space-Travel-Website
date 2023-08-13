
//Video Cards
  
const videoCards = [...document.querySelectorAll(".video-card")];
  
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.pause();
    video.currentTime = 0;
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

var videocardContainer = document.querySelector(".video-card-container");
var preBtn = document.querySelector(".pre-btn");
var nxtBtn = document.querySelector(".nxt-btn");
var videocard = document.querySelector(".video-card");

var containerDimensions = videocardContainer.getBoundingClientRect();
var containerWidth = containerDimensions.width;

window.onresize = function() {
  clientWidth = document.documentElement.clientWidth
};
var clientWidth = document.documentElement.clientWidth

nxtBtn.addEventListener("click", () => {
  videocardContainer.scrollLeft += clientWidth*0.8
});

preBtn.addEventListener("click", () => {
  videocardContainer.scrollLeft -= clientWidth*0.8
});


console.log(document.documentElement.clientWidth);
var tryNowButton = document.getElementById("try-now-button");
const popup = document.getElementById("popup");
const backdrop = document.getElementById("content");

  

tryNowButton.addEventListener("click", () => {
popup.style.display = "block";
});

backdrop.addEventListener("click", () => {
popup.style.display = "none";
});

