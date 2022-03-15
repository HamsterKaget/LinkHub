var images = [
    './Sertifikat/HTML _ CSS/HTML-Progate.png', // HTML & CSS
    './Sertifikat/JavaScript/JavaScript-Progate.png', // ES6
    './Sertifikat/CSS/Sass.png', // Sass
    './Sertifikat/REACT/REACT - Progate.png', // React
    './Sertifikat/PYTHON/Python - Progate.png', // Python
    './Sertifikat/Java/Java - Progate.png', // Java
    './Sertifikat/GIT _ COMMAND LINE/Git - Progate.png', // GIT
    './Sertifikat/GIT _ COMMAND LINE/ComandLine - Progate.png', // Command Line
    './Sertifikat/Java/HTML - Sololearn.jpg', //HTML
    './Sertifikat/JavaScript/JS - Sololearn.png', // JavaScript
    './Sertifikat/PHP/PHP - Sololearn.jpg', // PHP,
    './Sertifikat/HTML _ CSS/JAVA-Sololearn.png', // Java
    './Sertifikat/Kotlin/Kotlin - Solearn.png', // Kotlin

];

var index = 0;

function Next() {
    var slider = document.getElementById("image")
    index++;

    if(index >= images.length ) {
        index = 0;
    }

    slider.src = images[index]
    console.log[index]
}

function Prev() {
    var slider = document.getElementById("image")
    index--;

    if(index < 0) {
        index = images.length - 1;
    }

    slider.src = images[index]
    console.log[index]
    
}