const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const subject = form.elements['subject'].value;
  const message = form.elements['message'].value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);
});
