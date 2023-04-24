
//////////////////////////////// FIXED SIDEBAR NAVITGATION WITH SCROLL //////////////////////////////////

// All of the navigational sections have IDs
const sections = document.querySelectorAll("section[id]");

// Add the event listener for scrolling
window.addEventListener("scroll", navItemDisplay);

function navItemDisplay() {
  
  // This is the current scroll position
  let scrollY = window.pageYOffset;
  
  // Use a loop to go through sections to get their values
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    // The navSectionId variable shows which link needs an active class
    navSectionId = current.getAttribute("id"); 
    
    /*
    Use 'if else' statement to determine the current section of the page and use the 'active' class to initiate the feature or remove it as necessary to the position

    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + navSectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + navSectionId + "]").classList.remove("active");
    }
  });
}

//////////////////////////////// NAVIGATION TOGGLER FOR DIFFERENT VIEWPORTS //////////////////////////////////

// Assign variables to the toggler button and navigation (use querySelector for classes)
const togglerNav = document.querySelector(".toggler");
const navMenu = document.querySelector(".toggler-open");

// Add the event listeners for when the toggler menu is clicked and show it
button.addEventListener("click", () => {
  navMenu.classList.toggle(".show");
});
