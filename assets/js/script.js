document.addEventListener("DOMContentLoaded", function () {
    // Obtener botones
    var accordionButtons = document.querySelectorAll(".btn-link");
  
    // Agregar escuchadores a los botones
    accordionButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Obtener iframe correspondiente
        var collapseId = this.getAttribute("data-target").replace("#", "");
        var collapseElement = document.getElementById(collapseId);
  
        if (collapseElement) {
          var iframe = collapseElement.querySelector("iframe");
  
          if (iframe) {
            // No se requiere acción aquí ya que los iframes ya existen
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
      console.log("Cambiar el tiempo de inicio del video");
    }
  }
  
  // Clase Reproductor (secundaria)
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this._id = id;
    }
  
    playMultimedia() {
      var iframe = document.getElementById(this._id);
      iframe.src = this._url;
    }
  
    setInicio(tiempo) {
      var iframe = document.getElementById(this._id);
      iframe.src = this._url + `?start=${tiempo}`;
      console.log(
        `La URL de la etiqueta iframe ha sido modificada con el tiempo de inicio: ${tiempo}`
      );
    }
  }
  
  // Instanciar la clase Reproductor para cada iframe
  const musicReproductor = new Reproductor(
    "https://www.youtube.com/embed/iqc0lqW6AEY",
    "musicVideo"
  );
  const movieReproductor = new Reproductor(
    "https://www.youtube.com/embed/6be0-1-2aCQ",
    "movieVideo"
  );
  const seriesReproductor = new Reproductor(
    "https://www.youtube.com/embed/8QnMmpfKWvo",
    "seriesVideo"
  );
  
  // Invocar el método playMultimedia para cada instancia
  musicReproductor.playMultimedia();
  movieReproductor.playMultimedia();
  seriesReproductor.playMultimedia();
  
  // Usar el método setInicio para modificar el tiempo de inicio de una instancia específica
  musicReproductor.setInicio(30);
