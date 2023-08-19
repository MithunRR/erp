

document.addEventListener("DOMContentLoaded", function() {
    menuToggle = document.querySelector(".menu-toggle");
    navigation = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", function() {
      navigation.classList.toggle("show-navbar");
    });
  });
  