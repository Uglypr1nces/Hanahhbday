class Firework {
    constructor(speed, width, height, color) {
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.color = color;
        this.positionX = 0;
        this.positionY = Math.floor(Math.random() * window.innerWidth);
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.left = this.positionY + "px";
        this.element.style.backgroundColor = this.color;
        document.body.appendChild(this.element);
    }

    move() {
        if (this.positionX < screen.height / 2 + (screen.height / 4)) {
            this.element.style.bottom = this.positionX + "px";
            this.positionX += this.speed;

            setTimeout(() => this.move(), 20);
        } else {
            this.explode();
            setTimeout(() =>{
                setTimeout(() => this.move(), 20);
                this.positionX = 0;
            },500); 
        }
    }

    explode() {
        this.element.style.width = "100px";
        this.element.style.height = "100px";
        this.element.style.backgroundColor = "yellow";

        setTimeout(() => {
            this.element.style.width = this.width + "px";
            this.element.style.height = this.height + "px";
            this.element.style.backgroundColor = this.color;
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let fireworks = createFireworks(10);

    for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].move();
    }
});

function createFireworks(amount) {
    const possible_colors = ["red", "green", "blue"];
    const fireworks = [];

    for (let i = 0; i < amount; i++) {
        const random_num = Math.floor(Math.random() * possible_colors.length);
        const firework = new Firework(10, 10, 10, possible_colors[random_num]);
        fireworks.push(firework);
    }

    return fireworks;
}