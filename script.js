// const contactForm = document.querySelector("#formulaire");

// document.getElementById('contactForm').addEventListener('submit', (e)=>{
//     e.preventDefault();
    
// })


const contactForm = document.getElementById("formulaire");
const contactPrenom = document.getElementById("prenom");
const contactNom = document.getElementById("nom");
const contactEmail = document.getElementById("email");
const contactDomain = document.getElementById("domain");

const contactMessage = document.getElementById("message");
const messageError = document.querySelectorAll(".error");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const prenomValue = contactPrenom.value;
    const nomValue = contactNom.value;
    const emailValue = contactEmail.value;
    const domainValue = contactDomain.value;
    const messageValue = contactMessage.value;

    messageError.forEach(error=>{
        error.classList.add('invisible');
    });

    if(prenomValue.length < 2 || prenomValue.length > 10){
        contactPrenom.nextElementSibling.classList.remove('invisible');
    } else if(nomValue.length < 2 || nomValue.length > 15){
        contactNom.nextElementSibling.classList.remove('invisible');
    } else if (emailValue.length < 2 || emailValue.length > 20){
        contactEmail.nextElementSibling.classList.remove('invisible');
    } else if (domainValue.length < 2 || domainValue.length > 15){
        contactDomain.nextElementSibling.classList.remove('invisible');
    } else if (messageValue.length < 10 || messageValue.length > 100){
        contactMessage.nextElementSibling.classList.remove('invisible');
    }
})
