var random1 = Math.floor(Math.random()*6) + 1;
var random2 = Math.floor(Math.random()*6) + 1;

if(random1 === random2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if(random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else document.querySelector("h1").innerHTML = "Player 2 wins!";

var randomImagesource1 = "images/dice" + random1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImagesource1);

var randomImagesource2 = "images/dice" + random2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImagesource2);