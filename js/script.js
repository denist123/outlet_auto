let header = () => {
   const headerBurger = document.querySelector('.header__burger'),
   menu = document.querySelector('.menu'),
   menuBurger = document.querySelector('.menu__burger');

   headerBurger.addEventListener('click', () => {
      menu.classList.add('_active');
      menuBurger.addEventListener('click', () => {
         menu.classList.remove('_active');
      })
   })


   const searchInput = document.getElementById('search');
   window.addEventListener('resize', () => {
   const windowWidth = window.innerWidth;
   if (windowWidth < 500) {
      searchInput.placeholder = "Артикул";
   } else {
      searchInput.placeholder = "Поиск по артикулу или VIN коду";
   }
   });
 };
 header();


