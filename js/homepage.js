var body = document.querySelector("body");
body.style.overflowY = "hidden"

function togglediv() {
  var div = document.getElementById("top-destination");
  var div1 = document.getElementById("navbar");
  var div2 = document.getElementById("footer");
  var div3 = document.getElementById("copyright");
  div.style.display = div.style.display == "block" ? "none" : "block";
  div1.style.display = div1.style.display == "flex" ? "none" : "flex";
  div2.style.display = div2.style.display == "flex" ? "none" : "flex";
  div3.style.display = div3.style.display == "block" ? "none" : "block";
  body.style.overflowY = body.style.overflowY == "hidden" ? "visible" : "hidden";
}