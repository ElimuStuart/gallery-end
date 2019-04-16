var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i <= 5; i++){

  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+[i]+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", function(e){
    var srcAttribute = e.target.getAttribute("src");
    setSrcAtr(srcAttribute);
  })

}

function setSrcAtr(src){
  displayedImage.setAttribute("src", src);
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(e){
  var checkClass = e.target.getAttribute("class");
  if(checkClass == "dark"){
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }else{
    e.target.setAttribute("class", "dark");
    e.target.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
