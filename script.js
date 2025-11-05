// ===== TOGGLE NAVBAR =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));

// ===== DATA =====
const tutorialsData = {
  coding: {
    java: [
      { title: "Java Basics (W3Schools)", link: "https://www.w3schools.com/java/" },
      { title: "Java Full Course (YouTube)", link: "https://www.youtube.com/watch?v=grEKMHGYyns" },
      { title: "OOP Concepts in Java", link: "https://www.javatpoint.com/java-oops-concepts" },
      { title: "Spring Boot Tutorial", link: "https://spring.io/guides" },
      { title: "Java Projects", link: "https://www.geeksforgeeks.org/java-projects/" }
    ],
    python: [
      { title: "Python Basics", link: "https://www.w3schools.com/python/" },
      { title: "Python for Beginners", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
      { title: "NumPy Tutorial", link: "https://numpy.org/learn/" },
      { title: "Data Science with Python", link: "https://www.coursera.org/specializations/data-science-python" },
      { title: "Python Projects", link: "https://www.geeksforgeeks.org/python-projects/" }
    ],
    javascript: [
      { title: "JavaScript Basics", link: "https://www.w3schools.com/js/" },
      { title: "JS Full Course", link: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
      { title: "Async JavaScript", link: "https://www.youtube.com/watch?v=PoRJizFvM7s" },
      { title: "React.js Tutorial", link: "https://react.dev/learn" },
      { title: "JavaScript Projects", link: "https://www.freecodecamp.org/news/javascript-projects-for-beginners/" }
    ]
  },

  design: {
    uiux: [
      { title: "UI/UX Basics", link: "https://www.interaction-design.org/literature/topics/ui-design" },
      { title: "Figma UI Design", link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
      { title: "Adobe XD for Beginners", link: "https://www.youtube.com/watch?v=68w2VwalD5w" },
      { title: "Canva for Beginners", link: "https://www.canva.com/learn/design-elements/" },
      { title: "UX Portfolio Tips", link: "https://uxdesign.cc/" }
    ]
  },

  communication: {
    softskills: [
      { title: "Public Speaking", link: "https://www.ted.com/topics/public+speaking" },
      { title: "Effective Communication", link: "https://www.coursera.org/learn/wharton-communication-skills" },
      { title: "Body Language Skills", link: "https://www.youtube.com/watch?v=VV1cMmCKxmY" },
      { title: "Writing Skills", link: "https://www.edx.org/learn/english" },
      { title: "Leadership Skills", link: "https://www.coursera.org/specializations/leadership" }
    ]
  },

  career: {
    finance: [
      { title: "Personal Finance 101", link: "https://www.investopedia.com/personal-finance-4689740" },
      { title: "Career Planning", link: "https://www.coursera.org/learn/career-decisions" },
      { title: "Resume Writing", link: "https://www.linkedin.com/learning/topics/resume-writing" },
      { title: "Interview Preparation", link: "https://www.geeksforgeeks.org/how-to-prepare-for-an-interview/" },
      { title: "Time Management", link: "https://www.mindtools.com/pages/main/newMN_HTE.htm" }
    ]
  }
};

// ===== MODAL HANDLER =====
function showTutorials(category) {
  const modal = document.getElementById("tutorialModal");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");

  const categoryData = tutorialsData[category];
  if (!categoryData) return;

  title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Tutorials`;
  content.innerHTML = "";

  Object.keys(categoryData).forEach((subcat) => {
    const subHeader = document.createElement("h3");
    subHeader.textContent = subcat.charAt(0).toUpperCase() + subcat.slice(1);
    content.appendChild(subHeader);

    categoryData[subcat].forEach((tut) => {
      const div = document.createElement("div");
      div.classList.add("tutorial-item");
      div.innerHTML = `<a href="${tut.link}" target="_blank">🔗 ${tut.title}</a>`;
      content.appendChild(div);
    });

    content.appendChild(document.createElement("hr"));
  });

  modal.classList.add("show");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("tutorialModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.onclick = function (event) {
  const modal = document.getElementById("tutorialModal");
  if (event.target === modal) closeModal();
};
// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("responseMessage").innerText =
    `Thank you, ${name}! Your message has been sent successfully.`;
  document.getElementById("contactForm").reset();
});
