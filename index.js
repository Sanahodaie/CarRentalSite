let menue = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menue.onclick = () => {
    menue.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


window.onscroll= () => {
    menue.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const sr= ScrollReveal({
    distance:"60px" , 
    duration:2500 ,
    delay:400,
    reset:true ,
})


sr.reveal('.text' ,{delay :200 , origin:'top'})
sr.reveal('.form-container form' ,{delay :800 , origin:'right'})
sr.reveal('.heading' ,{delay :100 , origin:'bottom'})
sr.reveal('.ride-container' ,{delay :560 , origin:'left'})