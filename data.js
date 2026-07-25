/* =============================================================
   YOUR CONTENT — this is the ONLY file you need to edit.
   Change the text between the quotes. Keep the commas and
   brackets exactly where they are.
   ============================================================= */

const DATA = {

  /* ---------- 1. BASICS ---------- */
  name:   "Hanna Mohamed Mohamed",
  role:   "Software Engineer",
  location: "Cairo, Egypt",
  email:  "hanabakeer24@gmail.com",
  phone:  "01061332117",

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
      role: "AI/QA Engineer — Graduation Project (Sponsored)",
      company: "Siemens EDA",
      logo: "",                          // or an image URL, or "" for none
      date: "October 2025 – July 2026",
      place: "Cairo, Egypt",
      points: [
        "Built an automated GUI test-generation system for Electron apps using Playwright, MCP, and Generative AI, with multiphase agentic orchestration and skill-based knowledge injection for deterministic LLM behavior.",
        "Built a self-healing Fixer Agent using closed-loop reasoning to diagnose and patch UI regressions via execution logs, accessibility snapshots, and Playwright traces.",
        "Implemented agent evaluation frameworks for trajectory accuracy and tool-calling reliability, with cross-platform runtime branching across VS Code and Theia.",
        "Leveraged Generative AI for autonomous UI exploration and Page Object Model generation, reducing manual scripting by 85%.",
      ],
      tags: ["Playwright", "MCP", "Generative AI", "LLM Agents", "Agent Evaluation", "Electron", "TypeScript"],
    },
    {
      role: "Python Instructor",
      company: "Mind Builder",
      logo: "",
      date: "July 2024 – September 2024",
      place: "Cairo, Egypt",
      points: [
        "Delivered structured programming instruction to ~20 students, mentoring them in problem-solving, OOP, and practical coding challenges.",
        "Designed weekly exercises and hands-on assignments, reviewing student code and giving individual feedback to track progress across the program.",
      ],
      tags: ["Python", "OOP", "Teaching", "Mentoring"],
    },
  ],


  /* ---------- 2b. PUBLICATIONS & RESEARCH ---------- */
  publications: [
    {
      title: "Agentic GUI Test Generation for Electron Applications",
      venue: "IEEE NILES 2026 — Novel Intelligent and Leading Emerging Sciences Conference",
      date: "2026",
      status: "Under Review",
      place: "Cairo, Egypt",
      points: [
        "Co-authored paper on agentic pipelines, self-healing agents, and LLM-based UI automation, submitted to IEEE NILES 2026.",
      ],
      link: "",                          // "" to hide the button
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
      title: "Github-IssueHawk",
      category: "AI & ML",              // must match one filter above
      image: "assets/Hawk.png",
      description: "Autonomous GitHub issue triage that earns trust before it acts. A self-hosted system that classifies incoming issues and flags duplicates with a locally fine-tuned 3B model, then runs in shadow mode — predicting on live traffic but never posting until its agreement rate proves it's reliable. Hits 0.79 macro F1 (+25% over baseline) at ~120ms per issue, fully offline.",
      tags: ["Python", "Ollama", "ChromaDB", "Fine-tuned 3B model", "Local embeddings"],
      code: "https://github.com/hannna24/Github-IssueHawk.git",
      demo: "",                          // leave "" to hide the Live demo button
    },
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
      title: "AWS Public Cloud Practitioner",
      issuer: "National Telecommunication Institute (NTI)",
      date: "August 2024",
      image: "assets/AWS_certificate.png",
      note: "A 90-hour training course on AWS and public cloud fundamentals — core compute, storage, networking, and security services and cloud deployment models. Delivered by NTI under Egypt's Ministry of Communications and Information Technology.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "Cloud Fundamentals"],
      link: "",
    },
    {
      title: "Embedded Systems Essentials Training Program",
      issuer: "Siemens",
      date: "2024",
      image: "assets/Siemens_certificate.png",
      note: "Covered microcontroller fundamentals — CPU architecture (Cortex-M, MPU, FPU, MMU), memory types, and interrupts — plus startup code, linker scripts, and the compilation process. Also RTOS fundamentals, communication protocols (UART, SPI, I2C, CAN, LIN), the HSM core, and AUTOSAR workflow, application layer, and COM stack.",
      skills: ["Embedded Systems", "Microcontrollers", "RTOS", "AUTOSAR", "ARM Cortex-M", "UART / SPI / I2C", "CAN / LIN"],
      link: "",
    },
    {
      title: "Full Stack Web Development (MERN Stack)",
      issuer: "AMIT — Association of Management and Information Technology",
      date: "June 2025",
      image: "assets/AMIT_certificate.png",
      note: "A 180-hour Full Stack Diploma: HTML5, CSS3, JavaScript, jQuery, Bootstrap, and OOP on the front end, and Node.js, Express, REST APIs, and MongoDB on the back end. Graduated with a grade of 98%.",
      skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB", "REST API", "jQuery", "Bootstrap"],
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
