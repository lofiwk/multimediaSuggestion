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
            // Create a new Video instance based on the iframe
            var video = new Video(iframe.src);
  
            // Change the URL of the video based on the collapse ID
            switch (collapseId) {
              case "collapseOne":
                video.cambiarURL("https://www.youtube.com/embed/MUSIC_VIDEO_ID");
                break;
              case "collapseTwo":
                video.cambiarURL("https://www.youtube.com/embed/MOVIE_VIDEO_ID");
                break;
              case "collapseThree":
                video.cambiarURL("https://www.youtube.com/embed/SERIES_VIDEO_ID");
                break;
            }
  
            // Update the iframe's src attribute with the new URL
            iframe.src = video.getUrl();
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
  
    setInicio(url) {
      this._url = url;
    }
  
    getUrl() {
      return this._url;
    }
  
    cambiarURL() {
      console.log("Este método es para realizar un cambio en la URL del video");
    }
  }
  
  // Video class (child class)
  class Video extends Multimedia {
    constructor(url) {
      super(url);
    }
  
    cambiarURL(nuevaURL) {
      this._url = nuevaURL;
      console.log("La URL del video ha sido cambiada a: " + this._url);
    }
  }