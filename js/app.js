const btn = document.querySelector('.menu__btn');
const menuIcons = document.querySelectorAll('.icon');

function addActive() {
   menuIcons.forEach((item) => {
      if (item.classList.contains('active')) {
         item.classList.remove('active');
      } else {
         item.classList.add('active');
      }
   });
}

const i = btn.addEventListener('click', addActive);

