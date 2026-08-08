export const profile = {
  name: "Justin Dwinata",
  role: "Informatics Student & IT Enthusiast",
  location: "Indonesia",
  email: "Justindwinata0@gmail.com",
  bio: "Third-year Informatics student at Mercu Buana University with interests in Web Development, Data Science, and Application Development.",
  intro: "Hi, I'm Justin — an Informatics student who turns ideas into working prototypes.",
  availability: "Open to internships",
  resume: "/cv/CV-Justin-Dwinata.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Justindwinata", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/justindwinata", icon: "linkedin" },
  { name: "Email", url: "mailto:Justindwinata0@gmail.com", icon: "mail" },
  { name: "WhatsApp", url: "https://wa.me/6282280004235", icon: "message" },
];

export const experiences = [
  {
    title: "Teknik Informatika",
    org: "Universitas Mercu Buana",
    period: "2022 — Present",
    type: "education",
    desc: "Studying programming, databases, networking, software engineering, data science, and AI.",
    tech: ["Programming", "Database", "Software Engineering", "Data Science"],
  },
  {
    title: "CRUD Product Management",
    org: "Java / Spring Boot",
    period: "Project",
    type: "project",
    desc: "Built a product management system with Java, Spring Boot, Thymeleaf, and MySQL.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
  },
  {
    title: "Computer Vision & AI",
    org: "AI / Vision",
    period: "Project",
    type: "project",
    desc: "Explored deep learning, OCR, and CCTV anomaly detection prototypes.",
    tech: ["Python", "TensorFlow", "OpenCV", "PaddleOCR"],
  },
  {
    title: "Pneumonia Detection",
    org: "TensorFlow / Streamlit",
    period: "Project",
    type: "project",
    desc: "Built a Chest X-Ray pneumonia detection demo with Grad-CAM visualization.",
    tech: ["Python", "TensorFlow", "Keras", "Streamlit"],
  },
  {
    title: "CareerBoost AI",
    org: "React / FastAPI",
    period: "Project",
    type: "project",
    desc: "CV analysis platform with PDF validation, ATS metadata, and HTML reports.",
    tech: ["React", "TypeScript", "FastAPI", "Python"],
  },
];

export const projects = [
  {
    id: 1,
    title: "CareerBoost AI",
    category: "Internship Platform",
    tech: ["React", "TypeScript", "FastAPI", "Python", "SQLite"],
    desc: "CV analysis platform for internship readiness with ATS metadata and HTML reports.",
    image: "/assets/project-thumbnails/careerboost-landscape.webp",
    demo: "/demos/careerboost-ai-demo.html",
  },
  {
    id: 2,
    title: "UsahaNaik",
    category: "Android App",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    desc: "Local-first Android app for Indonesian MSMEs with finance tracking and business reports.",
    image: "/assets/project-thumbnails/usahanaik-landscape.webp",
    demo: "/demos/usahanaik-demo.html",
  },
  {
    id: 3,
    title: "DataPulse",
    category: "Data Cleaning",
    tech: ["React", "TypeScript", "FastAPI", "Python"],
    desc: "CSV/Excel cleaning studio with quality profiling, rule preview, and export.",
    image: "/assets/project-thumbnails/datapulse-landscape.webp",
    demo: "/demos/datapulse-demo.html",
  },
  {
    id: 4,
    title: "CampusInsight",
    category: "Student Analytics",
    tech: ["React", "TypeScript", "FastAPI", "Python"],
    desc: "Academic analytics dashboard from transcripts with GPA summary and charts.",
    image: "/assets/project-thumbnails/campusinsight-landscape.webp",
    demo: "/demos/campusinsight-demo.html",
  },
  {
    id: 5,
    title: "JustBer",
    category: "Mobile Escrow",
    tech: ["Flutter", "Dart", "Supabase", "QRIS"],
    desc: "Flutter escrow MVP with contract rooms, QRIS simulation, and transaction chat.",
    image: "/assets/project-thumbnails/justber-landscape.webp",
    demo: "/demos/justber-demo-v2.html",
  },
  {
    id: 6,
    title: "Quiz Generator CCNA",
    category: "Learning Tool",
    tech: ["Python", "Flask", "Jupyter"],
    desc: "CCNA quiz app with random questions, instant feedback, and answer reviews.",
    image: "/assets/project-thumbnails/quiz-landscape.webp",
    demo: "/demos/quiz-generator-ccna-demo.html",
  },
  {
    id: 7,
    title: "MermaidGenerate",
    category: "AI Diagram",
    tech: ["Python", "Gradio", "PyTorch", "Mermaid.js"],
    desc: "AI-powered Mermaid diagram generator with Qwen2.5-Coder and Gradio UI.",
    image: "/assets/project-thumbnails/mermaidgenerate-landscape.webp",
    demo: "/demos/mermaidgenerate-demo.html",
  },
  {
    id: 8,
    title: "CCTV Anomaly Detection",
    category: "Computer Vision",
    tech: ["Python", "OpenCV", "Flask"],
    desc: "Hybrid anomaly detection for webcams with motion scoring and evidence frames.",
    image: "/assets/project-thumbnails/cctv-landscape.webp",
    demo: "/demos/cctv-anomaly-detection-demo.html",
  },
  {
    id: 9,
    title: "JobTrackr",
    category: "Job Platform",
    tech: ["React", "TypeScript", "FastAPI", "Python"],
    desc: "Job discovery and application tracker with saved opportunities and analytics.",
    image: "/assets/project-thumbnails/jobtrackr-landscape.webp",
    demo: "/demos/jobtrackr-demo.html",
  },
  {
    id: 10,
    title: "Toko Pintar",
    category: "Spring Boot App",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    desc: "Store management with admin dashboard, CRUD products, and validation.",
    image: "/assets/project-thumbnails/tokopintar-landscape.webp",
    demo: "/demos/toko-pintar-demo.html",
  },
];

export const skills = [
  {
    group: "Frontend",
    tools: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    group: "Backend",
    tools: ["Python", "Flask", "FastAPI", "Java", "Spring Boot", "MySQL"],
  },
  {
    group: "Data & ML",
    tools: ["TensorFlow", "Keras", "Pandas", "NumPy", "Data Analysis"],
  },
  {
    group: "Computer Vision",
    tools: ["OpenCV", "PaddleOCR", "Grad-CAM", "Optical Flow"],
  },
  {
    group: "Mobile",
    tools: ["Flutter", "Dart", "Supabase", "QRIS"],
  },
  {
    group: "Tools",
    tools: ["Git", "GitHub", "VS Code", "Deployment"],
  },
];

export const certificates = [
  { title: "Certificate 01", image: "/sertifikat/sertifikat-01.webp" },
  { title: "Certificate 02", image: "/sertifikat/sertifikat-02.webp" },
  { title: "Certificate 03", image: "/sertifikat/sertifikat-03.webp" },
  { title: "Certificate 04", image: "/sertifikat/sertifikat-04.webp" },
  { title: "Certificate 05", image: "/sertifikat/sertifikat-05.webp" },
  { title: "Certificate 06", image: "/sertifikat/sertifikat-06.webp" },
  { title: "Certificate 07", image: "/sertifikat/sertifikat-07.webp" },
  { title: "Certificate 08", image: "/sertifikat/sertifikat-08.webp" },
  { title: "Certificate 09", image: "/sertifikat/sertifikat-09.webp" },
  { title: "Certificate 10", image: "/sertifikat/sertifikat-10.webp" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];