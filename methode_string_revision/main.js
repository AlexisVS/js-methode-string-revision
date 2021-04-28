// 1. Exo1
//     - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
//     - Déclenchez un deusieme prompt avec comme question "Entrez la lettre du mot que vouz voulez retirer" et stockez la réponse dans une variable
//     - Affichez le mot sans la lettre choisie
let enterWord = prompt("Entrez un mot");
let enterLetter = prompt("Entrez la lettre du mot que vous vouez retirer")
console.log(enterWord.replace(enterLetter, ''));

// 2. Exo 2
//     - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
//     - stockez la longeur max du mot dans une variable
//     - Retirez une lettre aleatoire
//     - Affichez le mot sans la lettre choisie
let strLength = enterWord.length;
let random = Math.round(Math.random() * (strLength - 1))
console.log(enterWord.replace(enterWord[random], ""));

// 3. Exo 3
//     - Déclenchez un premier prompt avec comme question "Entrez votre prénom" et stockez la réponse dans une variable
//     - Déclenchez un premier prompt avec comme question "Entrez votre nom" et stockez la réponse dans une variable
//     - Déclenchez un premier prompt avec comme question "Entrez votre age" et stockez la réponse dans une variable
//     - Déclenchez un premier prompt avec comme question "Entrez votre taille" (1m75) et stockez la réponse dans une variable
//     - Affichez votre nom en majuscule une lettre sur deux (ex: AnDrE)
//     - Affichez la première lettre de votre prénom en majuscule le reste en minuscule et retire deux lettres au hasard (ex: Guereio)
//     - Affichez le nombre d'années de votre age en mois (ex: 24 ans == 288 mois)
//     - Affichez votre taille en cm (ex: 175 cm)
//     - Affichez une phrase qui contennant touts votres données (ex: Bonjour PrImO Niola, ton prénom comporte 7 lettres mais malheureusement j'ai eu un petit creux et il te manque 2 lettres, tu es agée de 348 mois, concernant ta taille elle est de 175 cm)

let prenom = prompt("Entrez votre prénom");
let nom = prompt("Entrez votre nom");
let age = +prompt("Entrez votre age");
let taille = +prompt('Entree votre taille en mètre');
let hasard = Math.round(Math.random() * (prenom.length - 1))

nom = nom.split('')
for (let i = 0; i < nom.length; i++) {
    if (i % 2 == 0) {
        nom[i] = nom[i].toUpperCase()
    }
}
console.log(nom);

prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1)
prenom.replace(hasard, "").replace(hasard - 1, "")
console.log(prenom);

console.log(`${age * 12} mois`);

console.log(`${taille * 100} centimètre`);

console.log(`Bonjour ${nom} ${prenom}, ton prénom comporte ${prenom.length + 2} lettres mais malheureusement j'ai eu un petit creux et il me manque 2 lettres, tu es agées de ${age * 12} mois, concernant ta taille est est de ${taille * 100} cm.`);