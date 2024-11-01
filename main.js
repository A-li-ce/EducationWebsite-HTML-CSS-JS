// chnage navbar
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0); // this will give it immediate toggle class , 100/ 200 b de skte the
});

// hide/show faqs answer

const faqs = document.querySelectorAll('.faq');
//  wo item ye loop k through select krega uske pr class lagayi h
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        // chnage icon : choosing icon in faqs
        const icon = faq.querySelector('.faq__icon i');
        // agr faq por click h aur icon plus m h to wo minus ho jaye aur jb click na kre to plus ho jaye isko hum clasList s b kr skte h but yha hum class name ka use krnge
        if(icon.className ==='uil uil-plus-circle'){
            icon.className = "uil uil-minus-circle";
        }else{
            icon.className = "uil uil-plus-circle";
        }
    })
})

                
//  hide or show navbar

const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');

openBtn.addEventListener('click', ()=>{
    menu.style.display ="flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display ="none";
})

// close navbar menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);