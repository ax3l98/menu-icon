window.addEventListener('load', function () {
  let btnBox = this.document.querySelector('.btn-box');
  btnBox.active = false;
  let lineOne = this.document.querySelector('.line-one');
  let lineTwo = this.document.querySelector('.line-two');
  let lineThree = this.document.querySelector('.line-three');
  btnBox.addEventListener('click', function () {
    if (!btnBox.active) {
      lineOne.style.top = '26px';
      lineTwo.style.transform = 'scale(0)';
      lineThree.style.bottom = '26px';
      setTimeout(() => {
        lineOne.style.transform = 'rotate(45deg)';
        lineThree.style.transform = 'rotate(135deg)';
      }, 300);

      btnBox.active = true;
    } else {
      lineOne.style.transform = 'rotate(0deg)';
      lineThree.style.transform = 'rotate(0deg)';

      setTimeout(() => {
        lineOne.style.top = '0px';
        lineTwo.style.transform = 'scale(1)';
        lineThree.style.bottom = '0px';
      }, 300);
      btnBox.active = false;
    }
  });
});
