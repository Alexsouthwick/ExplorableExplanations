//Explorable Explanation: Gender Inequality in STEM Business
//By: Alex Southwick
//All code and ideas are mine

screenHeight= 1000;
x_pos= 20;
y_pos=screenHeight-50;
colors= ["red", "purple", 'white'];
vertical=0;

function setup() {
  canvas= createCanvas(500,screenHeight);
  slider= createSlider(0,10,5);

  //allows for CSS on p5 elements
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

  //writes the slider number and percentage of women
  fill(255);
  stroke("red");
  textSize(13);
  text("slider value:  " + slider.value(), 400, 20);
  text("average percentage of women promoted", 10, 15);
  text("compared to men at all levels:  " + slider.value()*10 + "%", 10, 35);
  push();

  //creates pyramid of people
 for (vert=0; vert<10; vert++){
  person_number=0;
    for (horiz=horizontal; horiz<10; horiz++){
      person_number++;

      //calculates number of women for each level using the slider
      var women= (total_number-2.3)/(8/slider.value());

     //if statements to determine which people become women through ranks
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

   //draws the people with the correct color- determined above
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

 //function to draw the stick figures
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

