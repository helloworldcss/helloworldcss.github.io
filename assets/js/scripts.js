(() => {
  // grab the classes .navArrow, .rotate, and .insideUL from HTML
  let navArrow = document.querySelectorAll('.navArrow');
  // let rotate = document.querySelectorAll('.rotate');
  // let insideUL = document.querySelectorAll('.insideUL');

  // cache navArrow.length for speed
  let navArrowLength = navArrow.length;

  // keep track of the user clicks for the navArrow btns
  clicked = false;
  
  // logic for first click ( open ):
  // - click the navArrow
  // - click var turns to true
  // - arrow rotates 90 degrees
  // - ul shows
  //
  // logic for second click ( close ):
  //  - click var turns to false
  //  - arrow rotates to 0 degrees
  //  - ul hides

  // loop through each navArrow btn and select which one the user clicks
  for (let i = 0; i < navArrowLength; i++) {
    navArrow[i].addEventListener('click', () => {
      if ( clicked == false ) {
        // first click
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        clicked = true;
        rotate[i].style.transform = 'rotate(90deg)';
        insideUL[i].style.display = 'block';
      } else {
        // second click
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        clicked = false;
        rotate[i].style.transform = 'rotate(0deg)';
        insideUL[i].style.display = 'none';
      }
    })
  }
})();
