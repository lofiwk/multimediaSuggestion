document.addEventListener("DOMContentLoaded", function() {
    // Get all the buttons
    var accordionButtons = document.querySelectorAll(".btn-link");

    // Add event listeners to each button
    accordionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the corresponding iframe
            var collapseId = this.getAttribute("data-target").replace("#", "");
            var collapseElement = document.getElementById(collapseId);

            if (collapseElement) {
                var iframe = collapseElement.querySelector("iframe");

                if (iframe) {
                    // Create a new Reproductor instance based on the iframe
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

                    // Update the iframe's src attribute with the new URL and play multimedia
                    reproductor.playMultimedia();
                } else {
                    console.error("Iframe not found within the collapse element.");
                }
            } else {
                console.error("Collapse element not found.");
            }
        });
    });
});

// Multimedia class (parent class)
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    getUrl() {
        return this._url;
    }

    setInicio(tiempo) {
        console.log("Este método es para realizar un cambio en el URL del video");
    }
}

// Reproductor class (child class)
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
            console.error(`Iframe with id "${this._id}" not found.`);
        }
    }

    cambiarURL(nuevaURL) {
        this._url = nuevaURL;
        console.log("La URL del video ha sido cambiada a: " + this._url);
    }

    setInicio(tiempo) {
        this._url += `?start=${tiempo}`;
        console.log(`La URL de la etiqueta iframe ha sido modificada con el tiempo de inicio: ${tiempo}`);
    }
}

// Instantiate Reproductor class for each iframe
const musicReproductor = new Reproductor("https://www.youtube.com/embed/MUSIC_VIDEO_ID", "collapseOne");
const movieReproductor = new Reproductor("https://www.youtube.com/embed/MOVIE_VIDEO_ID", "collapseTwo");
const seriesReproductor = new Reproductor("https://www.youtube.com/embed/SERIES_VIDEO_ID", "collapseThree");

// Invoke playMultimedia method for each instance
musicReproductor.playMultimedia();
movieReproductor.playMultimedia();
seriesReproductor.playMultimedia();

// Utilize setInicio method to modify start time of a specific instance
musicReproductor.setInicio(30);
