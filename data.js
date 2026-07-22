/* =============================================================
   YOUR CONTENT — this is the ONLY file you need to edit.
   Change the text between the quotes. Keep the commas and
   brackets exactly where they are.
   ============================================================= */

const DATA = {

  /* ---------- 1. BASICS ---------- */
  name:   "Your Name",
  role:   "Software Engineer",
  location: "Cairo, Egypt",
  email:  "you@example.com",
  phone:  "+20 100 000 0000",

  // Put your photo in the assets folder and keep this filename,
  // or paste any image URL here.
  photo:  "assets/profile.jpg",

  bio: "Short paragraph about who you are and what you do. Two or three lines is plenty — mention your focus area and the kind of problems you like solving.",

  // Delete any line you don't use.
  links: {
    github:   "https://github.com/hannna24",
    linkedin: "https://www.linkedin.com/in/hanna224/",
  },


  /* ---------- 2. WORK EXPERIENCE ---------- */
  // Newest job first. Copy a whole { ... } block to add another.
  experience: [
    {
      role: "Software Engineer",
      company: "Company Name",
      logo: "assets/company1.png",       // or an image URL, or "" for none
      date: "July 2024 - Present",
      place: "Cairo, Egypt",
      points: [
        "What you built and the impact it had. Lead with the result — numbers land harder than adjectives.",
        "A second paragraph about another area of the role: the tools, the scale, who used it.",
      ],
      tags: ["Python", "React", "PostgreSQL", "Docker"],
    },
    {
      role: "Junior Developer",
      company: "Another Company",
      logo: "assets/company2.png",
      date: "March 2023 - June 2024",
      place: "Cairo, Egypt",
      points: [
        "Describe what you owned here and what changed because of it.",
      ],
      tags: ["JavaScript", "Node.js", "REST APIs"],
    },
  ],


  /* ---------- 3. EDUCATION ---------- */
  education: [
    {
      degree: "Bachelor of Engineering",
      school: "University Name",
      logo: "assets/university.png",
      date: "Expected 2026",
      place: "Cairo, Egypt",
      points: [
        "Major: Computer Engineering & Software Systems.",
        "Minor: AI & Data Science.",
      ],
    },
    {
      degree: "High School",
      school: "School Name",
      logo: "assets/school.png",
      date: "Graduated 2021",
      place: "Cairo, Egypt",
      points: [
        "Graduated ranked 3rd overall in class.",
      ],
    },
  ],


  /* ---------- 4. SKILLS ---------- */
  // level is the percentage bar: 0 to 100.
  skills: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 90,
      note: "One line on how you actually use it — the specific work, not the definition.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 85,
      note: "One line on how you actually use it.",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 80,
      note: "One line on how you actually use it.",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      level: 80,
      note: "One line on how you actually use it.",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: 75,
      note: "One line on how you actually use it.",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: 70,
      note: "One line on how you actually use it.",
    },
  ],
  // Tip: any tech icon works — swap the name in the URL, e.g.
  // .../icons/tensorflow/tensorflow-original.svg


  /* ---------- 5. PROJECTS ---------- */
  // Rename these categories to whatever fits your work.
  projectFilters: ["AI & ML", "Software", "IoT"],

  projects: [
    {
      title: "JobRadar AI",
      category: "AI & ML",              // must match one filter above
      image: "assets/JobRadarProject.png",
      description: "A personalized job-alert web app that fetches real postings from Adzuna and Remotive, then uses an LLM (Groq / Llama 3.3 70B) to score how well each one matches your profile and returns a ranked feed.",
      tags: ["Python", "FastAPI", "Groq (Llama 3.3 70B)", "httpx", "uvicorn", "Pydantic", "Adzuna API", "Remotive API", "LLM scoring"],
      code: "https://github.com/hannna24/JobRadar.git",
      demo: "",                          // leave "" to hide the Live demo button
    },
    {
      title: "E-Commerce Website",
      category: "Software",             // must match one filter above
      image: "assets/E-commerce.png",
      description: "A full-stack MERN e-commerce platform with a responsive storefront, JWT authentication, product browsing and search, a shopping cart with order tracking, and an admin dashboard for managing products and inventory.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "JavaScript", "CSS"],
      code: "https://github.com/hannna24/E-Commerce-Website.git",
      demo: "",                          // leave "" to hide the Live demo button
    },
    
  ],


  /* ---------- 6. CERTIFICATES ---------- */
  certificates: [
    {
      title: "Certificate Name",
      issuer: "Issuing Organization",
      date: "June 2026",
      image: "assets/cert1.png",
      note: "One or two lines on what the course covered.",
      skills: ["Skill One", "Skill Two"],
      link: "https://link-to-certificate.com",   // "" to hide the button
    },
    {
      title: "Another Certificate",
      issuer: "Issuing Organization",
      date: "May 2026",
      image: "assets/cert2.png",
      note: "One or two lines on what the course covered.",
      skills: ["Skill One", "Skill Two"],
      link: "",
    },
  ],


  /* ---------- 7. SECTION SUBTITLES ---------- */
  subtitles: {
    experience: "My professional journey so far",
    education:  "My academic background",
    skills:     "Tools and technologies I work with",
    projects:   "Things I've built",
    certificates: "Courses and credentials I've completed",
    contact:    "I'm always open to new opportunities and collaborations.",
    contactBlurb: "Whether you have a project in mind, need a hand with something technical, or just want to talk shop — send me a message.",
    certBlurb: "Consistently expanding my expertise through certifications and continuous learning.",
  },

};
