// hamburger menu

var toggleButton = document.getElementsByClassName('toggle-button')[0]
const toggleButton2 = document.getElementById('toggle-button2')
const sideDrawer = document.getElementById('side-drawer')
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarLinks2 = document.getElementsByClassName('navbar-links')[1]

toggleButton.addEventListener('click',toggleDrawer)
toggleButton2.addEventListener('click',toggleDrawer)

function toggleDrawer() {
  navbarLinks2.classList.toggle('active')
  sideDrawer.style.display = sideDrawer.style.display == "block" ? "none" : "block";
}

// home page scroll fix
function displayWindowSize() {
  const startVideo = document.getElementById("startVideo")
  startVideo.style.width = document.documentElement.clientWidth + "px"
};
window.addEventListener("resize", displayWindowSize);
const startVideo = document.getElementById("startVideo")
startVideo.style.width = document.documentElement.clientWidth + "px"