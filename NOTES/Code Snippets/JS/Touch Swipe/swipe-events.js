// Detect swipe:
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(e) {
  return e.touches ||              // browser API
         e.originalEvent.touches;  // jQuery
}

function handleTouchStart(e) {
  const firstTouch = getTouches(e)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

function handleTouchMove(e) {
  if(!xDown || !yDown) {
    return;
  };

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if(Math.abs(xDiff) > Math.abs(yDiff)) {
    if(xDiff > 0) {
      // Left Swipe
      // document.body.style.backgroundColor = 'red';
    } else {
      //Right Swipe
      // document.body.style.backgroundColor = 'green';
    }
  } else {
    if(yDiff > 0) {
      // Up Swipe
      // document.body.style.backgroundColor = 'blue';
    } else {
      // Down Swipe
      // document.body.style.backgroundColor = 'yellow';
    }
  }
  // reset values
  xDown = null;
  yDown = null;

}