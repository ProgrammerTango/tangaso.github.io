/*========================== Typing Animation ======================*/
var typed = new Typed(".typing", {
    strings: ["","Java developer", "Web designer", "Web developer", " Graphic designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true 
});

/*============================== Aside ============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove active class from all links
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        
        // Add active class to the clicked link
        this.classList.add("active");

        // Show the corresponding section
        showSection(this);
    });
}

function showSection(element) {
    // Remove 'active' class from all sections
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    
    // Get the target section
    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);
    
    // Add 'active' class to the target section to trigger sliding effect
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

// Read More Scripts
function toggleReadMore(event, link) {
    event.preventDefault(); // Prevent the default anchor behavior
    const description = link.previousElementSibling; // Get the paragraph element before the link
    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        link.textContent = 'Read More';
    } else {
        description.classList.add('expanded');
        link.textContent = 'Read Less';
    }
}

// Function to handle the "Hire Me" button click and show the Contact section
document.querySelector('.hire.me').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor link behavior
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active'); // Remove active class from all nav links
    }

    // Add active class to the contact nav link
    document.querySelector('a[href="#contact"]').classList.add('active');
    
    // Show the contact section
    showSection(this);
});



// Smooth scroll to section
function scrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Example: Attach to a link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = this.getAttribute('href');
      scrollToSection(targetSection);
    });
  });
  

  // Function to toggle the menu visibility
  function toggleMenu() {
    const aside = document.querySelector('.aside');
    aside.classList.toggle('active');
  }

  // Function to close the menu when a section is clicked
  function closeMenu() {
    const aside = document.querySelector('.aside');
    aside.classList.remove('active');
  }

  // Add event listeners to all section links
  document.querySelectorAll('.aside .nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const flyInElements = document.querySelectorAll(
        '.section-title, .contact-title, .contact-sub-title, .contact-info-item, .form-item, .about-text, .info-items1, .skills-items, .timeline-item-about, .service-item, .portfolio-item'
    );

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkIfInView() {
        flyInElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('fly-in');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on page load in case some items are already in view

    // Ensure sections are fly-in even on smaller screens when scrolled into view
    window.addEventListener('resize', function() {
        checkIfInView();
    });
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.btn-contact');
    const cvBtn = document.querySelector('.btn-cv');

    contactBtn.addEventListener('click', () => {
        console.log('Contact button clicked');
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    });

    cvBtn.addEventListener('click', () => {
        console.log('CV button clicked');
        window.location.href = 'path/to/your-cv.pdf';
    });

    // Add touch event listeners
    contactBtn.addEventListener('touchstart', () => console.log('Contact button touched'));
    cvBtn.addEventListener('touchstart', () => console.log('CV button touched'));
});
