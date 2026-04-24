document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector(
        "#menuBurgerMobile, .menuBurger, label[for='menu-burger']"
    );
    const mobileMenu = document.getElementById("mobileMenu");
    const desktopBreakpoint = 1025;

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.style.display === "block";
            mobileMenu.style.display = isOpen ? "none" : "block";
        });

        const closeMobileMenuOnDesktop = () => {
            if (window.innerWidth > desktopBreakpoint) {
                mobileMenu.style.display = "none";
            }
        };

        closeMobileMenuOnDesktop();
        window.addEventListener("resize", closeMobileMenuOnDesktop);
    }

    const contactForm = document.getElementById("formulaire");
    const contactPrenom = document.getElementById("prenom");
    const contactNom = document.getElementById("nom");
    const contactEmail = document.getElementById("email");
    const contactDomain = document.getElementById("domain");
    const contactMessage = document.getElementById("message");
    const messageError = document.querySelectorAll(".error");

    if (
        contactForm &&
        contactPrenom &&
        contactNom &&
        contactEmail &&
        contactDomain &&
        contactMessage
    ) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const prenomValue = contactPrenom.value;
            const nomValue = contactNom.value;
            const emailValue = contactEmail.value;
            const domainValue = contactDomain.value;
            const messageValue = contactMessage.value;

            messageError.forEach((error) => {
                error.classList.add("invisible");
            });

            if (prenomValue.length < 2 || prenomValue.length > 10) {
                contactPrenom.nextElementSibling.classList.remove("invisible");
            } else if (nomValue.length < 2 || nomValue.length > 15) {
                contactNom.nextElementSibling.classList.remove("invisible");
            } else if (emailValue.length < 2 || emailValue.length > 20) {
                contactEmail.nextElementSibling.classList.remove("invisible");
            } else if (domainValue.length < 2 || domainValue.length > 15) {
                contactDomain.nextElementSibling.classList.remove("invisible");
            } else if (messageValue.length < 10 || messageValue.length > 100) {
                contactMessage.nextElementSibling.classList.remove("invisible");
            }
        });
    }
})

// Traduction en langues étrangères
const i18nElements = document.querySelectorAll("[data-i18n]");

document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        if (lang) {
            loadLanguage(lang);
        }
    });
});

const savedLanguage = localStorage.getItem("lang") || "fr";
loadLanguage(savedLanguage);

function flattenObject(obj, result = {}) {
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObject(obj[key], result);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

function applyTranslations(translations) {
    const flat = flattenObject(translations);
    i18nElements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const text = key ? flat[key] : null;
        if (text) {
            el.textContent = text;
        }
    });
}

async function loadLanguage(lang) {
    if (!lang) {
        return;
    }

    try {
        const langFileUrl = new URL(`lang/${lang}.json`, window.location.href);
        const response = await fetch(langFileUrl.href);
        if (!response.ok) {
            throw new Error(`Unable to load language file: ${lang}`);
        }

        const translations = await response.json();
        applyTranslations(translations);

        localStorage.setItem("lang", lang);
    } catch (error) {
        console.error(`Impossible de charger lang/${lang}.json`, error);
    }
}


// Formulaire changement language pour les placeholder

// document.querySelector('#togBtn').addEventListener('input', (event) => {
//   document.querySelector('.usrplaceholder').placeholder = data[event.currentTarget.checked ? 'japanese' : 'english'].usrplaceholder;
//   document.querySelector('.pwplaceholder').placeholder = data[event.currentTarget.checked ? 'japanese' : 'english'].pwplaceholder;
// });

// var data = {
//   "english": {
//     "usrplaceholder": "Username",
//     "pwplaceholder": "Password"
//   },
//   "japanese": {
//     "usrplaceholder": "အသုံးပြုသူအမည်",
//     "pwplaceholder": "စကားဝှက်",
//   }
// }



//     <div class="form-item-fullname">
//         <div class="form-item">
//             <input type="text" name="prenom" id="prenom" data-i18n="formName" placeholder="Prénom*" style="text-transform: capitalize;">
//             <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//         </div>
//         <div class="form-item">
//             <input type="text" name="nom" id="nom" data-i18n="formSurname" placeholder="Nom*" style="text-transform: capitalize;">
//             <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//         </div>
//     </div>
//     <div class="form-item">
//         <input type="text" name="mail" id="email" data-i18n="formMail" placeholder="Adresse e-mail*">
//         <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//     </div>
//     <div class="form-item">
//         <input type="text" name="domain" id="domain" data-i18n="formDomain" placeholder="Domaine du projet*">
//         <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//     </div>
//     <div class="form-item-languages">
//         <div class="form-item">
//             <input list="optionSource" id="langueSource" data-i18n="formLanguageSource" name="optionLangueSource" placeholder="Langue source">
            
//             <datalist id="optionSource">
//                 <option value="Anglais" data-i18n="formLanguageEnglish"></option>
//                 <option value="Français" data-i18n="formLanguageFrench"></option>
//                 <option value="Allemand" data-i18n="formLanguageGerman"></option>
//             </datalist>
//             <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//         </div>

//         <div class="form-item">
//             <input list="optionLangue" id="langueCible" data-i18n="formLanguageCible" name="optionLangueCible" placeholder="Langue cible">
            
//             <datalist id="optionLangue">
//                 <option value="Anglais" data-i18n="formLanguageEnglish"></option>
//                 <option value="Français" data-i18n="formLanguageFrench"></option>
//                 <option value="Allemand" data-i18n="formLanguageGerman"></option>
//             </datalist>
//             <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre deux et dix caractères</div>
//         </div>
//     </div>
//     <div class="form-item">
//         <textarea name="textarea" name="message" id="message" data-i18n="formMessage" placeholder="Message*"></textarea>
//         <div class="error invisible" data-i18n="formContactError">Ce champ doit contenir entre dix et cent caractères</div>
//     </div>
//     <button id="btnForm" name="buttonForm" data-i18n="formButton" type="submit">Envoyer</button>


