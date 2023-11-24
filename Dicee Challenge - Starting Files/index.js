var randomNumber1 = Math.random() * 6;
var randomNumber1 = Math.floor(randomNumber1) + 1 ;
var randomDiceimage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceimage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.random() * 6;
var randomNumber2 = Math.floor(randomNumber2) + 1 ;
var randomDiceimage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceimage2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win 🏆";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw 🎌"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 win 🏆" ;
}