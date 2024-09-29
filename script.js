/*========================== Typing Animation ======================*/
var typed = new Typed(".typing", {
    strings: ["", "Web designer", "Web developer", " and Graphic designer"],
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

// Add event listener to each nav item
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove active class from all links
        navList.forEach(item => item.querySelector("a").classList.remove("active"));
        
        // Add active class to the clicked link
        this.classList.add("active");

        // Show the corresponding section
        showSection(this);
    });
}

function showSection(element) {
    // Remove 'active' class from all sections
    allSection.forEach(section => section.classList.remove("active"));
    
    // Get the target section
    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);
    
    // Add 'active' class to the target section to trigger sliding effect
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

// Initially show the Home section
document.querySelector("#home").classList.add("active");

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
