let colorPicker1;
let colorPicker2;

function setup() {
    const container = select('main');

    createCanvas(600, 600);

    colorPicker1 = createColorPicker('red');
    colorPicker2 = createColorPicker('blue');
    
    colorPicker1.parent(container);
    colorPicker2.parent(container);
    
    colorPicker1.position(350, 25);
    colorPicker2.position(100, 25);
}

function draw() {
  background(colorPicker1.value());
  text('Colour', 75, 350);
  textSize(25);
  fill(255);

  text('Text', 175, 45);
  textSize(25)
  fill(255);

  text('Background', 450, 45);
  textSize(150)
  fill(colorPicker2.value())
}


