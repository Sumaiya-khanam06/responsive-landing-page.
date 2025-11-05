const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ======== Sample Tutorial Data ========
const tutorials = [
  {
    title: "HTML Basics",
    description: "Learn HTML structure and basic tags.",
    link: "https://www.w3schools.com/html/"
  },
  {
    title: "CSS Flexbox",
    description: "Master layouts with Flexbox.",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
  },
  {
    title: "JavaScript Essentials",
    description: "Understand loops, functions, and DOM manipulation.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
  },
  {
    title: "Python for Beginners",
    description: "Start your Python journey easily.",
    link: "https://www.python.org/about/gettingstarted/"
  }
];

// ======== API Endpoint ========
app.get("/api/tutorials", (req, res) => {
  res.json(tutorials);
});

// ======== Default Route ========
app.get("/", (req, res) => {
  res.send("EduConnect Backend is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
