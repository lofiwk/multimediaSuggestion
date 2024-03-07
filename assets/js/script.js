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
                    var reproductor = new Reproductor(iframe.src, collapseId);

                    // Change the URL of the video based on the collapse ID
                    switch (collapseId) {
                        case "collapseOne":
                            reproductor.cambiarURL("https://www.youtube.com/embed/MUSIC_VIDEO_ID");
                            break;
                        case "collapseTwo":
                            reproductor.cambiarURL("https://www.youtube.com/embed/MOVIE_VIDEO_ID");
                            break;
                        case "collapseThree":
                            reproductor.cambiarURL("https://www.youtube.com/embed/SERIES_VIDEO_ID");
                            break;
                    }

                    // Update the iframe's src attribute with the new URL
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

// Usage example
const reproductor = new Reproductor("https://www.youtube.com/embed/abc123", "musicIframe");
reproductor.playMultimedia();
reproductor.setInicio(30);
