// // 1 слайдер
new Swiper('.swiper', {
    //direction: "vertical", //вертикальный слайд, надо ширину враппера поменять на 500px
    effect: "cube", //Эффекты сдайдера "куб" создает 3D модельку слайдера в виде куба
    // effect: "flip", доп эффект "флип" тоже создает 3D модельку тольк на этот раз плоскую
    // effect: "cards", //доп эффект "карты" создает эффект  карточек...
    grabCursor: true, //делает красивым курсор, делает из нее руку
    cubeEffect: {  //эффекты для слайда
        shadow: true, //дает тень кубу
        slideShadows: true, //Вот это не совсем понел, но мне кажеться он дает тень при слайде
        shadowOffset: 20, //смещение тени влево, вправо
        shadowScale: 0.94,//масштаб тени
    },
    navigation: { //навигация
        nextEl: ".swiper-button-next", //отвечает за правую кнопку
        prevEl: ".swiper-button-prev", //отвечает за левую кнопку
//  Почему то не работают
//      type: 'bullets', //точечки
//      clickable: true, //кликание на точечки
//      dynamicBullets: true, //взаимодействие с картинками этих точечек
    },
    pagination: { //пагинация
        el: ".swiper-pagination",
    },
    autoplay: { //автомаьтический прокрут
        delay: 4000, //время автоматического прокрута 
        stopONLastSlide: true, //автомат заканчивается на последнем слайде
        disableOnInteraction: true, //отключение автомата когда слайднут по ручному 
    }
})


//2 слайдер

// new Swiper('.swiper', {
//     zoom: true,
//     direction: "vertical", //вертикальный слайд
//     navigation: {
//       nextEl: ".swiper-button-next", //для правой кнопки
//       prevEl: ".swiper-button-prev", //для левой кнопки
//      type: 'bullets', //точечки
//      clickable: true, //кликание на точечки
//      dynamicBullets: true, //взаимодействие с картинками этих точечек
//     },
//     pagination: { // пагинация
//       el: ".swiper-pagin",
//     //   el: ".swiper-scrollbar"
//       clickable: true,
//     },
// autoplay: { //автоматический прокрут
//     delay: 4000, //время автоматического прокрута
//     stopONLastSlide: true, //автомат заканчивается на последнем слайде
//     disableOnInteraction: true, //отключение автомата когда слайднут по ручному
// }
//   })

//3 слайдер

// new Swiper('.swiper', {
//     direction: "vertical", //вертикальный слайд
//     spaceBetween: 30, //Одинаковое расстояние между картинками
//     effect: "fade", //эффект "фейд" позволяет переходить с картинки на другую картинку через прозрачность
//     navigation: {
//     nextEl: ".swiper-button-next", //для правой кнопки
//     prevEl: ".swiper-button-prev", //для левой кнопки
//     },
// autoplay: { //автомаьтический прокрут
//     delay: 4000, //время автоматического прокрута
//     stopONLastSlide: true, //автомат заканчивается на последнем слайде
//     disableOnInteraction: true, //отключение автомата когда слайднут по ручному
// },
//     pagination: { //пагинация
//       el: ".swiper-pagination",
// //    el: ".swiper-scrollbar"
//       clickable: true, //для точечек
//     },
//   })
