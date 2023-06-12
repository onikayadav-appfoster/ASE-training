
    // Sample data
    const userData = {
      name: "Narayan Khan",
      project: "Sample Project"
    };

    // Get elements
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("actionButton");
    const span = document.getElementsByClassName("close")[0];
    const username = document.getElementById("username");
    const modalUsername = document.getElementById("modalUsername");
    const projectInfo = document.getElementById("projectInfo");

    // Display username
    username.textContent = userData.name;

    // Button click event listener
    btn.addEventListener("click", function() {
      // Populate modal with user project information
      modalUsername.textContent = userData.name;
      projectInfo.textContent = userData.project;
      modal.style.display = "block";
    });

    // Close modal when close button is clicked
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });

    // Close modal when user clicks outside of it
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
