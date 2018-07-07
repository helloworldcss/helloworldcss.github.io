(() => {
  // grab the classes .navArrow, .rotate, and .insideUL from HTML
  let navArrow = document.querySelectorAll('.navArrow');
  // let rotate = document.querySelectorAll('.rotate');
  // let insideUL = document.querySelectorAll('.insideUL');

  // cache navArrow.length for speed
  let navArrowLength = navArrow.length;

  // logic for first click ( open ):
  // - click the navArrow
  // - arrow rotates 90 degrees
  // - ul shows
  // - remove class slideInDown
  // - add class slideInUp
  //
  // logic for second click ( close ):
  //  - arrow rotates to 0 degrees
  //  - ul hides
  // - remove class slideInUp
  // - add class slideInDown

  // loop through each navArrow btn and select which one the user clicks
  for (let i = 0; i < navArrowLength; i++) {
    navArrow[i].addEventListener('click', () => {
      if ( navArrow[i].classList.contains('open') == false ) {
        // first click
        navArrow[i].classList.add('open');
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        rotate[i].style.transform = 'rotate(90deg)';
        rotate[i].style.verticalAlign = 'middle';
        navArrow[i].style.verticalAlign = 'sub';
        insideUL[i].style.display = 'flex';
        insideUL[i].style.flexDirection = 'column';
        insideUL[i].classList.remove('pop-out-top');
        insideUL[i].classList.add('pop-in-top');
      } else {
        // second click
        navArrow[i].classList.remove('open');
        let rotate = document.querySelectorAll('.rotate');
        let insideUL = document.querySelectorAll('.insideUL');
        rotate[i].style.transform = 'rotate(0deg)';
        rotate[i].style.verticalAlign = 'sub';
        insideUL[i].style.display = 'none';
        navArrow[i].style.verticalAlign = 'middle';
        insideUL[i].classList.remove('pop-in-top');
        insideUL[i].classList.add('pop-out-top');
      }
    })
  }
})();

// got the fix for my dropdown issue from w3 school's w3.css accordions section
