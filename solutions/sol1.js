// variables: F+-[]
// axiom: F
// rules: F -> FF+[+F-F-F]-[-F+F+F]

var axiom = "F";
var sentence = axiom;

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
}


function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate);

}
