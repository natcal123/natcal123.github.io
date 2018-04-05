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


  var class_names = [
    'pair-1',
    'pair-2',
    'pair-3',
    'pair-4',
    'pair-5',
    'pair-6',
    'pair-7',
    'pair-8',
    'pair-9',
    'pair-10',
    'pair-11',
  ];

  pos.className = "";
  neg.className = "";
  pos.classList.add(class_names[clicks]);
  neg.classList.add(class_names[clicks]);

  clicks += 1;

  if (clicks == my_pairs.length) {
    clicks = 0;
  }

  // var my_colors = [
  //   ['#ff6600', '#00a3c1'],
  //   ['#ff9400', '#0061b5'],
  //   ['#ffc600', '#0012a5'],
  //   ['#ffff00', '#6300a5'],
  //   ['#8cc700','#c5007c'],
  //   ['#0fad00', '#ff0000'],
  //   ['#ff6600', '#00a3c1'],
  //   ['#ff9400', '#0061b5'],
  //   ['#ffc600', '#0012a5'],
  //   ['#ffff00', '#6300a5'],
  //   ['#8cc700','#c5007c'],
  //
  // ];
  //
  // pos.style.color = my_colors[clicks][0];
  // neg.style.color = my_colors[clicks][1];
  //
  // clicks += 1;
  //
  // if (clicks == my_colors.length) {
  //   clicks = 0;
  // }



}
