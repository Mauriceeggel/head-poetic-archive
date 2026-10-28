// LISTE DES WEBCAMS
const listeImages = [
        "http://82.71.13.178:8080/mjpg/video.mjpg",
        "http://188.9.108.125/control/faststream.jpg?stream=full&fps=16&rand=611015",
        "http://71.249.87.61/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://66.109.142.28/mjpg/video.mjpg",
        "http://72.43.65.8/mjpg/video.mjpg",
        "http://89.190.162.243:8080/mjpg/video.mjpg",
        "http://207.32.162.139/mjpg/video.mjpg",
        "http://91.233.230.12/mjpg/video.mjpg",
        "http://208.107.246.94/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://93.241.210.173:50001/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://162.219.56.3:1962/mjpg/video.mjpg",
        "http://96.89.247.169:8000/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=99999",

];

// récupération des éléments HTML
const image = document.getElementById("imageAleatoire");
const bouton = document.getElementById("next");

// Mémorise l'index de la webcam affichée (aucune au début)
let indexPrecedent = -1;

// Choisit et affiche une webcam au hasard
function afficherWebcam() {
        let indexAleatoire;

        do {
                indexAleatoire = Math.floor(Math.random() * listeImages.length);
        } while (indexAleatoire === indexPrecedent);

        indexPrecedent = indexAleatoire;
        image.src = listeImages[indexAleatoire];
}

// le bouton appelle la fonction
bouton.addEventListener("click", afficherWebcam);

// affiche une première webcam au chargement de la page
afficherWebcam();


// Lecteur SoundCloud
const lecteur = SC.Widget(document.getElementById("musique"));

// Nombre de morceaux dans la playlist (connu quand le lecteur est prêt)
let nombreDeMorceaux = 0;

// Mémorise le morceau joué (aucun au début)
let indexMorceauPrecedent = -1;

// Passe à true quand on veut sauter à une position au hasard
let positionAleatoireDemandee = false;

// Quand le lecteur est prêt, on compte les morceaux de la playlist
lecteur.bind(SC.Widget.Events.READY, function () {
        lecteur.getSounds(function (morceaux) {
                nombreDeMorceaux = morceaux.length;
        });
});

// Choisit un morceau au hasard, différent du précédent, et le lance
function changerMusique() {
        if (nombreDeMorceaux === 0) {
                return;
        }

        let indexMorceau;

        do {
                indexMorceau = Math.floor(Math.random() * nombreDeMorceaux);
        } while (indexMorceau === indexMorceauPrecedent && nombreDeMorceaux > 1);

        indexMorceauPrecedent = indexMorceau;
        positionAleatoireDemandee = true;
        lecteur.skip(indexMorceau);
}

// Quand un morceau démarre, on saute à une position au hasard (si on l'a demandé)
lecteur.bind(SC.Widget.Events.PLAY, function () {
        if (!positionAleatoireDemandee) {
                return;
        }

        positionAleatoireDemandee = false;

        lecteur.getCurrentSound(function (morceau) {
                const position = Math.floor(Math.random() * morceau.duration * 0.8);
                lecteur.seekTo(position);
        });
});

// le bouton change aussi la musique
bouton.addEventListener("click", changerMusique);