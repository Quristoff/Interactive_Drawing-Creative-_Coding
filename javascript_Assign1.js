function setup() {
  createCanvas(700,500);
}


var snow1_y = 0;
var snow2_y = 12;
var snow3_y = 53;
var snow4_y = 200;
var snow5_y = 25;
var snow6_y = 310;
var snow7_y = 104;
var snow8_y = 410;
var snow9_y = 210;
var snow10_y = 99;




function draw() {
  // fill the back ground
  var deltaBackgroundColor = -50/500
  background(31+deltaBackgroundColor*mouseY,24+deltaBackgroundColor*mouseY,192+deltaBackgroundColor*mouseY);

  // create the sun
  fill (255, 64, 38);
  noStroke()
  var ellipseYPosition = 125+0.65*mouseY;
  if (ellipseYPosition >= 450){
    ellipseYPosition = 450;
  }

  var ellipseSize = 40+(350/500)*mouseY;
  if (ellipseSize >= 400){
    ellipseSize >= 400;
  }
  ellipse(350,ellipseYPosition,ellipseSize,ellipseSize);
  //ellipse(350,450,400,400);


 // inxisible square
  fill (31+deltaBackgroundColor*mouseY,24+deltaBackgroundColor*mouseY,192+deltaBackgroundColor*mouseY);
  rect (0,460,700,40);


  // sketch the line for the shore
  stroke(255);
  strokeWeight(1.5);

  var limitedMouseY = mouseY;
  if (mouseY >= 500) {
    limitedMouseY = 500;
  }
  line (700+(190-700)/(500)*limitedMouseY,190+(500-190)/(500)*limitedMouseY,600+(250-600)/500*limitedMouseY,220+(430-220)/500*limitedMouseY);
  line (600+(250-600)/(500)*limitedMouseY,220+(430-220)/(500)*limitedMouseY,560+(290-560)/500*limitedMouseY,270+(430-270)/500*limitedMouseY);
  line (560+(350-560)/(500)*limitedMouseY,270+(430-270)/500*limitedMouseY,530+(400-530)/500*limitedMouseY,280+(430-280)/500*limitedMouseY);
  line (530+(400-530)/500*limitedMouseY,280+(430-280)/500*limitedMouseY,470+(500-470)/500*limitedMouseY,320+(500-320)/500*limitedMouseY);

  /*
  line(190,500,250,430);
  line(250,430,290,430);
  line(350,430,400,430);
  line(400,430,500,500);
  */

  line (470+(290-470)/(500)*limitedMouseY,320+(470-320)/(500)*limitedMouseY,420+(290-420)/(500)*limitedMouseY,341+(400-341)/(500)*limitedMouseY);
  line (420+(290-420)/(500)*limitedMouseY,341+(400-341)/(500)*limitedMouseY,400+(305-400)/(500)*limitedMouseY,390+(385-390)/(500)*limitedMouseY);
  line (400+(305-400)/(500)*limitedMouseY,390+(385-390)/(500)*limitedMouseY,387+(335-387)/(500)*limitedMouseY,410+(385-410)/(500)*limitedMouseY);
  line (387+(335-387)/(500)*limitedMouseY,410+(385-410)/(500)*limitedMouseY,360+(350-360)/(500)*limitedMouseY,450+(400-450)/(500)*limitedMouseY);
  line (360+(350-360)/(500)*limitedMouseY,450+(400-450)/(500)*limitedMouseY,300+(350-300)/(500)*limitedMouseY,500+(470-500)/(500)*limitedMouseY);

  /*
  line(290,470,290,400);
  line(290,400,305,385);
  line(305,385,335,385);
  line(335,385,350,400);
  line(350,400,350,470)
*/
  // text "RIP"
  fill (255,255,255,(255/500)*limitedMouseY);
  stroke(255,255,255,(255/500)*limitedMouseY)
  strokeWeight(1)
  text("R.I.P",277+(350-290)/2,385+70/2);

 // draw a creature
  // snow ball
  fill (255);
  noStroke()
  ellipse (650+(400-650)/500*limitedMouseY,180+(410-180)/500*limitedMouseY,30,30);
  ellipse (650+(400-650)/500*limitedMouseY,215+(445-215)/500*limitedMouseY,50,50);

  // nose
  fill (252, 119, 3);
  triangle (645+(385-645)/500*limitedMouseY,178+(475-16-178)/500*limitedMouseY,645+(335+35-645)/500*limitedMouseY,184+(485-16-184)/500*limitedMouseY,639+(352+35-639)/500*limitedMouseY,182+(480-16-182)/500*limitedMouseY)

  // eyes
  fill (0);
  noStroke();
  ellipse (640+(390-640)/500*limitedMouseY,176+(410-176)/500*limitedMouseY,3,3);
  ellipse (650+(400-650)/500*limitedMouseY,176+(410-176)/500*limitedMouseY,3,3);


/*
// snowman final
  fill (255);
  noStroke()
  ellipse (400,410,30,30);
  ellipse (400,445,50,50);

  // nose
  fill (252, 119, 3);
  triangle (350+35,475-16,335+35,485-16,352+35,480-16)

  // eyes
  fill (0);
  noStroke();
  ellipse (390,410,3,3);
  ellipse (400,410,3,3);
*/


  //create a snowing effect
  if (mouseIsPressed) {
    /*
    for (j = 0; j < 9; j++){
      var a = random (0,700);
      var b = random (0,500);
      fill (255);

      ellipse (a,b,10,10)
    }
      */


        fill (255);
        ellipse(350,snow1_y,10,10);
        snow1_y+=2.7;

        ellipse(270,snow2_y,10,10);
        snow2_y+=6;

        ellipse(160,snow3_y,10,10);
        snow3_y+=4.1;

        ellipse(400,snow4_y,10,10);
        snow4_y+=5.2;

        ellipse(17,snow5_y,10,10);
        snow5_y+=4.5;

        ellipse(160,snow3_y,10,10);
        snow6_y+=8.1;

        ellipse(570,snow7_y,10,10);
        snow7_y+=5;

        ellipse(620,snow8_y,10,10);
        snow8_y+=6.5;

        ellipse(153,snow9_y,10,10);
        snow9_y+=4.5;

        ellipse(670,snow10_y,10,10);
        snow10_y+=2.1;

        if (snow1_y >= 500){
          snow1_y = 0
        }
        if (snow2_y >= 500){
          snow2_y = 0
        if (snow3_y >= 500){
          snow3_y = 0
        }
        if (snow4_y >= 500){
          snow4_y = 0
        }
        if (snow5_y >= 500){
          snow5_y = 0
        }
        if (snow6_y >= 500){
          snow6_y = 0
        }
        if (snow7_y >= 500){
          snow7_y = 0
        }
        if (snow8_y >= 500){
          snow8_y = 0
        }
        if (snow9_y >= 500){
          snow9_y = 0
        }
        if (snow10_y >= 500){
          snow10_y = 0
        }
        }
  }





}
