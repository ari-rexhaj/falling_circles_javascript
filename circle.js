let maxradius = 60

class Circle {

    x;
    y;
    radius;
    dx;
    dy;

    constructor() {
        this.radius = 5+Math.random()*maxradius;
        this.x = Math.random()*(canvasBC.width-(this.radius+maxradius)) + this.radius;
        this.y = Math.random()*(canvasBC.height-(this.radius+maxradius)) + this.radius;
        this.dx = (Math.random()*10+2)*((-1)**Math.floor(Math.random()*2+1));
        this.dy =Math.random()*500+2;
    }
    Intersects(other) {
        //console.log(this.x, "this")
        //console.log(other.x, "that")

        let distance = Math.sqrt(((other.x - this.x)**2) + ((other.y - this.y)**2));
        let sumRadi = this.radius + other.radius;

        if(sumRadi > distance) {
            return true;
        }
        else {
            return false;
        }
    }
    update() {
        this.dy += 9.81*0.5;
        this.dx *= 0.995;

        
        if(this.x < this.radius || this.x > ctx.canvas.width-this.radius) {
            this.dx *=-1;
        }

        if (Math.abs(this.dx) < 0.05) {
            this.dx = 0
        }
        
        if(this.y + this.dy > ctx.canvas.height-this.radius) {
            this.dy *= -0.6;
            if(Math.abs(this.dy) < 8) {
                this.dy = 0
            }
        };

        this.x += this.dx;
        this.y += this.dy;
    }

    draw(bool) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.stroke();
        
        if(bool){
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
            ctx.fill();
        }
    }
}