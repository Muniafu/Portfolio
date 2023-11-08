const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', function() {
  navbar.classList.toggle('active');
});
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Do something with the form values (e.g., send them to a server)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form
  contactForm.reset();
});
function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = currentTime;
}

setInterval(updateTime, 1000);
