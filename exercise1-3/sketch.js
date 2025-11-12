let ColorPicker1;
let slider1;

function setup() {
frameRate(1000)
createCanvas(800, 600);

const container = select('main');

colorPicker2 = createColorPicker('blue')
colorPicker1 = createColorPicker('red');

colorPicker1.parent(container);
colorPicker2.parent(container);

colorPicker1.position(150, 550);
colorPicker2.position(25, 550);

slider1 = createSlider(0, 255);
slider1.position(400, 690)
}

function draw() {
    noStroke()
    fill(colorPicker1.value())
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, slider1.value())
    }
    if (keyIsPressed) {
        background(colorPicker2.value())
    }

    fill(255)
    strokeWeight(5);
    stroke(0, 0, 0, 5)
    rect(0, 525, 800)

    menu()
}

function menu() {

    fill(0)
    strokeWeight(1);
    text('Colour', 225, 570)
    textSize(15)

    text('Weight', 500, 570)

    text('Press Any Key To Fill', 600, 570)
    textSize(15)

    text('Fill', 100, 570)

    text('P5.JS.PAINT', 20, 540)

    text('| x | - | o |', 10, 20)

    text('File  Home   Insert   Help', 100, 20)
}