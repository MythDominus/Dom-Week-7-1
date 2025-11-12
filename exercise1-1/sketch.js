let modeButton;

function setup() {
    const container = select('main');

    createCanvas(600, 600);
    background(100)
    modeButton = createButton('Summon Circles');
    modeButton.parent(container);
    modeButton.position(0, 550);
    modeButton.size(600, 50)
    modeButton.mousePressed
    modeButton.mousePressed(createCircle)
}

function draw(){
}

function createCircle() {
fill(random(255), random(255), random(255), random(100));
ellipse(random(600), random(600), random(200));
}
