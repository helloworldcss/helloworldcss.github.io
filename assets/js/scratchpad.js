// old working click event
for (let i = 0; i < navArrowLength; i++) {
  navArrow[i].addEventListener('click', () => {
    if ( clicked == false ) {
      // console.log('inside if: ' + clicked);
      // first click
      let rotate = document.querySelectorAll('.rotate');
      let insideUL = document.querySelectorAll('.insideUL');
      clicked = true;
      rotate[i].style.transform = 'rotate(90deg)';
      rotate[i].style.verticalAlign = 'middle';
      navArrow[i].style.verticalAlign = 'sub';
      insideUL[i].style.display = 'flex';
      insideUL[i].style.flexDirection = 'column';
      insideUL[i].classList.remove('pop-out-top');
      insideUL[i].classList.add('pop-in-top');
      // insideUL[i].classList.remove('slideOutUp');
    /*  insideUL[i].classList.add('slideInDown'); */ // one cannot add .slidInDown, or any of the other effects in the HTML and have it work, it has to be in the JS
    } else {
      // console.log('inside else: ' + clicked);
      // second click
      let rotate = document.querySelectorAll('.rotate');
      let insideUL = document.querySelectorAll('.insideUL');
      clicked = false;
      rotate[i].style.transform = 'rotate(0deg)';
      rotate[i].style.verticalAlign = 'sub';
      insideUL[i].style.display = 'none';
      navArrow[i].style.verticalAlign = 'middle';
      insideUL[i].classList.remove('pop-in-top');
      insideUL[i].classList.add('pop-out-top');

      // insideUL[i].classList.remove('slideInDown');
      // insideUL[i].classList.add('slideOutUp');
      // window.setTimeout(() => {insideUL[i].style.display = 'none';},202);
      // insideUL[i].style.display = 'none';
    }
  })
}
