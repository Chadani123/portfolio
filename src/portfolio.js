import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Chadani Acharya",
  title: "Howdy, I'm Chadani",
  subTitle:
    "Program + product delivery lead with a QA backbone. I’ve managed 35+ Agile sprints and now lead accessibility remediation at Texas A&M (10,000+ files), coordinating a 20+ person team and 50+ trainings. I turn messy requirements into clear scope, smooth delivery, and reliable quality through Agile best practices, stakeholder alignment, and strong cross-functional collaboration.",
  resumeLink:
    "https://drive.google.com/file/d/1qYz5bquw8HrLQF4zR0ufTD8JV0uBa81t/preview",
  displayGreeting: true,
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/chadani-acharya/",
  gmail: "acharyachadani00@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=xFYnYQ0AAAAJ&hl=en",
  github: "https://github.com/Chadani123",
  facebook: "https://www.facebook.com/chadani.acharya.94",
  instagram: "https://www.instagram.com/chadaniacharya/",
  display: true,
};

const skillsSection = {
  subTitle: "A structured view of how I think, build, and deliver products",
  categories: [
    {
      title: "Strategy & Product",
      image: "/images/skills/strategy-product.png",
      groups: [
        {
          label: "Product Strategy",
          items: [
            "Roadmap Development",
            "MVP Definition",
            "GTM Strategy",
            "OKRs & KPI Setting"
          ]
        },
        {
          label: "Strategic Frameworks",
          items: [
            "Business Model Canvas",
            "Porter’s Five Forces",
            "Product Canvas",
            "SWOT Analysis"
          ]
        },
        {
          label: "Prioritization",
          items: [
            "MoSCoW Framework",
            "RICE Scoring",
            "Requirements Gathering",
            "Stakeholder Alignment"
          ]
        },
        {
          label: "Market Analysis",
          items: [
            "Market & Competitive Research",
            "User Persona Development",
            "Jobs-to-be-Done (JTBD)"
          ]
        },
        {
          label: "Tools",
          items: ["Lucidchart", "Whimsical", "Figma", "Notion"]
        }
      ]
    },

    {
      title: "Delivery & Execution",
      image: "/images/skills/delivery-execution.png",
      groups: [
        {
          label: "Agile Methodology",
          items: [
            "Scrum Framework",
            "Kanban",
            "Lean",
            "Hybrid Waterfall",
            "Ceremonies (Standups, Retrospectives)"
          ]
        },
        {
          label: "Planning & Lifecycle",
          items: [
            "Sprint Planning",
            "Backlog Grooming & Refinement",
            "SDLC",
            "Release Coordination"
          ]
        },
        {
          label: "Documentation",
          items: [
            "User Stories & Acceptance Criteria",
            "PRDs",
            "Resource Allocation",
            "Milestone Tracking"
          ]
        },
        {
          label: "Leadership",
          items: [
            "Cross-functional Collaboration",
            "Risk Mitigation & Management",
            "Dependency Mapping",
            "Stakeholder Communication"
          ]
        },
        {
          label: "Tools",
          items: [
            "Jira",
            "Trello",
            "Microsoft Project",
            "Slack",
            "MS Teams",
            "Smartsheet"
          ]
        }
      ]
    },

    {
      title: "Quality & Accessibility",
      image: "/images/skills/quality-accessibility.png",
      groups: [
        {
          label: "Quality Assurance",
          items: [
            "User Acceptance Testing (UAT)",
            "Regression Testing",
            "Functional Testing",
            "Test Plan Development",
            "Bug Lifecycle Management",
            "Defect Triage"
          ]
        },
        {
          label: "Accessibility Compliance",
          items: [
            "WCAG 2.1 / 2.2 AA",
            "ADA / Section 508",
            "Inclusive Design Mindset"
          ]
        },
        {
          label: "Accessibility Auditing",
          items: [
            "Screen Reader Testing",
            "Keyboard Navigation Testing",
            "Color Contrast Analysis",
            "Alt-Text Optimization",
            "Accessible Document Remediation (PDF, Word, PPT)"
          ]
        },
        {
          label: "Process",
          items: [
            "Definition of Done (DoD)",
            "QA Documentation",
            "Test Case Writing"
          ]
        },
        {
          label: "Tools",
          items: [
            "Git / GitHub",
            "Postman",
            "VS Code",
            "Browser DevTools",
            "WAVE",
            "axe DevTools",
            "Colour Contrast Analyzer",
            "NVDA",
            "VoiceOver",
            "JAWS (familiarity)"
          ]
        }
      ]
    },

    {
      title: "Data & Technical Foundations",
      image: "/images/skills/data-technical.png",
      groups: [
        {
          label: "Data Analytics",
          items: [
            "SQL (Joins, Window Functions)",
            "Python for Data Analysis",
            "Data Visualization",
            "Dashboarding",
            "AARRR & North Star Metrics"
          ]
        },
        {
          label: "Technical Architecture",
          items: [
            "REST APIs (Basic Familiarity)",
            "SDLC",
            "ETL Processes",
            "Version Control"
          ]
        },
        {
          label: "Web Foundations",
          items: [
            "HTML5 / CSS3 (Accessibility-first)",
            "Cloud Basics (AWS / Azure)",
            "Responsive Design"
          ]
        },
        {
          label: "Databases",
          items: [
            "MySQL",
            "PostgreSQL",
            "MariaDB",
            "MongoDB"
          ]
        },
        {
          label: "Tools",
          items: [
            "Tableau",
            "Excel (Power Query, Pivot)",
            "Google Analytics",
            "Postman",
            "VS Code",
            "Git / GitHub",
            "Jupyter Notebooks"
          ]
        }
      ]
    },

    {
      title: "UX Research & Design",
      image: "/images/skills/ux-research-design.png",
      groups: [
        {
          label: "User Research",
          items: [
            "User Interviews",
            "Usability Testing",
            "Surveys",
            "Card Sorting",
            "User Persona Development"
          ]
        },
        {
          label: "Design Strategy",
          items: [
            "Information Architecture",
            "User Journey Mapping",
            "Task Analysis",
            "Storyboarding"
          ]
        },
        {
          label: "Prototyping & Interaction",
          items: [
            "Low-Fidelity Wireframing",
            "High-Fidelity Prototyping",
            "Responsive Design",
            "Design Systems (Familiarity)"
          ]
        },
        {
          label: "Inclusive UX",
          items: [
            "Accessibility-First Design",
            "Visual Hierarchy",
            "Interaction Design"
          ]
        },
        {
          label: "Tools",
          items: [
            "Figma",
            "Adobe XD",
            "Balsamiq",
            "Miro",
            "Hotjar",
            "UserTesting"
          ]
        }
      ]
    },

    {
      title: "Interpersonal Skills",
      image: "/images/skills/professional-interpersonal.png",
      groups: [
        {
          label: "Communication",
          items: [
            "Active Listening",
            "Executive Presentation",
            "Technical-to-Business Translation"
          ]
        },
        {
          label: "Leadership",
          items: [
            "Influence Without Authority",
            "Mentorship",
            "Decision Making"
          ]
        },
        {
          label: "Management",
          items: [
            "Stakeholder Engagement",
            "Conflict Resolution",
            "Negotiation"
          ]
        },
        {
          label: "Cognitive",
          items: [
            "Critical Thinking",
            "Problem Solving",
            "Adaptability",
            "Root Cause Analysis"
          ]
        },
        {
          label: "Empathy",
          items: [
            "User Advocacy",
            "Emotional Intelligence",
            "Cultural Awareness",
            "Inclusive Mindset"
          ]
        }
      ]
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Texas A&M University, College Station, TX",
      logo: require("./assets/images/tamu.png"), // make sure this image exists
      subHeader: "MS in Management Information Systems",
      duration: "Aug 2024 - May 2026",
      desc: "Graduate program focused on product strategy and delivery, user-centered design and accessibility, and data-informed decision making (data management, system security, visualization, and responsible AI)",
      descBullets: [
        "Coursework: Business and Corporate Strategy, Skills for Technology Leadership, Advanced Project Management, Negotiations in Competitive Environments, Survey of Management, Human Computer Interaction, Advanced System Analysis and Design, IS Design and Development, Advanced Database Management, Data Visualization, Responsible AI, Business Information Security, Professional Development",
      ],
    },
    {
      schoolName: "Pokhara University - Medhavi College, Kathmandu, Nepal",
      logo: require("./assets/images/pkr.png"),
      subHeader: "Bachelor of Computer Information System (IT)",
      duration: "Sept 2017 - Aug 2022",
      desc: "Dean's List",
      descBullets: [
        "Major Coursework: Principles of Management, Strategic Management, Organizational Behaviour, Business Communication, Digital Economy, E-Commerce, Statistics, Data Analysis and Modeling, Data Structures and Algorithms, Operating Systems, Advanced Java, Web Programming, Mobile Computing, Cloud Computing",
      ],
    },
  ],
};



const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Student Technician Lead (Program Management · Digital Accessibility)",
      company: "Office of Provost, Texas A&M University",
      companylogo: require("./assets/images/tamu.png"),
      date: "May 2025 – Present",
      desc: "",
      descBullets: [
        "Remediated and quality-checked 10,000+ course files (PDF, PowerPoint, Word) and captioned lecture media to meet WCAG 2.1/2.2, ADA, and Section 508 standards.",
        "Identified and fixed accessibility issues in headings, reading order, alt text, contrast, tables, links, and forms to improve usability for assistive technology users.",
        "Coordinated schedules, task assignments, and progress tracking for a 20+ member student technician team to keep delivery on time.",
        "Delivered 50+ in-person and online trainings for faculty, staff, and instructional designers on remediation workflows and best practices.",
        "Authored an internal Digital Accessibility Guide with step-by-step instructions and screenshots to reduce rework and keep remediation consistent.",
      ],
    },

    {
      role: "Project Manager",
      company: "Abhiyantrik Technology",
      companylogo: require("./assets/images/abhiyantrik.png"),
      date: "Sept 2021 – Jan 2024",
      desc: "",
      descBullets: [
       "Managed end-to-end delivery across 35+ Agile sprints using Trello by planning scope, sequencing work, and tracking dependencies through release.",
       "Translated stakeholder needs into clear requirements and user stories, improving delivery predictability and driving ~20% higher client satisfaction.",
       "Led cross-functional execution with design and engineering by running sprint ceremonies and removing blockers to keep commitments on track.",
       "Reduced last-minute scope churn by aligning early on acceptance criteria and confirming priorities before development began.",
       "Improved release readiness by enforcing review gates for QA sign-off, stakeholder approval, and documentation before launch.",
        "Communicated sprint status and risks regularly to stakeholders, keeping expectations aligned and reducing escalation during delivery.",
      ],
    },
    {
      role: "Software Quality Analyst",
      company: "Abhiyantrik Technology",
      companylogo: require("./assets/images/abhiyantrik.png"),
      date: "Sept 2019 – Sept 2021",
      desc: "",
      descBullets: [
        "Designed and executed 30–350 test cases per project to validate core flows, edge cases, and user experience across releases.",
        "Created test plans, bug reports, and QA summaries that improved defect visibility and reduced repeat issues in later sprints.",
        "Increased sprint quality by ~5% per sprint by strengthening regression coverage and accelerating defect triage with developers.",
        "Partnered with engineers to reproduce issues quickly, verify fixes, and prevent regressions before release.",
        "Improved release confidence by maintaining structured QA checklists and ensuring critical paths were verified before sign-off.",
      ],
    },
  ],
};

const bigProjects = {
  title: "Projects",
  sections: [
    {
      sectionTitle: "",
      projects: [
        {
          image: require("./assets/images/accessibility.png"),
          projectName: "AI Accessibility in Google Meet",
          projectDesc:
            "Developed an end-to-end product and technology strategy for improving accessibility in Google Meet using emerging speech-AI options. Defined OKRs, risks, cost model (~$100K), and a 12-week roadmap based on feasibility, latency, and integration tradeoffs.",
          footerLink: [
            {
              name: "View on Google Drive",
              url: "https://drive.google.com/drive/folders/1Ki3nX4Cp6CHETgSW_jpgqoaiDDDVkMaQ?usp=drive_link",
            },
          ],
        },
        {
          image: require("./assets/images/deliverease.png"),
          projectName: "DeliverEase - Food Delivery App",
          projectDesc:
            "Created a product canvas with vision, personas, key metrics, and roadmap to improve delivery pricing and customer wait time. Turned user needs into a prioritized plan projecting ~20% higher adoption and stronger market positioning.",
          footerLink: [
            {
              name: "View on Google Drive",
              url: "https://drive.google.com/drive/folders/1CtnpmeHVO-UQAfXb-szwccaCqb1QL9Ie",
            },
          ],
        },
        {
          image: require("./assets/images/mentorly.png"),
          projectName: "Mentorly - UX Design for Mentorship App",
          projectDesc:
            "Led UX design for a mentorship mobile app from research to personas, user flows, wireframes, and interactive prototype. Conducted usability tests and iterated designs based on user feedback and pain points.",
          footerLink: [
            {
              name: "View on Figma",
              url: "https://www.figma.com/proto/cixPOZhE6bOxRZKNNVWxb9/High-Fidelity-Prototype?node-id=193-1308&starting-point-node-id=193%3A1459&t=FM1iVV3nINFcOIu7-1",
            },
          ],
        },
        {
          image: require("./assets/images/data.png"),
          projectName: "Scalable Data Infrastructure Migration",
          projectDesc:
            "Migrated operational data from Excel to AWS-hosted MariaDB/MongoDB and automated tax and price tracking using SQL views, triggers, and aggregation pipelines. Redesigned schemas and configured EC2 replication to improve scalability and reduce query latency.",
          footerLink: [
            {
              name: "Visit on Github",
              url: "https://github.com/Chadani123/Scalable-Data-Infrastructure-Migration",
            },
          ],
        },
        {
          image: require("./assets/images/visable.png"),
          projectName: "VisAble - Accessibility and Inclusive Design",
          projectDesc:
            "Prototyped an AI-assisted tool that generates rich alt text for educational visuals to support blind and low-vision users. Designed for screen readers with semantic structure, keyboard navigation, and contrast-safe layouts.",
          footerLink: [
            {
              name: "View on Vercel",
              url: "https://v0-visable.vercel.app/",
            },
          ],
        },
        {
          image: require("./assets/images/flash.png"),
          projectName: "FlashBack - MERN Social Web App",
          projectDesc:
            "Built a full-stack MERN social app where users create and share posts through a React client and Node/Express + MongoDB backend. Implemented core CRUD flows and client–server integration.",
          footerLink: [
            {
              name: "View on Github",
              url: "https://github.com/Chadani123/FlashBack-WebApp",
            },
          ],
        },
        {
          image: require("./assets/images/data.png"),
          projectName: "Data Visualization Coursework (In Progress)",
          projectDesc:
            "Building interactive visual stories and dashboards from real-world datasets with a focus on clarity, accessibility, and decision-making.",
          footerLink: [
            {
              name: "Coming Soon",
              url: "",
            },
          ],
        },
        
        {
          image: require("./assets/images/ai.png"),
          projectName: "Responsible AI Case Studies (In Progress)",
          projectDesc:
            "Developing structured case studies on responsible AI topics, focusing on risk framing, tradeoffs, and actionable recommendations.",
          footerLink: [
            {
              name: "Coming Soon",
              url: "",
            },
          ],
        },
        
      ],
    },
  ],
  display: true,
};

const leadershipSection = {
  title: "Leadership",
  display: true,
};

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "Professional Scrum Master I (PSM I)",
      subtitle: "Scrum.org",
      image: require("./assets/images/scrum.png"),
      footerLink: [],
    },
    {
      title: "Project Management with Jira",
      subtitle: "Linkedin Learning",
      image: require("./assets/images/PmJira.png"),
      footerLink: [],
    },

    {
      title: "Generative AI for Product Managers",
      subtitle: "Linkedin Learning",
      image: require("./assets/images/GenAIPM.png"),
      footerLink: [],
    },
    {
      title: "Agile Software Development: Scrum for Developers",
      subtitle: "Linkedin Learning",
      image: require("./assets/images/Agile.png"),
      footerLink: [],
    },
  ],
  display: true,
};

const publicationsSection = {
  title: "Publications",
  publications: [
    {
      title:
        "Accessibility, Safety, and Accommodation Burden in US Higher Education Syllabi for Blind and Low-Vision Students",
      authors: "Chadani Acharya",
      journal: "arXiv",
      status: "Preprint (arXiv)",
      footerLink: [],
    },
    {
      title:
        "Accessibility, Safety, and Accommodation Burden in US Higher Education Syllabi for Blind and Low-Vision Students",
      authors: "Chadani Acharya",
      journal: "arXiv",
      status: "Preprint (arXiv)",
      footerLink: [],
    },
  ],
  display: true,
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss an opportunity, product/project or just want to say hi? My Inbox is open for all.",
  // number: "9793298453",
  email_address: "acharyachadani00@gmail.com",
  display: true,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  leadershipSection,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  publicationsSection,
  contactInfo,
  isHireable,
  resumeSection,
};
