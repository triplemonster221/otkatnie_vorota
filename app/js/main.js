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

  $('.zashivka-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/portfolio/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/portfolio/right.svg"></button>',
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.montaj-slider').slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/portfolio/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/portfolio/right.svg"></button>',
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
          }
        }
        
      ]
  })

  if($(window).width() < 650) {
    $('.gate-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/portfolio/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/portfolio/right.svg"></button>',
      // responsive: [
      //     {
      //       breakpoint: 1250,
      //       settings: {
      //         slidesToShow: 2,
      //       }
      //     }
      //   ]
    })
  }




  const portfolioSwiper = new Swiper('.portfolio-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      arrows: false,
      dots: true,
      //centeredSlides: true,

      //loop: true,
      breakpoints: {
        650: {
          slidesPerView: 2,
          spaceBetween: 30,
          arrows: true,
          dots: false,
        },
        992: {
          slidesPerView: 3,
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




// ============================STOP DATE============================

  // let yearLend = document.querySelector('.year');
  // var d = new Date();

  // yearLend.innerHTML = d.getFullYear() + ' ';

// ============================STOP DATE============================


function changeGate(){
  let gateImages = document.querySelectorAll('.gate-slider .quiz-image');
  let zashivkaInputs = document.querySelectorAll('.zashivka-slider input');
  
  zashivkaInputs.forEach(el=>{
    el.addEventListener('click', function(){
      if(el.dataset.type == '3d') {
        gateImages.forEach(img=>{
          if(img.dataset.type == 'vstroena') {
            img.src = 'img/kalitka/vstroennaia3d_small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/vstroennaia 3d.jpg"
          }else if (img.dataset.type == 'rudom'){
            img.src = 'img/kalitka/rudom-3d_small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/rudom-3d.jpg"
          }
        })
      }
      else if(el.dataset.type == 'proflist') {
        gateImages.forEach(img=>{
          if(img.dataset.type == 'vstroena') {

            img.src = 'img/kalitka/vstroennaiz-proflist_small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/vstroennaiz-proflist.jpg"
            
          }else if (img.dataset.type == 'rudom'){

            img.src = 'img/kalitka/rudom-proflist__small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/rudom-proflist.jpg"
            
          }
        })

      }
      else if(el.dataset.type == 'shtaketnik') {
        gateImages.forEach(img=>{
          if(img.dataset.type == 'vstroena') {

            img.src = 'img/kalitka/vstroennaia-shtaket.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/vstroennaia-shtaketnik.jpg"
            
          }else if (img.dataset.type == 'rudom'){

            img.src = 'img/kalitka/rudom-shtaket_small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/rudom-shtaket.jpg"
            
          }
        })
      }else {
        gateImages.forEach(img=>{
          if(img.dataset.type == 'vstroena') {

            img.src = 'img/kalitka/vstroennaia-shtaket.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/vstroennaia-shtaketnik.jpg"
            
          }else if (img.dataset.type == 'rudom'){

            img.src = 'img/kalitka/rudom-shtaket_small.jpg';
            let parent = img.closest('a');
            parent.href="img/kalitka/rudom-shtaket.jpg"
            
          }
        })
      }
    })
  })

  

}

changeGate();



$("[data-fancybox]").fancybox({
  wheel: false,
  slideShow  : false,
})


if(document.querySelectorAll('img[data-src]')) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))
}

if(document.querySelectorAll('[data-bg]')){
  const observerBg = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target.dataset.bg)
        entry.target.style.backgroundImage = "url('"+entry.target.dataset.bg+"')"
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('[data-bg]').forEach(el => observerBg.observe(el))
}

})
