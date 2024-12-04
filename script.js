const carousel = document.querySelector('.card-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
const scrollStep = 320; // Adjust to card width + margin

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  scrollAmount += scrollStep;
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  scrollAmount -= scrollStep;
});

// Mouse over effect
// Select all cards
const cards = document.querySelectorAll('.event-card');

cards.forEach(card => {
  const image = card.querySelector('.event-card img');

  // Add mouseover event
  card.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
  });

  // Add mouseout event
  card.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.getElementById("faqAccordion");
  const contactSection = document.querySelector(".contact-section");

  // Adjust contact section height based on the accordion
  accordion.addEventListener("shown.bs.collapse", adjustContactHeight);
  accordion.addEventListener("hidden.bs.collapse", adjustContactHeight);

  function adjustContactHeight() {
      // Calculate the total height of the accordion
      const accordionHeight = accordion.offsetHeight;

      // Set a base height for the contact section
      const baseHeight = 200; // Minimum height of the contact section

      // Adjust the contact section height dynamically
      contactSection.style.minHeight = `${accordionHeight + baseHeight}px`;
  }
});



// sticky navbar
// Select the navbar element
// const navbar = document.querySelector('.header_wrapper');

// // Function to handle the sticky effect
// function handleStickyNavbar() {
//     if (window.scrollY > 0) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }

// // Attach the scroll event listener
// window.addEventListener('scroll', handleStickyNavbar);


  // Select the toggler button
  const toggler = document.querySelector('.custom-toggler');

  // Add click event listener
  toggler.addEventListener('click', () => {
    // Toggle the 'active' class
    toggler.classList.toggle('active');
  });

