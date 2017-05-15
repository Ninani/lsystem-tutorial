// variables: A B
// axiom: A
// rules: (A → AB), (B → A)

var axiom = "A";
var sentence = axiom;

// TASK: define rules: (A → AB), (B → A)
var rule1 = {
  a: "<your rule>",   //YOUR CODE: replace <your rule> with A and B symbols
  b: "<your rule>"
}

var rule2 = {
  a: "<your rule>",
  b: "<your rule>"
}

// TASK: generate strings with given rules and axiom
function generate() {
  // YOUR CODE
  for(var i=0; i<sentence.length; i++){
    var current = sentence.charAt(i);
    // YOUR CODE: replace current symbol with the correct rule
  }
  //YOUR CODE
  createP(sentence);
}


function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate);

}
