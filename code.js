let canvasBC = document.getElementById("canvasBC");
let ctx = canvasBC.getContext("2d");
let circles = [];

for(let i = 0; i < 50; i++) {
    let circle = new Circle();
    circles.push(circle);
};

function animation() {

    ctx.clearRect(0,0,canvasBC.width,canvasBC.height);
    
    for(let i = 0; i < circles.length; i++) {
        circles[i].update();
        let temp = circles.filter(() => true);
        temp.splice(i,1)

        while(temp.length > 0) {
            circles[i].draw(circles[i].Intersects(temp.shift()));
        };
    };
    setTimeout(requestAnimationFrame,1000/60,animation)
}

animation();