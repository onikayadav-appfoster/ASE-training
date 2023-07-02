const userData = {
  name: "Narayan Khan",
  id: "2442844",
  email: "narayan_khan@emard-greenholt.example",
  gender:"male",
  status: "active",
};

// Get elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("actionButtonButton");
const span = document.getElementsByClassName("close")[0];
const username = document.getElementById("username");
const modalUsername = document.getElementById("modalUsername");
const projectId = document.getElementById("projectId");
const useremail = document.getElementById("useremail");
const userstatus = document.getElementById("userstatus");
const gender = document.getElementById("gender");

// Display username
username.textContent = userData.name;

// Button click event listener
btn.addEventListener("click", function() {
  // Populate modal with user project information
  modalUsername.textContent = userData.name;
  projectId.textContent = userData.id;
  useremail.textContent= userData.email;
  userstatus.textContent= userData.status;
  gender.textContent= userData.gender;
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