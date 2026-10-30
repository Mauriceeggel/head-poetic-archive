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
        "http://173.245.149.3/mjpg/video.mjpg",
        "http://217.91.58.189/mjpg/video.mjpg",
        "http://108.30.103.58:8082/mjpg/video.mjpg",
        "http://115.179.36.89/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://91.247.175.46:8001/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://206.40.97.180/mjpg/video.mjpg",
        "http://72.24.198.173/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://206.158.6.24/mjpg/video.mjpg",
        "http://185.152.148.132:8082/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://185.121.102.155:83/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://80.242.35.37:8083/mjpg/video.mjpg",
        "http://80.61.63.103:81/cam_1.cgi",
        "http://220.128.115.31:8080/GetData.cgi?CH=1",
        "http://82.130.141.93/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://109.206.96.58:8080/cam_1.cgi",
        "http://82.78.92.4/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://193.10.98.18/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://96.91.239.26:1024/mjpg/video.mjpg",
        "http://94.139.67.154:50000/mjpg/video.mjpg",
        "http://108.41.24.124/mjpg/video.mjpg",
        "http://74.142.49.38:8001/mjpg/video.mjpg",
        "http://213.3.32.49:9010/mjpg/video.mjpg",
        "http://31.13.201.184/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://46.160.254.214/mjpg/video.mjpg",
        "http://205.215.255.11/mjpg/video.mjpg",
        "http://134.93.182.99/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://176.35.124.16:1024/mjpg/video.mjpg",
        "http://31.12.82.136/mjpg/video.mjpg",
        "http://218.45.160.239/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://188.210.45.124/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://110.3.251.231/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://217.24.54.102/mjpg/video.mjpg",
        "http://74.142.49.38:8000/mjpg/video.mjpg",
        "http://67.60.210.90:8081/axis-cgi/mjpg/video.cgi?camera=&resolution=640x480",
        "http://188.152.36.126/mjpg/video.mjpg",
        "http://196.21.92.82/mjpg/video.mjpg",
        "http://193.90.12.77/axis-cgi/mjpg/video.cgi?camera=&resolution=640x480",
        "http://5.100.32.48:8001/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://80.123.202.34:8080/mjpg/video.mjpg",
        "http://185.37.205.121/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://108.34.179.41/mjpg/video.mjpg",
        "http://60.248.31.214/GetData.cgi?CH=1",
        "http://87.128.61.124:8082/cgi-bin/faststream.jpg?stream=half&fps=15",
        "http://213.193.106.62:8080/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://87.140.50.57:83/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://72.131.101.79:91/mjpg/video.mjpg",
        "http://80.151.177.103:50001/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://195.70.120.133/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://185.193.62.156:8080/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://80.123.111.53/mjpg/video.mjpg",
        "http://162.252.89.116/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://92.221.251.178/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        "http://64.251.74.45/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
        "http://109.73.209.150/mjpg/video.mjpg",
        "http://24.193.20.214:8083/mjpg/video.mjpg",
        "http://45.19.15.24:8101/mjpg/video.mjpg",
        "http://217.22.133.232/mjpg/video.mjpg",
        

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


let nombreDeMorceaux = 0;


let indexMorceauPrecedent = -1;


let positionAleatoireDemandee = false;


lecteur.bind(SC.Widget.Events.READY, function () {
        lecteur.getSounds(function (morceaux) {
                nombreDeMorceaux = morceaux.length;
        });
});

// Choisit un morceau au hasard - différent du précédent
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

// saute à une position de la musique au hasard
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

//  bouton change la musique
bouton.addEventListener("click", changerMusique);


// L'œil cligne
bouton.addEventListener("click", function () {
        bouton.classList.add("cligne");
});

// clignement fin
bouton.addEventListener("animationend", function () {
        bouton.classList.remove("cligne");
});


// Intro --> "Enter" ferme text et lance la musique
const intro = document.getElementById("intro");
const boutonEntrer = document.getElementById("entrer");

boutonEntrer.addEventListener("click", function () {
        intro.classList.add("ferme");
        changerMusique();
        lecteur.play();
});