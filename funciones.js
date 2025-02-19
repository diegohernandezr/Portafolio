// alert("hola");

let menuVisible = false;

//funcion que oculta y mestra el menú :)

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar (){
    //oculto el menu una vez que selecciono una opcion :)
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funciones que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("Figma");
        habilidades[4].classList.add("Photoshop");
        habilidades[5].classList.add("Jitra");
        habilidades[6].classList.add("Comunicación");
        habilidades[7].classList.add("Trabajo");
        habilidades[8].classList.add("Atención");
        habilidades[9].classList.add("Creatividad");
        habilidades[10].classList.add("management");
        habilidades[11].classList.add("Proactivo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


//Función para descargar CV

document.getElementById('downloadButton').addEventListener('click', function() {
    // Crear un enlace temporal
    var enlace = document.createElement('a');
    
    // Establecer el archivo a descargar (ruta del archivo)
    enlace.href = 'documento.pdf'; // Cambia esta ruta por la ubicación del documento

    // El nombre con el que se descargará el archivo
    enlace.download = 'descarga'; // Cambia este nombre si lo deseas

    // Simular un clic en el enlace para iniciar la descarga
    enlace.click();
});
