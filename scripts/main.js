// 🧞🧞🧞 Variable 🧞🧞input🧞
let nomInput = document.querySelector("#prenom")
let nomAge = document.querySelector("#age")
let monPoids = document.querySelector("#poids")
let maTaille = document.querySelector("#taille")
let btnEnvoyer = document.querySelector(".launch")
let message = document.querySelector(".message")
let myApp = document.querySelector(".hello")
let sentences = document.querySelector(".bmi-sentences")
let numBim = document.querySelector(".my-bmi")
let newBim = document.querySelector(".new-weight-input")




console.log(maTaille);
console.log(monPoids);
console.log(message);


// 🐲🐲🐲 Functionz 🐲🐲🐲

// Ma function pour check si les champs sont bien remplis
function check() {
    if (nomInput.value == "") {
        message.innerHTML = `Merci de rentrer votre Prènom. `
        document.querySelector("#prenom").classList.add('error')
        return false;
      }
      if (nomAge.value == "") {
        message.innerHTML = `Merci de rentrer votre Age. `
        document.querySelector("#age").classList.add('error')
        return false;
      }
    if (monPoids.value == "") {
      message.innerHTML = `Merci de rentrer votre poids. `
      document.querySelector("#poids").classList.add('error')
      return false;
    }
    if (maTaille.value == "") {
        message.innerHTML = `Merci de rentrer votre taille. `
        document.querySelector("#taille").classList.add('error')
        return false;
      }
    return true;
  }

// je recuper mess donner poids et taille
btnEnvoyer.addEventListener("click", function() {
    let taille = (maTaille.value) / 100,
        poids = (monPoids.value),
        result = poids / (taille * taille),
        monBmiResult = (Math.ceil(result.toFixed(1)))

        //j'affiche le resultat
    if (check()) {
        if (result < 18.5) {
            sentences.innerHTML =`Vous êtes maigre`
            numBim.innerHTML = `${monBmiResult}`
        } else if (result < 24.5) {
            sentences.innerHTML =`Vous avez un poids normal`
            numBim.innerHTML = `${monBmiResult}`
        } else if (result < 29.9) {
            sentences.innerHTML =`Vous êtes en surpoids.`
            numBim.innerHTML = `${monBmiResult}`
        } else if (result < 39.9) {
            sentences.innerHTML =`Vous êtes obèse`
            numBim.innerHTML = `${monBmiResult}`
        } else {
            sentences.innerHTML =`Vous êtes en obésité morbide`
            numBim.innerHTML = `${monBmiResult}`
        }
        document.querySelector(".filter").classList.add('hide')
        document.querySelector(".welcome").classList.add('active')
    }
  })

  myApp.innerHTML = `Hello,<span>${nomInput.value}!</span><sup>${nomAge.value}</sup>`

  let jourCounter = 1;




// 🧚🏼🧚🏼🧚🏼 Eventz 🧚🏼🧚🏼🧚🏼

// Code pour le chart


function updateChart() {
    // Récupération de la nouvelle valeur de poids
    let newWeight = parseFloat(newBim.value);
  
    // Mise à jour des données du graphique
    data.datasets[0].data.push(newWeight);
    data.labels.push(jours());
  
    // Redessin du graphique
    stackedLine.update();
  }


// Add an update button
let btnNouveau = document.querySelector(".new-weight")
// newBim.parentNode.appendChild(btnNouveau);

// Add an event listener to the update button
btnNouveau.addEventListener("click", updateChart), function () {
    
}



const lineCanvas = document.getElementById('myChart')

function jours() {
    return `jour${jourCounter++}`;
  }

function poidJour() {
    let newWeight = parseFloat(newBim.value);
    return `${newBim.value}`;
}

let data = {
    labels: [ jours() ],
    datasets:[{
        label: 'Poids (en kg) ',
        data: [ monPoids.value, poidJour()]
    }]
}

const stackedLine = new Chart(lineCanvas, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});
