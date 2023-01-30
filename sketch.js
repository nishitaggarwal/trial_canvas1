const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;
var word2;
var word21;
//

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create(canvas);
    world = engine.world;
    input = document.getElementById("Pigsize");

   
    //bg = createSprite(600,300,1200,700);

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);


}

function draw(){
    // 

    Engine.update(engine);
    var input = document.getElementById("Pigsize").value;
    var choice = document.getElementById("choice").value;

    i = 1
      
    if (choice == "lines"){
      
          
    }else{
      if(i >> 0){
        bird = new Bird(100,100,input,input);
        pig1 = new Pig(810, 350,input,input);
      }
    }

 //    box1.display();
   //  box2.display();
 //   ground.display();
   //  pig1.display();
  //   log1.display();
// 
  //   box3.display();
  //   box4.display();
  //   pig3.display();
 //    log3.display();

   //  box5.display();
  //   log4.display();
  //   log5.display();

   // drawSprites();
}

function touchMoved() {
    
  var choice = document.getElementById("choice").value;
  var input = document.getElementById("Pigsize").value;
 // var eraser_size = document.getElementsById("eraser").value;
  

  // function show() {
  //   let tab = ` <option value="line">Line</option>
  //   <option value="pig">Pig</option>
  //   <option value="bird">Bird</option>`;
    
    
  //   document.getElementsById("eraser").innerHTML = tab;
  // }

  // show()
    if (choice == "line"){
      strokeWeight(input);
      stroke(0);
      line(mouseX, mouseY, pmouseX, pmouseY);
      return false;
        }
    else if(choice == "bird"){

        bird.display();
    
        return false;
      }
    else if(choice == "pig"){
        pig1.display();
        return false;

      }
    else if(choice =="eraser"){
      strokeWeight(input);
      stroke("white")
      line(mouseX, mouseY, pmouseX, pmouseY);
      
      return false;
    }




    // /// ERASER code beigns
    //   if(eraser_size >= 5){
    //     strokeWeight(input);
    //     stroke(0);
    //     strokeStyle = "white"
    //     line(mouseX, mouseY, pmouseX, pmouseY);
  }



  
  