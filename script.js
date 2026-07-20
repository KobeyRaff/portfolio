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
    type: "Electronics · Embedded hardware",
    title: "Custom PCB Design and Bring-up",
    lead: "Custom electronics developed from system requirements through schematic capture, layout, manufacture and hardware–software integration.",
    sections: [
      ["Design context", "Use this section to explain what each board was responsible for and the constraints that shaped it: dimensions, power, interfaces, sensing, environmental conditions and integration requirements."],
      ["My contribution", "Describe your individual ownership clearly. Include component selection, schematic design, layout, design reviews, manufacturing liaison, assembly, firmware support and bring-up work where applicable."],
      ["Validation", "Show how you proved the board worked. Strong evidence includes current consumption, interface tests, oscilloscope captures, thermal observations, fault investigation and photographs of the board operating in the final system."],
      ["What changed", "Document one revision or design trade-off. Explaining why a component, connector, topology or layout changed is often more compelling than only showing the finished board."]
    ],
    bullets: ["Requirements-driven electronics", "Schematic capture and PCB layout", "Manufacturing and assembly", "Bring-up, debugging and integration"]
  },
  ai: {
    type: "AI systems · Software architecture",
    title: "Scalable Multistage AI Pipeline",
    lead: "A modular pipeline for running image generation, vision-language reasoning, segmentation and dataset production across high-performance servers and constrained edge environments.",
    sections: [
      ["System challenge", "The workflow combines heterogeneous models and data products while preserving traceability between prompts, generated imagery, detections, masks and exported datasets."],
      ["Architecture", "The system uses discrete configurable stages, persistent artifact metadata and file-backed storage for large outputs. This allows models to be replaced, individual stages to be rerun and outputs to be traced through the complete workflow."],
      ["Engineering focus", "The work spans Python software architecture, GPU inference, Linux server operation, database design, deployment constraints and standards-compliant COCO export."],
      ["R&D constraints", "The pipeline was developed in a fast-moving research environment where solutions needed to be useful quickly, make sensible use of available compute and remain flexible as models and requirements changed."]
    ],
    bullets: ["Python and typed data models", "GPU inference and model serving", "Artifact lineage and persistence", "Modular processing stages", "Server-to-edge deployment"]
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
