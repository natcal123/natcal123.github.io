var pos = document.getElementById('pos');
var neg = document.getElementById('neg');

var clicks = 0;

changeWord();

document.body.addEventListener("click", changeWord);

function changeWord() {

  var my_pairs = [
    ['peace', 'agitation'],
    ['love', 'sadness'],
    ['ecstasy', 'despair'],
    ['birth', 'death'],
    ['connection','disconnection'],
    ['creation', 'distruction'],
    ['certainty', 'uncertainty'],
    ['control', 'surrender'],
    ['sanity', 'madness'],
    ['trust', 'fear'],
    ['honor', 'shame'],

  ];

  pos.innerText = my_pairs[clicks][0];
  neg.innerText = my_pairs[clicks][1];

  clicks += 1;

  if (clicks == my_pairs.length) {
    clicks = 0;
  }

}
