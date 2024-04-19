// 🧞🧞🧞 Variable 🧞🧞🧞
let nomInput = document.querySelector("#prenom")
let nomAge = document.querySelector("#age")
let monPoids = document.querySelector("#poids")
let maTaille = document.querySelector("#taille")
let btnEnvoyer = document.querySelector(".launch")
let message = document.querySelector(".message")
let imc = 0


console.log(maTaille);
console.log(monPoids);
console.log(message);


// 🐲🐲🐲 Functionz 🐲🐲🐲




function check() {
    if (maTaille.value == "") {
        message.innerHTML = `Merci de rentrer votre taille. `
      }
    if (monPoids.value == "") {
        message.innerHTML = `Merci de rentrer votre poids. `
    }
    if (nomInput.value == "") {
        message.innerHTML = `Merci de rentrer votre Prènom. `
    }
    if (nomAge.value == "") {
        message.innerHTML = `Merci de rentrer votre Age. `
    }
}




// je recuper mess donner poids et taille
btnEnvoyer.addEventListener("click", function() {
    let taille = (maTaille.value) / 100,
        poids = (monPoids.value),
        result = poids / (taille * taille)

    if (check()) {
        if (result < 18.5) {
            message.innerHTML =`Votre IMC est de: ${result.toFixed(1)} Vous êtes maigre`
        } else if (result < 24.5) {
            message.innerHTML =`Votre IMC est de: ${result.toFixed(1)} Vous avez un poids normal`
        } else if (result < 29.9) {
            message.innerHTML =`Votre IMC est de: ${result.toFixed(1)} Vous êtes en surpoids.`
        } else if (result < 39.9) {
            message.innerHTML =`Votre IMC est de: ${result.toFixed(1)} Vous êtes obèse`
        } else {
            message.innerHTML =`Votre IMC est de: ${result.toFixed(1)} Vous êtes en obésité morbide`
        }
    }if (check() === true) {
        document.querySelector(".filter").classList.add('hide')
        document.querySelector(".welcome").classList.add('active')
    }
  })






// 🧚🏼🧚🏼🧚🏼 Eventz 🧚🏼🧚🏼🧚🏼

