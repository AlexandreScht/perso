// detect le click
window.addEventListener('click', () => {
var couleur = "rgba(";
var table = [];

// creation code rgba aleatoire
for (let i = 0; i < 3; i++) {
rand = Math.floor(Math.random() * 256);
table.push(rand);
couleur += rand + ", ";
}
var opacity = Math.random() * (1 - 0.2) + 0.2; //opacity min 0.2 pour un min de visibiliter
opacity = opacity.toFixed(2);
couleur += opacity + ")";
document.body.style.background = couleur;

//Creation des couleur inverser
red = table[0];
green = table[1];
blue = table[2];
InvertRED = 255 - red;
InvertGREEN = 255 - green;
InvertBLUE = 255 - blue;
InvertColor = "rgb(" + InvertRED + ", " + InvertGREEN + ", " + InvertBLUE + ")";

//attribution des couleurs inverser au element du DOM
document.querySelector('h1').style.color = InvertColor;
const PBASE = document.querySelectorAll('p');
const SBASE = document.querySelectorAll('span');
PBASE.forEach((p) => {
    p.style.color = InvertColor;
});
SBASE.forEach((span) => {
    span.style.color = InvertColor;
});
document.querySelector('.right').style.borderColor = InvertColor;

//calcule des %
somme = blue + green + red;
Pcred = ((red * 100) / somme).toFixed(2);
Pcgreen = ((green * 100) / somme).toFixed(2);
Pcblue = ((blue * 100) / somme).toFixed(2);
Pctage = [Pcred, Pcgreen, Pcblue];

// trier dans l'odre du <
Pctage.sort(function(a, b) {
    return a - b;
});
compo = [];
listTri = [red, green, blue, "rouge", "vert", "bleu"]
table.sort(function(a, b) {
    return a - b;
});
for (let i = 0; i < 6; i++) {
    if (listTri[i - 3] == table[0]) {
        compo.unshift(listTri[i]);
    }
    if (listTri[i] == table[1]) {
        compo.push(listTri[i + 3]);
    }
    if (listTri[i - 3] == table[2]) {
        compo.push(listTri[i]);
    }
}

// Affichage des ecritures
document.querySelectorAll('p')[0].innerHTML = "Background composer de :";
document.querySelectorAll('p')[4].innerHTML = "Et une opacité de : " + (opacity * 100).toFixed(0) + "%";
document.querySelectorAll('p')[1].innerHTML = compo[2] + " à : " + Pctage[2] + " %";
document.querySelectorAll('p')[2].innerHTML = compo[1] + " à : " + Pctage[1] + " %";
document.querySelectorAll('p')[3].innerHTML = compo[0] + " à : " + Pctage[0] + " %";
document.querySelectorAll('span')[0].innerHTML = "Background: " + couleur;
document.querySelectorAll('span')[1].innerHTML = "Invert Color: " + InvertColor;
});