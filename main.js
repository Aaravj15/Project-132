img = "";
status = "";
function setup()
{
    canvas = createCanvas(620, 420);
    canvas.center();
}

function preload()
{
    img = loadImage("guestroom.png");
}

function draw()
{
    image(img, 0, 0, 620, 420);
    fill('#ffbf00');
    text("bed", 45, 150);
    noFill();
    stroke('#ffbf00');
    rect(30, 120, 450, 350);

    fill('#FF0000');
    text("Lamp", 420, 120);
    noFill();
    stroke('#FF0000');
    rect(300, 90, 270, 180);
}

function modelLoaded()
{
    console.log("modelLoaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
      if(error)
      {
          console.log(error);
      }
      console.log(results);
}
