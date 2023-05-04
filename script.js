// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link
navLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		// Prevent the default link behavior
		e.preventDefault();
		
		// Get the section ID from the link href
		const sectionId = this.getAttribute('href');
		
		// Scroll to the section using smooth scrolling
		document.querySelector(sectionId).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
