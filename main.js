let Header = document.querySelector('.header');
let Navbar = document.querySelector('.header .flex .navbar');
let Menubtn = document.querySelector('#menu-btn');

Menubtn.onclick = () =>{
    Navbar.classList.toggle('active');
    Menubtn.classList.toggle('fa-times');
}

window.onscroll = () =>{
    // Navbar.classList.toggle('active');
    // Menubtn.classList.toggle('fa-times');

    if(window.scrollY > 0){
        Header.classList.add('active');
    }else{
        Header.classList.remove('active');
    }
}

let Home = document.querySelector('#home');

Home.onmousemove = (evt) =>{
    let homeImg = Home.querySelector('.home-img');
    let x = (window.innerWidth - evt.pageX * 2) / 70;
    let y = (window.innerHeight - evt.pageY * 2) / 70;

    homeImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
}

Home.onmouseleave = () =>{
    let homeImg = Home.querySelector('.home-img');

    homeImg.style.transform = `translateX(0px) translateY(0px)`;
}


let dataOfferset = (24*60*60*1000) * 5;
let countDate = new Date().getTime() + dataOfferset;

function countDown(){
     let now = new Date().getTime();
     let gap = countDate - now;

     let seconds = 1000;
     let minutes = seconds * 60;
     let hours = minutes * 60;
     let days = hours * 24;

     let d = Math.floor(gap / (days));
     let h = Math.floor(gap%(days)/(hours));
     let m = Math.floor(gap%(hours)/(minutes));
     let s = Math.floor(gap%(minutes)/(seconds));

     document.getElementById('day').innerText = d;
     document.getElementById('hour').innerText = h;
     document.getElementById('minute').innerText = m;
     document.getElementById('second').innerText = s;
     
}

setInterval(function(){
    countDown();
}, 1000);


//  Initialize Swiper 

var swiper = new Swiper(".prouducts-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });