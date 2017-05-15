// variables: F+-[]
// axiom: F
// rules: F -> FF+[+F-F-F]-[-F+F+F]

var axiom = "F";
var sentence = axiom;
var len = 50;

var rules = []
rules[0]= {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}


function generate() {
  var nextSentence = "";
  for (var i=0; i<sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j=0; j<rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      };
    }
    if (!found) {
      nextSentence += current;
    };
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

// TASK: implement turtle moves for the symbols
// F - draw line
// + - turn right
// - - turn left
// [ - push on stack 
// ] - pop form stack
function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);

  // YOUR CODE: 
  // use rotate(), push() and pop() function
  // draw line with:
  //    line(0, 0, 0, -len);
  //    translate(0, -len);
}


function setup() {
  createCanvas(400, 400);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);

}
