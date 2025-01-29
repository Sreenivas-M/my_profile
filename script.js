

// Hanburger Menu
const hambruger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hambruger.addEventListener('click', ()=>{
    hambruger.classList.toggle('active');
    header.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach((n)=>{
    n.addEventListener('click',()=>{
        hambruger.classList.toggle('active');
        header.classList.toggle('active');
    })
});
