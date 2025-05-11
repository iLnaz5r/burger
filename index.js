document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
  
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
      burger.classList.toggle("active");
    });
  });



document.querySelector('.tap').addEventListener('click',function() {
    document.querySelector('.menu').classList.toggle('active')
})
document.querySelector('.tap-2').addEventListener('click',function() {
    document.querySelector('.type2').classList.toggle('active')
})


const smallSize = window.matchMedia("(max-width: 450px)");
function handleScreenChange(e){
    if (e.matches){
        document.body.classList.display = 'flex'
        document.body.classList.flexDirection = 'column'
        document.querySelector('.nav').style.display = 'none'
        document.querySelector('.right1').style.display = 'none'
        document.querySelector('.left').style.display = 'flex'
        document.querySelector('.head').style.paddingInline = '0px'
        document.querySelector('.left').style.gap = '290px'

        document.querySelector('.main').style.display = 'flex'
        document.querySelector('.main').style.gap = '40px'
        document.querySelector('.main').style.flexDirection = 'column-reverse'
        document.querySelector('.main').style.alignItems = 'center'
        document.querySelector('.main').style.textAlign = 'center'
        document.querySelector('h1').style.fontSize = '40px'
        document.querySelector('.main-parag').style.width = '370px'
        document.querySelector('.left2').style.alignItems = 'center'
        document.querySelector('.desktop').style.display = 'none'
        document.querySelector('.mobile').style.display = 'flex'
 
    }
    else{
        document.body.classList.display = ''
        document.body.classList.flexDirection = ''
        document.querySelector('.nav').style.display = 'flex'
        document.querySelector('.right1').style.display = 'flex'
        document.querySelector('.left').style.display = 'flex'
        document.querySelector('.head').style.paddingInline = '10px'
        document.querySelector('.left').style.gap = '30px'

        document.querySelector('.main').style.display = 'flex'
         document.querySelector('.main').style.gap = '160px'
        document.querySelector('.main').style.flexDirection = 'row'
        document.querySelector('.main').style.alignItems = 'start'
        document.querySelector('.main').style.textAlign = 'start'
        document.querySelector('h1').style.fontSize = '76px'
        document.querySelector('.main-parag').style.width = '470px'
        document.querySelector('.left2').style.alignItems = 'start'
        document.querySelector('.desktop').style.display = 'flex'
        document.querySelector('.mobile').style.display = 'none'
    }

}
handleScreenChange(smallSize)
smallSize.addEventListener('change', handleScreenChange);