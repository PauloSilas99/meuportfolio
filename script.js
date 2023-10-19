function initScrollSuave(){
    const linkInterno = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linkInterno.forEach((links)=>{
        links.addEventListener('click',scrollToSection) 
    });
    
}
initScrollSuave()
window.sr=ScrollReveal({ reset: true});
sr.reveal('.projeto-especifico img',{rotate:{x:100,y:80,z:0},duration:2000});
sr.reveal('.texto',{rotate:{x:0,y:80,z:20},duration:2500});