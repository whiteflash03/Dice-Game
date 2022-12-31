var randRole = Math.floor((Math.random() * 6) + 1);

var randRoleTwo = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src" , "images/dice" + randRole + ".png");

document.querySelector(".img2").setAttribute("src" , "images/dice" + randRoleTwo + ".png");



if(randRole > randRoleTwo){
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!"; 
}else if (randRole < randRoleTwo){
    document.querySelector("h1").innerHTML =  "Player 2 Wins! 🏁";
   }else{
    document.querySelector("h1").innerHTML = "Draw! ✊" 
   }


//footer year

const year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;

