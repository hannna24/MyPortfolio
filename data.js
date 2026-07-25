/* =============================================================
   YOUR CONTENT — this is the ONLY file you need to edit.
   Change the text between the quotes. Keep the commas and
   brackets exactly where they are.
   ============================================================= */

const DATA = {

  /* ---------- 1. BASICS ---------- */
  name:   "Hanna Mohamed Mohamed",
  role:   "Applied AI & Agentic Systems Engineer",
  location: "Cairo, Egypt",
  email:  "hanabakeer24@gmail.com",
  phone:  "01061332117",

  // Put your photo in the assets folder and keep this filename,
  // or paste any image URL here.
  photo:  "assets/profile.jpg",

  bio: "Computer Engineering graduate from Ain Shams University, specializing in Applied AI and agentic systems. I build LLM pipelines, autonomous agents, and full-stack applications — most recently at Siemens EDA, engineering agentic GUI-testing systems. I like turning research-grade AI ideas into reliable, production-ready tools.",

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
      logo: "assets/siemens-logo.png",   // or an image URL, or "" for none
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
      logo: "assets/mindbuilder-logo.png",
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
      degree: "Bachelor of Computer Engineering & Software Systems",
      school: "Ain Shams University, Faculty of Engineering",
      logo: "assets/ainshams-logo.png",
      date: "October 2021 – June 2026",
      place: "Cairo, Egypt",
      points: [
        "GPA: 3.37 — graduated 16th in class, earning an A+ for the graduation project.",
        "Focus on Applied AI, agentic systems, and full-stack software engineering.",
      ],
    },
    {
      degree: "Dual Degree Program (B.Eng.)",
      school: "University of East London, Faculty of Engineering",
      logo: "assets/uel-logo.png",
      date: "October 2021 – June 2026",
      place: "London, United Kingdom",
      points: [
        "Dual-degree program run jointly with Ain Shams University.",
      ],
    },
  ],


  /* ---------- 4. SKILLS ---------- */
  // level is the percentage bar: 0 to 100.
  skills: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 95,
      note: "My primary language for LLM pipelines, autonomous agents (LangChain / LangGraph), fine-tuning, and backend services.",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      level: 85,
      note: "Fine-tune LLMs with PEFT/LoRA & QLoRA — e.g. Qwen2.5-3B on 4k+ GitHub issues for IssueHawk.",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      level: 88,
      note: "Build async backends with JWT auth, rate-limited LLM calls, and scheduled agent pipelines.",
    },
    {
      name: "Playwright",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
      level: 95,
      note: "Automate GUI testing and web scraping with agentic orchestration, self-healing agents, and trajectory evaluation.",
    },
    {
      name: "LangChain",
      icon: "https://cdn.simpleicons.org/langchain/2563eb",
      level: 80,
      note: "Build agentic pipelines with tool calling, RAG, and multi-step reasoning for autonomous LLM agents.",
    },
    {
      name: "RAG",
      icon: "assets/icon-rag.svg",
      level: 85,
      note: "Retrieval-Augmented Generation with ChromaDB and sentence-transformers to ground LLM answers in real data.",
    },
    {
      name: "MCP (Model Context Protocol)",
      icon: "https://cdn.simpleicons.org/modelcontextprotocol/2563eb",
      level: 88,
      note: "Wire LLM agents to external tools and data through MCP servers — used it for agentic GUI test generation.",
    },
    {
      name: "LLM Orchestration",
      icon: "assets/icon-orchestration.svg",
      level: 88,
      note: "Coordinate multiple LLMs, agents, and tools into reliable multi-step, multiphase agentic workflows.",
    },
    {
      name: "Tool Calling",
      icon: "assets/icon-toolcalling.svg",
      level: 88,
      note: "Enable LLMs to invoke external tools and APIs, with evaluation of tool-calling reliability.",
    },
    {
      name: "Vector Databases (ChromaDB)",
      icon: "assets/icon-chromadb.svg",
      level: 85,
      note: "Store and query embeddings for semantic search and RAG pipelines.",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 80,
      note: "Type-safe agent tooling and Playwright automation across Electron, VS Code, and Theia.",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 80,
      note: "Front-ends for my full-stack apps — dashboards, job feeds, and admin panels.",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: 78,
      note: "Persistence for shadow-mode logging, stored job data, and app state behind FastAPI / Node backends.",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: 80,
      note: "Containerize and deploy full stacks (FastAPI, Postgres, Ollama) via Docker Compose to production.",
    },
  ],
  // Tip: any tech icon works — swap the name in the URL, e.g.
  // .../icons/tensorflow/tensorflow-original.svg

  // Grouped "toolbox" chips shown below the skill bars — no icons or levels needed.
  // Add/remove items freely; each group renders as a labeled row of pills.
  skillGroups: [
    { name: "Programming Languages",        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL", "Bash/Shell"] },
    { name: "AI & Agentic Systems",         items: ["LangChain"
      , "LangGraph", "RAG", "AI Agents", "MCP", "Prompt Engineering", "LLM Orchestration", "Tool Calling", "Agent Evaluation", "Embeddings", "Vector Databases (ChromaDB)", "Groq", "Ollama"] },
    { name: "Testing & Automation",         items: ["Playwright", "Automated GUI Testing", "Self-Healing Test Agents", "Page Object Model", "Trajectory & Tool-Calling Evaluation"] },
    { name: "Model Training & Fine-Tuning", items: ["PyTorch", "PEFT / LoRA", "QLoRA", "TRL", "Hugging Face", "GGUF Quantization", "llama.cpp", "Model Evaluation"] },
    { name: "Web & Databases",              items: ["FastAPI", "React", "Node.js", "Express.js", "REST APIs", "Tailwind CSS", "PostgreSQL", "MongoDB"] },
    { name: "Cloud & DevOps",               items: ["AWS", "Docker", "Git", "CI/CD", "Render", "Sentry", "Langfuse"] },
  ],


  /* ---------- 5. PROJECTS ---------- */
  // Rename these categories to whatever fits your work.
  projectFilters: ["AI & ML", "Software", "IoT"],

  projects: [
    {
      title: "IssueHawk — Fine-Tuned Issue Triage Agent",
      category: "AI & ML",              // must match one filter above
      image: "assets/Hawk.jpg",
      description: "Autonomous GitHub issue triage that earns trust before it acts. Fine-tuned Qwen2.5-3B with QLoRA on 4,000+ labeled issues to reach 0.79 macro F1 — a 25% gain over the Llama 3.3 70B zero-shot baseline. Adds ChromaDB semantic duplicate detection and a LangGraph agent, runs locally via GGUF quantization (1.8 GB) and Ollama at sub-100ms, and ships as a GitHub App with HMAC-verified webhooks that logged 86% agreement across 300+ shadow-mode predictions before automating anything. Langfuse tracks per-issue cost and latency.",
      tags: ["PyTorch", "QLoRA / PEFT", "TRL", "llama.cpp", "LangGraph", "ChromaDB", "FastAPI", "PostgreSQL", "Langfuse", "Ollama", "Docker"],
      code: "https://github.com/hannna24/Github-IssueHawk.git",
      demo: "",                          // leave "" to hide the Live demo button
    },
    {
      title: "JobRadar AI — Personalized Real-Time Job Agent",
      category: "AI & ML",              // must match one filter above
      image: "assets/JobRadarProject.jpg",
      description: "An autonomous job-search agent that scrapes Wuzzuf and Bayt via Playwright and aggregates Adzuna API listings, scoring each posting against your profile with Llama 3.3 70B on Groq. A RAG pipeline with ChromaDB and sentence-transformers enables natural-language search grounded in real stored jobs, while an async FastAPI backend with JWT auth runs an APScheduler pipeline every 30 minutes — emailing alerts for high-scoring matches. Deployed full-stack (React, PostgreSQL) via Docker on Render.",
      tags: ["FastAPI", "LangChain", "LangGraph", "Playwright", "ChromaDB", "Groq (Llama 3.3 70B)", "RAG", "React", "PostgreSQL", "Docker"],
      code: "https://github.com/hannna24/JobRadar.git",
      demo: "",                          // leave "" to hide the Live demo button
    },
    {
      title: "E-Commerce Website",
      category: "Software",             // must match one filter above
      image: "assets/E-commerce.png",
      description: "A full-stack MERN e-commerce platform with JWT authentication, product and order management APIs, product browsing and search, a shopping cart with order tracking, and a responsive admin dashboard for managing products and inventory.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
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
      image: "assets/AWS_certificate.jpg",
      note: "A 90-hour training course on AWS and public cloud fundamentals — core compute, storage, networking, and security services and cloud deployment models. Delivered by NTI under Egypt's Ministry of Communications and Information Technology.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "Cloud Fundamentals"],
      link: "",
    },
    {
      title: "Embedded Systems Essentials Training Program",
      issuer: "Siemens",
      date: "2024",
      image: "assets/Siemens_certificate.jpg",
      note: "Covered microcontroller fundamentals — CPU architecture (Cortex-M, MPU, FPU, MMU), memory types, and interrupts — plus startup code, linker scripts, and the compilation process. Also RTOS fundamentals, communication protocols (UART, SPI, I2C, CAN, LIN), the HSM core, and AUTOSAR workflow, application layer, and COM stack.",
      skills: ["Embedded Systems", "Microcontrollers", "RTOS", "AUTOSAR", "ARM Cortex-M", "UART / SPI / I2C", "CAN / LIN"],
      link: "",
    },
    {
      title: "Full Stack Web Development (MERN Stack)",
      issuer: "AMIT — Association of Management and Information Technology",
      date: "June 2025",
      image: "assets/AMIT_certificate.jpg",
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
