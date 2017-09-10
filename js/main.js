var origin = [window.innerWidth - 150, window.innerHeight - 100];
var t;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  fill(0);
  t = random(200);
}

function draw(){
  clear();
  background(color(noise(t) * 50 + 200,255,255));
  stroke(0, 100);
  line(origin[0], origin[1] + 50, origin[0] + 100, origin[1] + 50);
  line(origin[0], origin[1], origin[0], origin[1] + 50);
  for (var x=0; x < 100; x++) {
    var noiseVal = noise((t+x / 100));
    var next = noise((t+x+1 / 100));
    stroke(0, 40);
    point(origin[0] + x, origin[1] + noiseVal * 50);
    // line(origin[0] + x, origin[1] + noiseVal * 50, origin[0] + x + 1, origin[1] + next * 50);
  }
  t += 0.01;
}
