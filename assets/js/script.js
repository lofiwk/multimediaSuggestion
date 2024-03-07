document.addEventListener("DOMContentLoaded", function() {
    // Obtener botones
    var accordionButtons = document.querySelectorAll(".btn-link");

    // Agregar listeners a botones
    accordionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Obtener iframe correspondiente
            var collapseId = this.getAttribute("data-target").replace("#", "");
            var collapseElement = document.getElementById(collapseId);

            if (collapseElement) {
                var iframe = collapseElement.querySelector("iframe");

                if (iframe) {
                    // Crear instancia de Reproductor basada en iframe
                    var reproductor;
                    switch (collapseId) {
                        case "collapseOne":
                            reproductor = new Reproductor("https://www.youtube.com/embed/MUSIC_VIDEO_ID", collapseId);
                            break;
                        case "collapseTwo":
                            reproductor = new Reproductor("https://www.youtube.com/embed/MOVIE_VIDEO_ID", collapseId);
                            break;
                        case "collapseThree":
                            reproductor = new Reproductor("https://www.youtube.com/embed/SERIES_VIDEO_ID", collapseId);
                            break;
                    }

                    // Actualizar src del iframe con nueva URL y reproducir multimedia
                    reproductor.playMultimedia();
                } else {
                    console.error("Iframe no encontrado en el elemento de colapso.");
                }
            } else {
                console.error("Elemento de colapso no encontrado.");
            }
        });
    });
});

// Clase Multimedia (principal)
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    getUrl() {
        return this._url;
    }

    setInicio(tiempo) {
        console.log("Cambiar inicio del video");
    }
}

// Clase Reproductor (secundaria)
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        const iframe = document.getElementById(this._id);
        if (iframe) {
            iframe.setAttribute("src", this._url);
        } else {
            console.error(`Iframe con id "${this._id}" no encontrado.`);
        }
    }

    cambiarURL(nuevaURL) {
        this._url = nuevaURL;
        console.log("URL del video cambiada a: " + this._url);
    }

    setInicio(tiempo) {
        this._url += `?start=${tiempo}`;
        console.log(`URL del iframe modificada con inicio: ${tiempo}`);
    }
}

// Instanciar Reproductor para cada iframe
const musicReproductor = new Reproductor("https://www.youtube.com/embed/MUSIC_VIDEO_ID", "collapseOne");
const movieReproductor = new Reproductor("https://www.youtube.com/embed/MOVIE_VIDEO_ID", "collapseTwo");
const seriesReproductor = new Reproductor("https://www.youtube.com/embed/SERIES_VIDEO_ID", "collapseThree");

// Reproducir multimedia para cada instancia
musicReproductor.playMultimedia();
movieReproductor.playMultimedia();
seriesReproductor.playMultimedia();

// Modificar inicio de una instancia específica
musicReproductor.setInicio(30);
