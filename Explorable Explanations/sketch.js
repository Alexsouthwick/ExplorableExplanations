screenHeight= 1000;
x_pos= 20;
y_pos=screenHeight-50;
colors= ["red", "purple", 'white'];
vertical=0;

function setup() {
  canvas= createCanvas(500,screenHeight);
  slider= createSlider(0,10,5);
  // button= createButton('start');
  percentage= slider.value();
}
// function roundUp(num, precision) {
//   return Math.ceil(num * precision) / (precision*precision);
// }

function draw() {
  background(0);
  horizontal=0;
  fillcolor= 0;
  person_number=0;
  vert=0;
  total_number=10;
  
  push();
 for (vert=0; vert<10; vert++){
  person_number=0;
    for (horiz=horizontal; horiz<10; horiz++){
      person_number++;
      var women= (total_number-2.3)/(slider.value()/3.125);
      
      if (person_number<=women){
        color=colors[1];
}
else if (person_number>women){
  color=colors[2];
}
else {
  color=colors[0];
}

  draw_person(x_pos,y_pos);
  translate(50,0);
}
  pop();
  translate(25,-100);
  push();
 
  horizontal++;
  total_number--;
}
// button.mousePressed(button_pressed);
}

function draw_person(x_position, y_position) {
    self.x_position=x_position;
    self.y_position=y_position;
  fill(color);
  stroke(color);
  ellipse(self.x_position, self.y_position, 20,20);
  strokeWeight(3);
  line(self.x_position, self.y_position, self.x_position, self.y_position+40);
  line(self.x_position, self.y_position+17, self.x_position-10, self.y_position+23);
  line(self.x_position, self.y_position+17, self.x_position+10, self.y_position+23);
  line(self.x_position, self.y_position+40, self.x_position-10, self.y_position+50);
  line(self.x_position, self.y_position+40, self.x_position+10, self.y_position+50);
}

