const skillCards = document.querySelectorAll(".skill-card");
// Mengambil semua elemen dengan class skill-card (NodeList)

const detailBox = document.getElementById("skillDetail");
// Mengambil elemen panel detail (popup bawah)

const detailTitle = document.getElementById("detailTitle");
// Elemen untuk menampilkan judul skill

const detailTech = document.getElementById("detailTech");
// Elemen untuk menampilkan daftar teknologi

const detailStatus = document.getElementById("detailStatus");
// Elemen untuk menampilkan status level

const detailProject = document.getElementById("detailProject");
// Elemen untuk menampilkan roadmap/project terkait

const skillsData = {
  // Object berisi seluruh data detail skill (sebagai database lokal)

  embedded: {
    title: "Embedded Systems & IoT Engineering", // Judul skill
    tech: "C, C++, Arduino, ESP32, STM32, MQTT, PCB Design", // Teknologi
    status: "Intermediate", // Level kemampuan
    project:
      "Smart Hydroponic Automation, Solar Monitoring System, Environmental Sensor Network", // Contoh project
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
  // Loop untuk setiap card skill

  card.addEventListener("mouseenter", () => {
    // Event ketika mouse masuk ke card

    const key = card.dataset.skill;
    // Mengambil value dari attribute data-skill di HTML

    const data = skillsData[key];
    // Mengambil data yang sesuai dari object skillsData

    detailTitle.textContent = data.title;
    // Mengisi judul detail

    detailTech.textContent = data.tech;
    // Mengisi teknologi

    detailStatus.textContent = data.status;
    // Mengisi status level

    detailProject.textContent = data.project;
    // Mengisi roadmap project

    detailBox.classList.add("active");
    // Menampilkan detail box dengan menambahkan class active
  });

  card.addEventListener("mouseleave", () => {
    // Event ketika mouse keluar dari card

    detailBox.classList.remove("active");
    // Menyembunyikan detail box
  });
});

card.addEventListener("click", () => {
  detailBox.classList.toggle("active");
});
// Event ketika card diklik (untuk toggle detail box, terutama di mobile)
