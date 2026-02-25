import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.scss";
import {
  greeting,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  publicationsSection,
} from "../../portfolio";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-open chatbot after 2 seconds on first load
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        setMessages([
          {
            text: `Hi! I'm Chadani's assistant \n\nI can help you learn about:\n• Skills & Technologies\n• Work Experience\n• Projects & Applications\n• Education & Research\n• Location & Relocation\n• Visa Status & Sponsorship\n• Contact Information\n\nFeel free to ask me anything!`,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    const contactFooter = `\n\nIf this is not what you needed, feel free to contact me:\n✉️ ${contactInfo.email_address}\n📞 ${contactInfo.number}`;

    // Greetings
    if (
      message.match(/\b(hi|hello|hey|greetings|good morning|good evening)\b/)
    ) {
      return `Hello! I'm here to help you learn about me. You can ask about my skills, experience, projects, education, location, visa status, or how to get in touch!`;
    }

    // Skills - broader matching
    // if (message.match(/\bskill/i)) {
    //   const skills = skillsSection.softwareSkills
    //     .map((s) => s.skillName)
    //     .join(", ");
    //   return `I am a ${skillsSection.subTitle}.\n\nKey Technical Skills:\n${skills}\n\nCore Competencies:\n${skillsSection.skills[0]}\n${skillsSection.skills[1]}\n${skillsSection.skills[2]}${contactFooter}`;
    // }

    // Skills - broader matching
    // if (message.match(/\bskill/i)) {
    //   const softwareSkills =
    //    skillsSection?.softwareSkills?.map((s) => s.skillName).join(", ") ||
    //    "Product strategy, accessibility, UX design, data and technical foundations";

    //   const core =
    //    skillsSection?.skills?.slice(0, 4).join("\n") ||
    //    "Roadmaps, OKRs, stakeholder alignment, accessibility (WCAG/508), and data-driven decision making.";

    // const subtitle = skillsSection?.subTitle || "PM-focused MIS graduate student";

    //   return `I am a ${subtitle}.\n\nKey Skills:\n${softwareSkills}\n\nCore Competencies:\n${core}${contactFooter}`;
    // }

    // Skills - PM-focused (matches your 6 skill categories)
    if (message.match(/\b(skill|skills|technology|tools|tech stack|stack)\b/i)) {
      return `Here’s a quick snapshot of my skills (PM-focused):

    • Product & Strategy: Roadmaps, MVP definition, OKRs/KPIs, GTM basics, prioritization (RICE/MoSCoW), stakeholder alignment
    • Delivery & Execution: Agile/Scrum, sprint planning, backlog refinement, SDLC, release coordination, documentation (PRDs/user stories)
    • UX & Accessibility: WCAG 2.1/2.2 + Section 508, accessible UX, usability thinking, remediation workflows
    • Data & Technical Foundations: SQL/data modeling, dashboards & visualization, API basics, databases (MariaDB/MongoDB), cloud exposure (AWS)
    • Collaboration: Cross-functional communication, requirement clarity, risk/issue tracking, decision-making with metrics
    • Tools: Figma, Notion, Lucidchart/Whimsical, GitHub, Jira/Trello

    // If you tell me the role you’re hiring for, I can map these skills to the responsibilities (discovery, delivery, analytics, and execution).${contactFooter}`;
    }


    // Location
    if (message.match(/\b(location|where|based|live|living|city|state)\b/)) {
      return `I am currently located in Texas, but I'm open to relocation for the right opportunity.${contactFooter}`;
    }

    // Visa Status
    if (
      message.match(
        /\b(visa|status|f1|opt|work authorization|legal|eligibility)\b/
      )
    ) {
      return `I am currently on F-1 OPT status, valid until 2029.\n\nWork Authorization: Authorized to work in the US until 2029.${contactFooter}`;
    }

    // Sponsorship
    if (message.match(/\b(sponsor|sponsorship|h1b|h-1b|petition)\b/)) {
      return `I prefer H-1B sponsorship but I'm open to discussing other options based on the opportunity.${contactFooter}`;
    }

    // Education
    if (
      message.match(/\b(education|degree|university|school|study|studied)\b/)
    ) {
      const edu = educationInfo.schools
        .map(
          (school) =>
            `• ${school.subHeader} from ${school.schoolName} (${school.duration})\n  ${school.desc}`
        )
        .join("\n\n");
      return `Here's my educational background:\n\n${edu}${contactFooter}`;
    }

    // Experience
    if (
      message.match(/\b(experience|work|job|employment|worked|position|role)\b/)
    ) {
      const exp = workExperiences.experience
        .map(
          (job) =>
            `• ${job.role} at ${job.company} (${job.date})\n  ${job.descBullets[0]}`
        )
        .join("\n\n");
      return `Here's a summary of my work experience:\n\n${exp}${contactFooter}`;
    }

    // Projects
    if (message.match(/\b(project|built|developed|application|app)\b/)) {
      const topProjects = bigProjects.sections[0].projects.slice(0, 5);
      const projectList = topProjects
        .map((p) => `• ${p.projectName}: ${p.projectDesc}`)
        .join("\n\n");
      return `Here are some of my key projects:\n\n${projectList}\n\nCheck out the Projects section for more details!${contactFooter}`;
    }

    // Publications
    if (message.match(/\b(publication|research|paper|published)\b/)) {
      const pubs = publicationsSection.publications
        .map((pub) => `• ${pub.title}\n  Status: ${pub.status}`)
        .join("\n\n");
      return `I have ${publicationsSection.publications.length} publications:\n\n${pubs}${contactFooter}`;
    }

    // Contact
    if (
      message.match(
        /\b(contact|email|phone|reach|get in touch|connect|hire|linkedin|you)\b/
      )
    ) {
      return `You can reach me at:\n\n✉️ Email: ${contactInfo.email_address}\n📞 Phone: ${contactInfo.number}\n💼 LinkedIn: Check the footer section\n🔗 GitHub: Check the footer section\n\nFeel free to reach out for collaborations or opportunities!`;
    }

    // Virginia Tech
    if (message.match(/\b(virginia tech|vt|graduate|masters)\b/)) {
      const vt = educationInfo.schools[0];
      return `I am currently pursuing ${vt.subHeader} at ${vt.schoolName} (${vt.duration}).\n\nRole: ${vt.desc}\n\n${vt.descBullets[0]}\n${vt.descBullets[1]}${contactFooter}`;
    }

    // About
    if (message.match(/\b(who|about|introduce)\b/)) {
      return `${greeting.title}!\n\n${greeting.subTitle}\n\nThis chatbot is here to help you explore my portfolio. What would you like to know?`;
    }

    // Help
    if (message.match(/\b(help|what can you|capabilities)\b/)) {
      return `I can help you with:\n\n• Skills & Technologies\n• Education & Degrees\n• Work Experience\n• Projects & Applications\n• Research & Publications\n• Location & Relocation\n• Visa Status & Sponsorship\n• Contact Information\n\nJust ask me a question, and I'll do my best to help!`;
    }

    // Default response
    return `I'm not sure about that specific question.\n\nYou can contact me directly at:\n✉️ ${contactInfo.email_address}\n📞 ${contactInfo.number}\n\nOr try asking about skills, experience, projects, education, location, or visa status!`;
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = {
        text: generateResponse(input),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your experience",
    "What projects have you built?",
    "Where are you located?",
  ];

  const handleQuickQuestion = (question) => {
    const userMessage = {
      text: question,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking and respond
    setTimeout(() => {
      const botResponse = {
        text: generateResponse(question),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <div
        className={`chatbot-button ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="28"
          height="28"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.34-3.83-.93l-.27-.15-2.9.49.49-2.9-.15-.27C4.34 14.67 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
        </svg>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">JS</div>
              <div>
                <div className="chatbot-title">Chadani's Assistant</div>
                <div className="chatbot-status">Online</div>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {msg.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="message-time">{msg.timestamp}</div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="quick-questions">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    className="quick-question"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              aria-label="Chat input"
            />
            <button
              onClick={handleSend}
              disabled={input.trim() === ""}
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
