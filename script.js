


  document.addEventListener('DOMContentLoaded', () => {
    const typingEffect = document.querySelector('.typing-effect');

    // Simulating typing effect on page load
    const texts = ["Web Developer", "Frontend", "Backend"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typingEffect.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 200);
    }

    type();
});


// Get the toggle button
const toggleButton = document.getElementById('switch');



// Add event listener to the toggle button
toggleButton.addEventListener('change', () => {
  // Toggle the theme
  document.body.classList.toggle('dark-theme');
});




document.addEventListener("DOMContentLoaded", function() {
  const card1Button = document.querySelector(".card1");
  
  card1Button.addEventListener("click", function() {
    alert("Technical Error! Contact us via other links.");
  });
});













// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Function to highlight the navbar section
function highlightNavbarSection() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each navbar link
  navbarLinks.forEach((link) => {
    // Get the ID of the section that the link points to
    const sectionId = link.getAttribute('href').replace('#', '');

    // Get the section element
    const section = document.getElementById(sectionId);

    // Check if the section is in view
    if (section.offsetTop <= scrollPosition + 100 && section.offsetTop + section.offsetHeight > scrollPosition) {
      // Add the active class to the link
      link.classList.add('active');
    } else {
      // Remove the active class from the link
      link.classList.remove('active');
    }
  });
}

// Call the function on scroll
window.addEventListener('scroll', highlightNavbarSection);

// Call the function on page load
highlightNavbarSection();



