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

Home.onmouseleave = (evt) =>{
    let homeImg = Home.querySelector('.home-img');

    homeImg.style.transform = `translateX(0px) translateY(0px)`;
}