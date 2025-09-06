const showmenu = (toggleid , navid) => {
    const toggle = document.getElementById(toggleid),
    nav = document.getElementById(navid)

    if(toggle && nav){
        toggle.addEventListener('click' , ()=>{
            nav.classList.toggle('show')
        })
    }
}
showmenu('nav-toggle','nav-menu');

const navlink = document.querySelectorAll('.nav-link');
function linkActive (){
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show');
}
navlink.forEach(n => n.addEventListener('click' , linkActive));

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})
sr.reveal('.home-title',{})
sr.reveal('.buttom',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-socail-icon',{interval:200})

sr.reveal('.about-img',{})
sr.reveal('.about-subtitle',{delay:200})
sr.reveal('.about-text',{delay:400})

sr.reveal('.skills-subtitle',{})
sr.reveal('.skills-text',{delay:200})
sr.reveal('.skills-data',{interval:400})
sr.reveal('.skill-img',{delay:200})

sr.reveal('.work-img',{interval:400})

sr.reveal('.contact-input',{interval:400})