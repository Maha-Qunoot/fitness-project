// // Toggle menu visibility on button click
// function toggleMenu(){
//      var menu = document.querySelector('header');
//      menu.classList.toggle('show-nav');
// }

// -------------------------click login go to user info page-----------------
function redirectToPage() {
    window.location.href = 'user-info-img-selection1.html';
  }

//  ----------------------signup to login------------------ 

  function GoTologin() {
    window.location.href = 'login.html';
  }
  
  function goToRecommandPage(){
    window.location.href = 'recommandation-plan.html';
  }

 
//  ----------------------edit preference to profile------------------ 
function goBackToProfile(){
  window.location.href = 'profile.html';
}

function GoToPersonalPlan(){
  window.location.href = 'personal-plan.html';
}

function GoToDay(){
  window.location.href = 'recommad-day.html';
}

function GoToExerciseGuidence(){
  window.location.href = 'recommand-exercise-guidence.html';
}

function GoBackToPersonalPlan(){
  window.location.href = 'personal-plan.html';
}

function GoToArmGuidence(){
  window.location.href = 'workout-arm-guidence.html';
}

function SessionElevateYourFitness(){
  window.location.href = 'view-session.html';
}
function filterPage(){
  window.location.href = 'recipe-filter.html';
}
// function fitlerSession(){
//   window.location.href = 'session.html';
// }

// function fitlerBooked(){
//   window.location.href = 'booked.html';
// }

function GoToBooked(){
  window.location.href = 'session-booked.html';
}

function cancelSession(){
  window.location.href = 'session-cancel.html';
}

function GoBackToNutitionRecipe(){
  window.location.href = 'nutritionist-recipe.html';
}

function FullRecipe(){
  window.location.href = 'recipe.html';
}

function workMin(){
  window.location.href = 'track-daily-workout.html';
}

function nutrition(){
  window.location.href = 'track-daily-nutrition.html';
}

function weight(){
  window.location.href = 'track-daily-weight.html';
}

function summary(){
  window.location.href = 'track-daily-summary.html';
}
//  ----------------------Toggle Button Color------------------ 
function toggleActive(button) {
  button.classList.toggle('active');
}


//  ----------------------Responsive Navigation------------------ 
function toggleMenu() {
  var nav = document.getElementById("NavLinks");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

function hideMenu() {
  var nav = document.getElementById("NavLinks");
  nav.style.display = "none";
}


//  ----------------------Session Button filter------------------ 
// Function to set button active based on URL
function setActiveButton() {
  const url = window.location.href;
  const sessionButton = document.getElementById('sessionButton');
  const bookedButton = document.getElementById('bookedButton');

  if (url.includes('session.html')) {
    sessionButton.classList.add('active');
    bookedButton.classList.remove('active');
  } else if (url.includes('booked.html')) {
    bookedButton.classList.add('active');
    sessionButton.classList.remove('active');
  }
}

// Function to filter sessions and navigate
function filterSession() {
  window.location.href = 'session.html';
}

// Function to filter booked and navigate
function filterBooked() {
  window.location.href = 'session-booked.html';
}

// Set active button on page load
document.addEventListener('DOMContentLoaded', setActiveButton);


