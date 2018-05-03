var currentPage = 1;
var totalPages = 3;

var swipeZone = document.querySelector('.swipe');

/*
swipedetect(swipeZone, function(direction){
  // direction contains either "none", "left", "right", "top", or "down"
  console.log('swiped ' + direction);

  if (direction == 'left') {
    if (currentPage <= 1) {
      pageNumber = 1;
    } else {
      currentPage = currentPage - 1;
    }

    console.log(currentPage);
    showPage('page-' + currentPage);
  }

  if (direction == 'right') {
    if (currentPage >= totalPages) {
      currentPage = totalPages;
    } else {
      currentPage = currentPage + 1;
    }

    console.log(currentPage);
    showPage('page-' + currentPage);
  }
});
*/

var navButton1 = document.querySelector('.gobutton');

navButton1.addEventListener('click', function() {
  showPage('page-2');
})

var navButton1 = document.querySelector('.gobutton2');

navButton1.addEventListener('click', function() {
  showPage('page-3-1');
})

var navButton1 = document.querySelector('.backarrow');

navButton1.addEventListener('click', function() {
  showPage('page-2');
})


var options = document.getElementsByClassName('option');

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('click', navigate);
}

function navigate() {
  var clicked_option = this.id.slice(-1);
  showPage('page-' + clicked_option)

}
