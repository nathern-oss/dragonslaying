var wrap = document.body.querySelector(".wrapper");
var health = 0;
var damage = Number(prompt("How many times do you want to hit the dragon?"));


while (health < 10) {
  if(damage>5){
    health=health+1
    damage = Number(prompt("How many times do you want to hit the dragon?"));
  }
  health++
}

wrap.innerHTML="You did "+health+" damage. You killed the dragon!";