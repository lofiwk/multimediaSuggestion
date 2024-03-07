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
            // Change the src attribute of the iframe based on the collapse ID
            switch (collapseId) {
              case "collapseOne":
                iframe.src = "https://www.youtube.com/embed/MUSIC_VIDEO_ID";
                break;
              case "collapseTwo":
                iframe.src = "https://www.youtube.com/embed/MOVIE_VIDEO_ID";
                break;
              case "collapseThree":
                iframe.src = "https://www.youtube.com/embed/SERIES_VIDEO_ID";
                break;
            }
          } else {
            console.error("Iframe not found within the collapse element.");
          }
        } else {
          console.error("Collapse element not found.");
        }
      });
    });
  });