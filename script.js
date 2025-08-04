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

let courses = [
  { name: "Math", grade: 10 },
  { name: "Physics", grade: 11 },
  { name: "Biology", grade: 10 }
];
const courseList = document.getElementById("course-list");
if (courseList) {
  function renderCourses(filteredCourses = courses) {
    courseList.innerHTML = "";
    for (const course of filteredCourses) {
      const div = document.createElement("div");
      div.textContent = course.name + ` (Grade ${course.grade})`;
      courseList.appendChild(div);
    }
  }
  renderCourses();
  document.getElementById("add-course").addEventListener("click", () => {
    const input = document.getElementById("course-input");
    const value = input.value.trim();
    if (value) {
      courses.push({ name: value, grade: 10 });
      input.value = "";
      renderCourses();
    }
  });
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.dataset.grade;
      const filtered = courses.filter(c => c.grade == grade);
      renderCourses(filtered);
    });
  });
}

const form = document.getElementById("contact");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const genderChecked = document.querySelector('input[name="gender"]:checked');

    if (name && email && message && genderChecked ) {
      alert("We have recieved your message. Our team will get in touch with you regarding your query as soon as possible.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}