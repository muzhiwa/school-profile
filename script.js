function greeting(name) {
  const message = document.getElementById("welcome");
  if (message) message.textContent = `Welcome, ${name}!`;
}

greeting("Amina");



const typewriterTarget = document.getElementById('add-info');
if (typewriterTarget) {
  new Typewriter(typewriterTarget, {
    strings: ['Learning is fun!', 'Welcome to our school!', 'Let’s explore together!'],
    autoStart: true,
    loop: true,
  });
}

const contactInfo = document.getElementById("contact-info");
if (contactInfo) {
  document.getElementById("show-email").addEventListener("click", () => {
    contactInfo.textContent = "Email: amina@elmwoodacademy.com";
  });
  document.getElementById("show-phone").addEventListener("click", () => {
    contactInfo.textContent = "Phone: 072953819";
  });
  document.getElementById("hide-contact").addEventListener("click", () => {
    contactInfo.textContent = "";
  });
  document.getElementById("update-status").addEventListener("click", () => {
    const newStatus = document.getElementById("status-input").value;
    if (newStatus) document.getElementById("status").innerHTML = `Status: ${newStatus}`;
  });
}