const skillCards = document.querySelectorAll(".skill-card");
const detailBox = document.getElementById("skillDetail");

const detailTitle = document.getElementById("detailTitle");
const detailTech = document.getElementById("detailTech");
const detailStatus = document.getElementById("detailStatus");
const detailProject = document.getElementById("detailProject");

const skillsData = {
  embedded: {
    title: "Embedded Systems & IoT Engineering",
    tech: "C, C++, Arduino, ESP32, STM32, MQTT, PCB Design",
    status: "Intermediate",
    project:
      "Smart Hydroponic Automation, Solar Monitoring System, Environmental Sensor Network",
  },

  software: {
    title: "Software Engineering & Web Development",
    tech: "HTML, CSS, JavaScript, React (Learning), Node.js, Git",
    status: "Intermediate",
    project:
      "SRYY Portfolio Platform, Data Management System, REST API Project",
  },

  robotics: {
    title: "Robotics & Mechatronics Engineering",
    tech: "ROS (Planned), Servo Control, Motor Driver, CAD 3D Design",
    status: "Developing",
    project: "Autonomous Drone, Underwater Robot, Smart Actuator System",
  },

  game: {
    title: "Game Development & Interactive Technology",
    tech: "Unity, C#, Blender, Game Physics Logic",
    status: "Developing",
    project: "Indie Exploration Game, Interactive Learning Simulation",
  },

  cyber: {
    title: "Cybersecurity & Network Engineering",
    tech: "Linux CLI, Basic Networking, Wireshark, Firewall Config",
    status: "Beginner–Intermediate",
    project:
      "Personal Secure Network Lab, Ethical Hacking Practice Environment",
  },

  product: {
    title: "Product Engineering / Tech Innovator",
    tech: "System Design Thinking, UI/UX Concept, Hardware Integration",
    status: "Concept & Research Stage",
    project: "Green Energy IoT Product, Smart Sustainable Device Line",
  },
};

skillCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const key = card.dataset.skill;
    const data = skillsData[key];

    detailTitle.textContent = data.title;
    detailTech.textContent = data.tech;
    detailStatus.textContent = data.status;
    detailProject.textContent = data.project;

    detailBox.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    detailBox.classList.remove("active");
  });
});
