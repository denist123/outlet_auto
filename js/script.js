let header = () => {
   const headerBurger = document.querySelector('.header__burger');
   const headerMenu = document.querySelector('.header__menu');
   headerBurger.addEventListener('click', () => {
     if (headerBurger.classList.contains('_active')) {
       headerBurger.classList.remove('_active');
       headerMenu.style.width = '0';
     } else {
       headerBurger.classList.add('_active');
       headerMenu.style.width = headerMenu.scrollWidth + 15 + 'px';
     }
   });

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