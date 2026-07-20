const projects = {
  tvc: {
    type: "Embedded control · Mechatronics",
    title: "Thrust Vector Control Rocket Simulator",
    lead: "A ground-based simulator developed to validate high-speed thrust-vector-control behaviour using accessible drone hardware.",
    sections: [
      ["The problem", "Flight hardware is expensive and slow to iterate. The simulator created a practical way to develop and test control software, actuator behaviour and system integration without consuming flight articles."],
      ["My contribution", "I worked across system architecture, embedded implementation, integration and testing. The project required translating control objectives into a real electromechanical platform and diagnosing issues across software, sensors, power and mechanics."],
      ["Engineering approach", "The system was designed around short build–test–measure cycles. Particular attention was given to control-loop latency, actuator response, repeatability and ensuring the simulator remained representative enough to inform later development."],
      ["Evidence and next steps", "Add measured response plots, loop frequency, actuator specifications, test footage and a brief comparison between predicted and observed behaviour here."]
    ],
    bullets: ["Real-time embedded implementation", "High-speed electromechanical actuation", "Sensor integration and filtering", "Iterative validation using physical test hardware"]
  },
  pcb: {
  type: "Electronics · Embedded systems",
  title: "Rocketry Avionics and Embedded Electronics",
  lead: "A collection of custom electronic systems developed for sensing, data acquisition, control, communication and power distribution aboard high-powered rockets.",

  sections: [
    [
      "System context",
      "Rocket avionics must operate within tight constraints on size, mass, power and reliability while interfacing with sensors, actuators, communications hardware and other subsystems. I contributed to the design and integration of custom PCBs that supported these functions across multiple rocketry projects."
    ],
    [
      "Sensor acquisition",
      "The electronics interfaced with inertial, pressure and other onboard sensors to capture vehicle state and environmental data. Designs considered signal integrity, sampling requirements, digital communication interfaces and reliable operation in electrically and mechanically demanding conditions."
    ],
    [
      "Processing and storage",
      "Microcontrollers provided real-time coordination of sensor acquisition, system logic and peripheral control. Onboard storage enabled high-rate flight and test data to be retained for later analysis, validation and debugging."
    ],
    [
      "Actuation and control",
      "The boards provided interfaces for controlling electromechanical systems, including servo and other actuator outputs. This required careful consideration of timing, current demand, protection and separation between sensitive logic and higher-power loads."
    ],
    [
      "Communications",
      "Integrated communication interfaces enabled data exchange between onboard subsystems and external equipment. These links supported configuration, telemetry, debugging and coordination between distributed electronic systems."
    ],
    [
      "Power architecture",
      "Power circuitry converted and distributed energy from onboard batteries to microcontrollers, sensors, communications hardware and actuators. Designs incorporated voltage regulation, decoupling, protection and appropriate power-domain separation to maintain stable operation under changing loads."
    ],
    [
      "Development and validation",
      "The development process covered requirements definition, component selection, schematic capture, PCB layout, manufacture, assembly, bring-up and system integration. Boards were progressively validated through bench testing, firmware development and integration with the wider vehicle."
    ]
  ],

  bullets: [
    "Microcontroller-based embedded systems",
    "Inertial and environmental sensor acquisition",
    "Onboard flight-data storage",
    "Actuator and servo control interfaces",
    "Inter-board and external communications",
    "Battery power regulation and distribution",
    "PCB bring-up, debugging and system integration"
  ]
}
};

const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeButton = document.querySelector(".dialog-close");

function renderProject(project) {
  const sectionHTML = project.sections.map(([heading, text]) =>
    `<section><h3>${heading}</h3><p>${text}</p></section>`
  ).join("");

  const bulletHTML = project.bullets.map(item => `<li>${item}</li>`).join("");

  return `
    <article class="dialog-body">
      <p class="eyebrow">${project.type}</p>
      <h2>${project.title}</h2>
      <p class="dialog-lead">${project.lead}</p>
      ${sectionHTML}
      <h3>Technical scope</h3>
      <ul>${bulletHTML}</ul>
    </article>
  `;
}

document.querySelectorAll(".project-trigger").forEach(button => {
  button.addEventListener("click", () => {
    dialogContent.innerHTML = renderProject(projects[button.dataset.project]);
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}
closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});

document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.parentElement.querySelector(".media-placeholder")?.classList.add("show");
  });
});

document.querySelectorAll("video").forEach(video => {
  video.addEventListener("error", () => {
    video.style.display = "none";
    video.parentElement.querySelector(".media-placeholder")?.classList.add("show");
  });
  const source = video.querySelector("source");
  if (source) {
    source.addEventListener("error", () => {
      video.style.display = "none";
      video.parentElement.querySelector(".media-placeholder")?.classList.add("show");
    });
  }
});
