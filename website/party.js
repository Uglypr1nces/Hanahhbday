const firework_speed = 10;
const firework_width = 10
const firework_height = 10;

let firework_position_x;
let firework_position_y;

document.addEventListener('DOMContentLoaded', function() {
    firework_position_x = 0;
    firework_position_y = window.innerWidth / 2;

    console.log(firework_position_y);

    partyLoop();
});


function partyLoop(){
    let firework = document.getElementById("firework-id");


    while (firework_position_x < 50){
        firework.style.left = firework_position_y + "px";
        firework.style.bottom = firework_position_x + "px";

        firework_position_y -= 1;
    }

}