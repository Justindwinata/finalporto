export const developer = {
  name: "Justin Dwinata",
  shortName: "Justin",
  fullName: "Justin Dwinata",
  title: "Informatics Student & IT Enthusiast",
  location: "Indonesia",
  email: "Justindwinata0@gmail.com",
  description:
    "Third-year Informatics Engineering student at Universitas Mercu Buana with competencies in Web Development, Data Analysis, and Application Development.",
  about:
    "Hi, I am Justin Dwinata, an Informatics student who enjoys turning technology ideas into usable digital products. My current focus is web development, backend logic, data, AI, and computer vision. I like building prototypes that are not only functional, but also clear to test, easy to explain, and ready to present as real project demos.",
  highlights: [
    "Mercu Buana University",
    "Informatics Student",
    "Open to IT Internship",
  ],
  resumeUrl: "/cv/CV-Justin-Dwinata.pdf",
};

export const socials = [
  { platform: "GitHub", url: "https://github.com/Justindwinata", label: "@Justindwinata" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/justindwinata", label: "Justin Dwinata" },
  { platform: "Email", url: "mailto:Justindwinata0@gmail.com", label: "Justindwinata0@gmail.com" },
  { platform: "WhatsApp", url: "https://wa.me/6282280004235", label: "+62 822 8000 4235" },
  { platform: "Instagram", url: "https://instagram.com/justindwnt", label: "@justindwnt" },
];

export const experiences = [
  {
    id: "edu",
    title: "Teknik Informatika",
    org: "Universitas Mercu Buana",
    period: "2022 – Present",
    location: "Indonesia",
    description:
      "Studying programming fundamentals, databases, networking, software engineering, data science, and AI through academic coursework and independent projects.",
    tech: ["Programming", "Database", "Software Engineering", "Data Science"],
    type: "education" as const,
  },
  {
    id: "crud",
    title: "CRUD Product Management",
    org: "Project-based Learning",
    period: "Java / Spring Boot",
    location: "Indonesia",
    description:
      "Built a product management system using Java, Spring Boot, Thymeleaf, and MySQL with create, read, update, delete operations, data tables, and form validation.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    type: "project" as const,
  },
  {
    id: "cv-ai",
    title: "Computer Vision & AI Prototype",
    org: "Academic / Personal Project",
    period: "AI / Vision",
    location: "Indonesia",
    description:
      "Explored deep learning models, OCR, CCTV anomaly detection, and result visualization to help users understand model outputs more clearly.",
    tech: ["Python", "TensorFlow", "OpenCV", "PaddleOCR", "Streamlit"],
    type: "project" as const,
  },
  {
    id: "web",
    title: "Web & Portfolio Development",
    org: "Personal Portfolio",
    period: "Static Deploy",
    location: "Indonesia",
    description:
      "Built a portfolio website to showcase profile, skills, projects, CV, static demos, and contact information in a responsive and deployment-ready format.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    type: "project" as const,
  },
  {
    id: "pneumonia",
    title: "Pneumonia Detection Web App",
    org: "AI / Medical Image Analysis",
    period: "TensorFlow / Streamlit",
    location: "Indonesia",
    description:
      "Created a Chest X-Ray pneumonia detection demo with prediction, confidence scores, brief reports, and Grad-CAM visualization.",
    tech: ["Python", "TensorFlow", "Keras", "Streamlit", "Grad-CAM"],
    type: "project" as const,
  },
  {
    id: "ocr",
    title: "OCR Receipt Document Understanding",
    org: "Document AI / OCR",
    period: "PaddleOCR / OpenCV",
    location: "Indonesia",
    description:
      "Built a receipt reading prototype to convert document images into structured data like merchant, items, tax, and total.",
    tech: ["Python", "PaddleOCR", "OpenCV", "Data Processing"],
    type: "project" as const,
  },
  {
    id: "cctv",
    title: "CCTV Anomaly Detection",
    org: "Computer Vision Prototype",
    period: "OpenCV / JavaScript",
    location: "Indonesia",
    description:
      "Built a CCTV anomaly detection simulation with event status, confidence, bounding boxes, and incident timeline.",
    tech: ["Python", "OpenCV", "Computer Vision", "JavaScript"],
    type: "project" as const,
  },
  {
    id: "justber",
    title: "Justber Aplikasi Rekber",
    org: "Mobile App / Product Flow",
    period: "Flutter / Supabase",
    location: "Indonesia",
    description:
      "Designed an escrow application prototype with contract room, QRIS payment, secured funds, item confirmation, dispute, and withdrawal.",
    tech: ["Flutter", "Dart", "Supabase", "QRIS", "Escrow Flow"],
    type: "project" as const,
  },
  {
    id: "careerboost",
    title: "CareerBoost AI",
    org: "Internship Readiness Platform",
    period: "React / FastAPI",
    location: "Indonesia",
    description:
      "Built a CV analysis platform with PDF validation, text extraction, deterministic ATS metadata, SQLite history, and standalone HTML reports.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    type: "project" as const,
  },
];

export const projects = [
  {
    id: 1,
    slug: "careerboost",
    title: "CareerBoost AI",
    category: "Internship Readiness Platform",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    image: "/assets/project-thumbnails/careerboost-landscape.webp",
    mobileImage: "/assets/project-thumbnails/careerboost-mobile.webp",
    demoUrl: "/demos/careerboost-ai-demo.html",
    description:
      "CV analysis platform for internship readiness featuring PDF upload, target alignment, ATS metadata, improvement guidance, local history, and HTML report generation.",
  },
  {
    id: 2,
    slug: "usahanaik",
    title: "UsahaNaik",
    category: "Android UMKM Growth Planner",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "MVVM"],
    image: "/assets/project-thumbnails/usahanaik-landscape.webp",
    mobileImage: "/assets/project-thumbnails/usahanaik-mobile.webp",
    demoUrl: "/demos/usahanaik-demo.html",
    description:
      "Local-first Android app for Indonesian MSMEs with business setup, finance tracking, health score, weekly plan, content planner, reminders, and business reports.",
  },
  {
    id: 3,
    slug: "datapulse",
    title: "DataPulse",
    category: "CSV & Excel Cleaner",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    image: "/assets/project-thumbnails/datapulse-landscape.webp",
    mobileImage: "/assets/project-thumbnails/datapulse-mobile.webp",
    demoUrl: "/demos/datapulse-demo.html",
    description:
      "Data cleaning studio for CSV/Excel with upload validation, structure detection, quality profiling, rule preview, CSV export, templates, and HTML reports.",
  },
  {
    id: 4,
    slug: "campusinsight",
    title: "CampusInsight",
    category: "Student Performance Analytics",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    image: "/assets/project-thumbnails/campusinsight-landscape.webp",
    mobileImage: "/assets/project-thumbnails/campusinsight-mobile.webp",
    demoUrl: "/demos/campusinsight-demo.html",
    description:
      "Academic analytics dashboard from CSV and PDF transcripts featuring GPA summary, semester charts, risk review, saved analyses, and HTML reports.",
  },
  {
    id: 5,
    slug: "justber",
    title: "JustBer",
    category: "Flutter Escrow MVP",
    technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "Supabase", "QRIS"],
    image: "/assets/project-thumbnails/justber-landscape.webp",
    mobileImage: "/assets/project-thumbnails/justber-mobile.webp",
    demoUrl: "/demos/justber-demo-v2.html",
    description:
      "Flutter escrow MVP featuring contract rooms, buyer tokens, transaction chat, QRIS simulation, secured balances, fund release, withdrawals, and disputes.",
  },
  {
    id: 6,
    slug: "quiz",
    title: "Quiz Generator CCNA",
    category: "Flask Learning Tool",
    technologies: ["Python", "Flask", "Jupyter Notebook", "HTML", "CSS"],
    image: "/assets/project-thumbnails/quiz-landscape.webp",
    mobileImage: "/assets/project-thumbnails/quiz-mobile.webp",
    demoUrl: "/demos/quiz-generator-ccna-demo.html",
    description:
      "CCNA quiz application built on Flask with random question generation, answer choices, instant feedback, final scores, and answer reviews.",
  },
  {
    id: 7,
    slug: "mermaidgenerate",
    title: "MermaidGenerate",
    category: "AI Diagram Generator",
    technologies: ["Python", "Gradio", "Transformers", "PyTorch", "LoRA", "Mermaid.js"],
    image: "/assets/project-thumbnails/mermaidgenerate-landscape.webp",
    mobileImage: "/assets/project-thumbnails/mermaidgenerate-mobile.webp",
    demoUrl: "/demos/mermaidgenerate-demo.html",
    description:
      "AI-powered Mermaid Mind Map and Venn Diagram generator with Qwen2.5-Coder, Gradio UI, dataset validation, LoRA/QLoRA training, and preview rendering.",
  },
  {
    id: 8,
    slug: "cctv",
    title: "CCTV Anomaly Detection",
    category: "Computer Vision Monitoring",
    technologies: ["Python", "OpenCV", "Flask", "Optical Flow", "Motion Detection"],
    image: "/assets/project-thumbnails/cctv-landscape.webp",
    mobileImage: "/assets/project-thumbnails/cctv-mobile.webp",
    demoUrl: "/demos/cctv-anomaly-detection-demo.html",
    description:
      "Hybrid CCTV anomaly detection for webcams, videos, or RTSP with motion scoring, optical flow, evidence frames, CSV logging, and HTML reports.",
  },
  {
    id: 9,
    slug: "jobtrackr",
    title: "JobTrackr",
    category: "Job Discovery & Application Tracker",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    image: "/assets/project-thumbnails/jobtrackr-landscape.webp",
    mobileImage: "/assets/project-thumbnails/jobtrackr-mobile.webp",
    demoUrl: "/demos/jobtrackr-demo.html",
    description:
      "Job discovery and application tracking platform with query builder, safe job-board links, saved opportunities, analytics, pipeline, and career reports.",
  },
  {
    id: 10,
    slug: "tokopintar",
    title: "Toko Pintar",
    category: "Spring Boot Product Management",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "Spring Data JPA", "MySQL"],
    image: "/assets/project-thumbnails/tokopintar-landscape.webp",
    mobileImage: "/assets/project-thumbnails/tokopintar-mobile.webp",
    demoUrl: "/demos/toko-pintar-demo.html",
    description:
      "Spring Boot store management application with admin login, dashboard, CRUD products, duplicate validation, filtering, status, and restock priority.",
  },
];

export const certificates = [
  { id: 1, title: "Learning Certificate 01", image: "/sertifikat/sertifikat-01.webp" },
  { id: 2, title: "Learning Certificate 02", image: "/sertifikat/sertifikat-02.webp" },
  { id: 3, title: "Learning Certificate 03", image: "/sertifikat/sertifikat-03.webp" },
  { id: 4, title: "Learning Certificate 04", image: "/sertifikat/sertifikat-04.webp" },
  { id: 5, title: "Learning Certificate 05", image: "/sertifikat/sertifikat-05.webp" },
  { id: 6, title: "Learning Certificate 06", image: "/sertifikat/sertifikat-06.webp" },
  { id: 7, title: "Learning Certificate 07", image: "/sertifikat/sertifikat-07.webp" },
  { id: 8, title: "Learning Certificate 08", image: "/sertifikat/sertifikat-08.webp" },
  { id: 9, title: "Learning Certificate 09", image: "/sertifikat/sertifikat-09.webp" },
  { id: 10, title: "Learning Certificate 10", image: "/sertifikat/sertifikat-10.webp" },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    summary: "Building responsive interfaces for portfolios, dashboards, and project demos.",
    tools: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Responsive UI"],
  },
  {
    id: "backend",
    title: "Backend & Database",
    summary: "Creating APIs, CRUD operations, data validation, and database integrations.",
    tools: ["Python", "Flask", "FastAPI", "Java", "Spring Boot", "MySQL", "SQLite"],
  },
  {
    id: "datasci",
    title: "Data Science & ML",
    summary: "Processing data, building models, reading evaluations, and composing reports.",
    tools: ["Data Analysis", "TensorFlow", "Keras", "Model Evaluation", "Pandas", "NumPy"],
  },
  {
    id: "cv",
    title: "Computer Vision & OCR",
    summary: "Building visual detection prototypes, OCR, and model evidence visualization.",
    tools: ["OpenCV", "PaddleOCR", "Grad-CAM", "CCTV Detection", "Optical Flow"],
  },
  {
    id: "mobile",
    title: "Mobile & Product Flow",
    summary: "Designing mobile app flows and product feature simulations for easy testing.",
    tools: ["Flutter", "Dart", "Supabase", "QRIS Flow", "Escrow Flow"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    summary: "Using clean development workflows for experiments and documentation.",
    tools: ["Git", "GitHub", "VS Code", "Debugging", "Deployment"],
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
