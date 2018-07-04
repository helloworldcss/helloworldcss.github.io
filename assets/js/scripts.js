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
  // - remove class slideInDown
  // - add class slideInUp
  //
  // logic for second click ( close ):
  //  - click var turns to false
  //  - arrow rotates to 0 degrees
  //  - ul hides
  // - remove class slideInUp
  // - add class slideInDown

  // loop through each navArrow btn and select which one the user clicks
  for (let i = 0; i < navArrowLength; i++) {
    navArrow[i].addEventListener('click', () => {
      if ( clicked == false ) {
        // first click
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        clicked = true;
        rotate[i].style.transform = 'rotate(90deg)';
        rotate[i].style.verticalAlign = 'middle';
        navArrow[i].style.verticalAlign = 'sub';
        insideUL[i].style.display = 'flex';
        insideUL[i].style.flexDirection = 'column';
        // insideUL[i].classList.remove('slideOutUp');
        insideUL[i].classList.add('slideInDown');
      } else {
        // second click
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        clicked = false;
        rotate[i].style.transform = 'rotate(0deg)';
        rotate[i].style.verticalAlign = 'sub';
        insideUL[i].style.display = 'none';
        navArrow[i].style.verticalAlign = 'middle';
        // insideUL[i].classList.remove('slideInDown');
        // insideUL[i].classList.add('slideOutUp');
        // window.setTimeout(() => {insideUL[i].style.display = 'none';},202);
        // insideUL[i].style.display = 'none';
      }
    })
  }
})();
