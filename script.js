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