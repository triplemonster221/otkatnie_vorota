document.addEventListener('DOMContentLoaded', function() {


  function calcScroll() {
    let div = document.createElement('div');
  
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
  
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
  
    return scrollWidth;
  }
  
  function burger() {
    let burger = document.querySelector('.burger');
    let mobMenu = document.querySelector('.mob-menu-wrap');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.close');
    let body = document.querySelector('body');
    let scroll = calcScroll();
    burger.addEventListener('click', function(){
      mobMenu.classList.toggle('active');
      overlay.classList.toggle('active');


      body.style.overflow = 'hidden';

      document.body.style.marginRight = `${scroll}px`;

      

      close.addEventListener('click', function(){
        mobMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.marginRight = `0px`;
        body.style.overflow = 'visible';
        calcScroll();
      })


      overlay.addEventListener('click', function(){
        mobMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.marginRight = `0px`;
        body.style.overflow = 'visible';
        calcScroll();
      })
    })
  }

  burger();

  const portfolioSwiper = new Swiper('.portfolio-slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      arrows: false,
      dots: true,
      //centeredSlides: true,

      //loop: true,
      breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 2,
        //   spaceBetween: 20
        // },
        // when window width is >= 480px
        650: {
          slidesPerView: 2,
          spaceBetween: 30,
          arrows: true,
          dots: false,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          //spaceBetween: 40
        }
      },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  let sliderContent = document.querySelectorAll('.calc-row');

  sliderContent.forEach(element => {
    let selector = element.querySelector('#selector');
    let slider = element.querySelector('.slider');
    let selectorvalue = element.querySelector('#selectorvalue ');
    let calcInp = element.querySelector('.calc-range');
    let circleBtn = element.querySelector('#selectorBtn')

    selector.style.left = (slider.value - slider.min) * 100 / (slider.max - slider.min) + '% ';

    selectorvalue.style.width = (slider.value - slider.min) * 100 / (slider.max - slider.min) + '% ';
    circleBtn.innerHTML = slider.value;
    calcInp.value = slider.value;
    //showUpp()

      slider.oninput = function(){
      selector.style.left = (this.value - this.min) * 100 / (this.max - this.min) + '% ';
      selectorvalue.style.width = (this.value - this.min) * 100 / (this.max - this.min) + '% ';
      circleBtn.innerHTML = this.value;
      calcInp.value = slider.value;
      console.log(calcInp.value );
      //showUpp()
      }
  });

  // function showUpp(){
  //   let shopTotal = document.querySelector('.total-show ');
  //   let rangePeople = document.querySelector('.range-people');
  //   let rangeSum = document.querySelector('.range-sum');

  //   let summ = Math.round(rangePeople.value) * Math.round(rangeSum.value);

  //   const formatter = new Intl.NumberFormat('ru');
  //   summ = formatter.format(Math.round(summ));
  //   shopTotal.innerHTML = summ;
  // }
//слайдер в оффере=====================

  // if (window.innerWidth <= 768) {
  //   $('.offer-slider').slick({
  //     //slidesToShow: 3,
  //     //adaptiveHeight: true,
  //     //dots: false,
  //     //arrows: false,
  //     //swipe: true,
  //     settings: "unslick",
  //     responsive: [
  //         {
  //           breakpoint: 650,
  //           settings: {
  //             slidesToShow: 1,
  //             dots: true,
  //             arrows: false,
  //             settings: "unslick",
  //           }
  //         }
  //       ]
  //   })

  // }



//значки цифр для слайдера слик ============================
  // var helpers = {
  //   addZeros: function (n) {
  //       return (n < 10) ? '' + n : '' + n;
  //   }
  // };

  // function sliderInit() {
  //   var $slider = $('.recomendation-slider');
  //   $slider.each(function() {
  //     var $sliderParent = $(this).parent();
  //     $(this).slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: false,
  //       infinite: true,
  //       responsive: [
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             adaptiveHeight: true
  //           }
  //         }
  //       ]
  //     });
  
  //     if ($(this).find('.recomendation-content').length > 1) {
  //       $(this).siblings('.slides-numbers').show();
  //     }
  
  //     $(this).on('afterChange', function(event, slick, currentSlide){
  //       $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
  //     });
  
  //     var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
  //     $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  //   });
  // };
    
  // function sliderdirection() {
  //     var $slider = $('.directions-slider');
  //     $slider.each(function() {
  //       var $sliderParent = $(this).parent();
  //       $(this).slick({
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //         infinite: true,
  //         //fade: true,
  //         responsive: [
  //           {
  //             breakpoint: 767,
  //             settings: {
  //               //adaptiveHeight: true
  //             }
  //           }
  //         ]
  //       });
    
  //       if ($(this).find('.directions-content').length > 1) {
  //         $(this).siblings('.slides-numbers').show();
  //       }
    
  //       $(this).on('afterChange', function(event, slick, currentSlide){
  //         $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
  //       });
    
  //       var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
  //       $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
    
  //     });
      
  // };
      
  // if (document.documentElement.clientWidth < 650) {
  //   $('.recomendation-slider').slick({
  //       slidesToShow: 1,
  //       dots: true,
  //       arrows: false,
  //       settings: "unslick"
  //   })
  // } else {
  //   sliderInit();
  // }; 


  // if (document.documentElement.clientWidth < 650) {
  //   $('.directions-slider').slick({
  //       slidesToShow: 1,
  //       dots: true,
  //       arrows: false                
  //   })
  // } else {
  //   sliderdirection();
  // };
        

// вывод модальных окон ============================
    
  function bindModals(TriggerSelector, modalsSelector, closeSelector){
      const trigger = document.querySelectorAll(TriggerSelector),
          modals = document.querySelector(modalsSelector),
          close = document.querySelector(closeSelector),
          modalInner = document.querySelector('.modal'),
          scroll = calcScroll();
        //let text;

      trigger.forEach(element => {
          element.addEventListener('click', (e) => {
              if(e.target){
                  e.preventDefault();
              }
              
              modalInner.classList.add('active');
              modals.classList.add('active');
              document.body.style.overflow = 'hidden';
              document.body.style.marginRight = `${scroll}px`;
              
          }) 
      });
      if(close){  
        close.addEventListener('click', () => {
            modalInner.classList.remove('active');
            modals.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            if(modals.classList.contains("modal-video")){
              let ModalVideo = modals.querySelector('.modal-content').innerHTML='';
            }
        })
      }
      if(modalInner){
      modalInner.addEventListener('click', (e) => {
          if(e.target === modalInner) {
              if(modals) {
                modals.classList.remove('active');
              }
              modalInner.classList.remove('active');
              
              document.body.style.overflow = '';
              document.body.style.marginRight = `0px`;
              
          }
      }) 
    }  

      // убираем скролл

  
      

      // modalExit();
      function modalExit() {
          
          let popupExit = document.querySelector('.modal-away');
          let close = document.querySelector('.modal-away .clouse');
          let count = 0
          if(popupExit){
          $(document).mouseleave(function (e) {
              if (count == 1) {
                  return
                  
              }
              if (e.clientY < 1 && !modalInner.classList.contains('active') ){
                  
                    modalInner.classList.add('active');
                    popupExit.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
            
                
                  if (popupExit.classList.contains('active')) {
                        document.body.addEventListener('keydown', function (e) {
                          if (e.keyCode === 27) {
                              modalInner.classList.remove('active');
                              popupExit.classList.remove('active');
                              document.body.style.overflow = '';
                          }
                      })
                      modalInner.addEventListener('click', (e) => {
                        if(e.target === modalInner) {
                            modalInner.classList.remove('active');
                            popupExit.classList.remove('active');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        }
                      }) 

                      if(close){
                          close.addEventListener('click', () => {
                            console.log(11);
                            modalInner.classList.remove('active');
                            popupExit.classList.remove('active');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        })
                      }
                  }
                  
              }
              count++;
          })
        }
      }

      setTimeout(function() { 
        modalExit();
      }, 100);
      
  }; 

  bindModals('.header-top__callback', '.modal-callBack', '.modal-callBack  .clouse');

  bindModals('.politica', '.modal-politika', '.modal-politika  .clouse');

  bindModals('.politica', '.modal-politika', '.modal-politika  .clouses');
         

// валидация ============================

  const numbers = document.querySelectorAll('.phone');

  numbers.forEach(element => {

      // var phoneMask = IMask(element, {
      //   mask: '+{7}(000)000-00-00',
      //   lazy: false,  // make placeholder always visible
      //   placeholderChar: '_'     // defaults to '_'
      // });

      $(element).inputmask({
        "mask": "+ 9 (999) 999-9999",
        showMaskOnHover: false,
        "oncomplete": function(){
          var value = $(this).val();
          $(this).val(value.replace(/(\+)(\s|)(8)/g,"$1$1"+7))
        }
    });

  })

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+ \d{1} \(\d{3}\) \d{3}-\d{4}/g.test(value); 
  });

  $(".sectionForm").each(function() {
      $(this).validate({
        rules: {
          name:{
            required: true,
          },
          phone: {
            required: true,
            checkMask: true
          },
          email: {
            required: true,
            email: true
          },
          town: {
            required: true,
          }
        }
      });
  });


//---------------ANIMATION============================
  // const animItems = document.querySelectorAll('._anim-items');

  // if (animItems.length > 0){
  //     window.addEventListener('scroll', animOnScroll);
  //     function animOnScroll(params){
  //         for(let index = 0; index < animItems.length; index++){
  //             const animItem = animItems[index];
  //             const animItemHeight = animItem.offsetHeight;
  //             const animItemOffset = offset(animItem).top;
  //             const animStart = 4;

  //             let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //             if(animItemHeight > window.innerHeight){
  //                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //             }

  //             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
  //                 animItem.classList.add('_active');
  //             }else{
  //                 if(!animItem.classList.contains('_no-anim')){
  //                     animItem.classList.remove('_active');
  //                 }
  //             }
  //         }
  //     }
  //     animOnScroll();
  // }
  // function offset(el){
  //     const rect = el.getBoundingClientRect(),
  //         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  // }
  
//---------------STOP ANIMATION============================


// ============================tabs============================

  // function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //   const header = document.querySelector(headerSelector),
  //       tab = document.querySelectorAll(tabSelector),
  //       content = document.querySelectorAll(contentSelector)

  //   function hdieTabContent(){
     
  //       content.forEach(elem => {
  //         elem.classList.remove(activeClass);
  //       })

  //       tab.forEach(elem => {
  //           elem.classList.remove(activeClass);
  //       })
     
       
  //   }

  //   function showTabContent(i = 0) {
   
  //       content[i].classList.add(activeClass);
  //       tab[i].classList.add(activeClass);
    
        
  //   }

    
  //     hdieTabContent();
  //     showTabContent();
    
  //   header.addEventListener('click', (e) => {
  //       const target = e.target;
  //       if(target.classList.contains(tabSelector.replace(/\./, ''))){
  //           tab.forEach((item, i) => {
  //               if(target == item) {
  //                   console.log(i);
  //                   hdieTabContent();
  //                   showTabContent(i);
  //               }
  //           })
  //       }
  //   })

  // }

  //--проверка на существование табов 

  // let directionWrapper = document.querySelector('.direction-wrapper');
  // if(directionWrapper){
  //   tabs('.direction-tabs', '.direction-tab','.direction-content','active');
  // }

// ============================STOP tabs============================


// ============================STOP DATE============================

  // let yearLend = document.querySelector('.year');
  // var d = new Date();

  // yearLend.innerHTML = d.getFullYear() + ' ';

// ============================STOP DATE============================


//--------SHOW-MOREE============================
  // function showMore(){
  //   let btns = document.querySelectorAll('.reviews-box__moree');

  //   btns.forEach(el => {
  //     el.addEventListener('click', function(){
  //       let wrapper = this.closest('.reviews-box');
  //       wrapper.classList.toggle('_active');
  //     })
  //   })
  // }
  // showMore()

//--------STOP SHOW-MOREE============================

//--------akkardion============================
  // function accardion(){
  //   let accardionTop = document.querySelectorAll('.accardion-top');
    
  //   accardionTop.forEach(el => {
  //       el.addEventListener('click', function(){
  //          this.closest('.accardion-box').classList.toggle('_active'); 
  //       })
  //   })
  // }

  // accardion();
//--------STOP akkardion============================
})
