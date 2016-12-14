screenHeight= 1000;
x_pos= 20;
y_pos=screenHeight-50;
colors= ["red", "purple", 'white'];
vertical=0;

function setup() {
  canvas= createCanvas(500,screenHeight);
  slider= createSlider(0,10,5);
  slider.parent("myslider");
  canvas.parent("page");
}

function draw() {
  background(0);
  horizontal=0;
  fillcolor= 0;
  person_number=0;
  vert=0;
  total_number=10;
  fill(255);
  stroke(255);
  text("slider value:  " + slider.value(), 400, 20);

//   fill(0);
// stroke(255);
// rect(0,0,350,30);
// fill(255);
//   text("percentage of women promoted compared to men: ", 10, 15);
//   var y_label= 0;
  push();
 for (vert=0; vert<10; vert++){
  person_number=0;
    for (horiz=horizontal; horiz<10; horiz++){
      person_number++;
      var women= (total_number-2.3)/(8/slider.value());
     // if (women<=total_number/2){
      if (person_number<=5 && vert==0){
  color=colors[1];
}
else if (person_number>5 && vert==0){
  color=colors[2];
}
else if (person_number> total_number/2){
  color=colors[2];
}
else if (slider.value()==9 && person_number< 2){
  color=colors[1];
}
else if (slider.value()==10 && person_number<= total_number/2){
  color=colors[1];

}
else if (slider.value()==10 && person_number> total_number/2){
  color=colors[2];

}
else if (person_number<=women){
        color=colors[1];
}
else if (person_number>women){
  color=colors[2];
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

