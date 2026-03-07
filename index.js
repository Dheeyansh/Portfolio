/* =========================================================
   Modern Mechanical Portfolio JS
========================================================= */

/* ---------- Base path helper ---------- */
const BASE =
  document.querySelector('meta[name="site-base"]')?.getAttribute("content") ||
  (location.hostname.includes("github.io")
    ? `/${(location.pathname.split("/")[1] || "").trim()}/`
    : "/");

function safe(path) {
  if (!path) return "";
  const normalized = String(path).replace(/\\/g, "/").replace(/^\/+/, "");
  return (
    BASE.replace(/\/+$/, "/") +
    normalized
      .split("/")
      .map((seg) => encodeURIComponent(seg))
      .join("/")
  );
}

/* ---------- Placeholder ---------- */
const placeholderImg =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0b0b10"/>
          <stop offset="1" stop-color="#12121a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <circle cx="260" cy="250" r="220" fill="rgba(34,211,238,0.10)"/>
      <circle cx="1040" cy="440" r="280" fill="rgba(34,211,238,0.08)"/>
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle"
            fill="rgba(255,255,255,0.75)" font-family="Inter, Arial" font-size="34" font-weight="700">
        Media not found
      </text>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
            fill="rgba(255,255,255,0.45)" font-family="Inter, Arial" font-size="18">
        File could not be loaded
      </text>
    </svg>
  `);

/* ---------- Media type ---------- */
function mediaType(path) {
  const lower = String(path || "").toLowerCase();
  if (lower.endsWith(".mp4")) return "video";
  if (lower.endsWith(".pdf")) return "pdf";
  return "img";
}

/* ---------- Render main media ---------- */
function renderMainMedia(path) {
  const url = safe(path);
  const type = mediaType(path);

  if (type === "video") {
    return `
      <div class="glass rounded-3xl overflow-hidden border border-white/5 shadow-panel media-enter">
        <video
          src="${url}"
          class="w-full"
          controls
          preload="metadata"
          playsinline
          onerror="this.outerHTML='<img src=&quot;${placeholderImg}&quot; class=&quot;w-full&quot; alt=&quot;Media not found&quot; />'"
        ></video>
      </div>
    `;
  }

  if (type === "pdf") {
    return `
      <div class="glass rounded-3xl overflow-hidden border border-white/5 shadow-panel media-enter">
        <iframe
          src="${url}"
          class="w-full"
          style="height: 560px;"
          title="PDF Preview"
          loading="lazy"
        ></iframe>
      </div>
    `;
  }

  return `
    <div class="glass rounded-3xl overflow-hidden border border-white/5 shadow-panel media-enter">
      <img
        src="${url}"
        class="w-full object-cover"
        loading="lazy"
        alt="Project media"
        onerror="this.onerror=null; this.src='${placeholderImg}';"
      />
    </div>
  `;
}

/* ===================== DATA ===================== */
const projectData = [
  {
    id: 1,
    category: "assembly",
    title: "Universal Coupling Joint Assembly",
    desc: "Mechanical power transmission assembly designed to accommodate angular misalignment.",
    longDesc:
      "Designed and assembled a universal coupling joint in SolidWorks to demonstrate torque transmission between intersecting shafts under angular misalignment. The project focused on accurate part modeling, assembly constraints, and motion visualization to study mechanism behavior and kinematic performance.",
    mainImg: "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.PNG",
    gallery: [
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.PNG",
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly Motion.mp4",
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.mp4",
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.PDF"
    ],
    downloads: [
      { label: "SolidWorks Assembly (.SLDASM)", path: "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.SLDASM" }
    ],
    specs: ["Assembly Mates", "Motion Study", "Mechanism Design"]
  },
  {
    id: 2,
    category: "assembly",
    title: "Pipe Vice Assembly",
    desc: "Clamping mechanism assembly developed for gripping cylindrical workpieces securely.",
    longDesc:
      "Developed a pipe vice assembly in SolidWorks with emphasis on functional clamping action, component alignment, and mechanical fit. The model demonstrates a screw-driven gripping mechanism and includes presentation-ready visual outputs for technical documentation.",
    mainImg: "Pipe Vice Assembly/Pipe Vice Assembly.PNG",
    gallery: [
      "Pipe Vice Assembly/Pipe Vice Assembly.PNG",
      "Pipe Vice Assembly/Pipe Vice Assembly.mp4",
      "Pipe Vice Assembly/Pipe Vice Assembly.PDF"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Pipe Vice Assembly/Pipe Vice Assembly.SLDASM" }],
    specs: ["Mechanical Assembly", "Clamping Mechanism", "Technical Output"]
  },
  {
    id: 3,
    category: "assembly",
    title: "Ball Bearing Assembly",
    desc: "Precision bearing assembly modeled for mechanical visualization and documentation.",
    longDesc:
      "Created a detailed ball bearing assembly in SolidWorks, focusing on proper arrangement of races, balls, and supporting components. The project highlights precision-oriented assembly practice and clear technical presentation through rendered outputs and documentation.",
    mainImg: "Ball Bearing Assembly/Ball Bearing Assembly.PNG",
    gallery: [
      "Ball Bearing Assembly/Ball Bearing Assembly.PNG",
      "Ball Bearing Assembly/Ball Bearing Assembly.mp4",
      "Ball Bearing Assembly/Ball Bearing Assembly.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Ball Bearing Assembly/Ball Bearing Assembly.SLDASM" }],
    specs: ["Precision Assembly", "Rendered Outputs", "Documentation"]
  },
  {
    id: 4,
    category: "assembly",
    title: "Belt Roller Support Assembly",
    desc: "Support structure assembly designed for roller-based material handling systems.",
    longDesc:
      "Designed a belt roller support assembly in SolidWorks for a conveyor-style application. The project involved creating interconnected parts, defining assembly relationships, and preparing visual deliverables to communicate structural layout and design intent.",
    mainImg: "Belt Roller Support Assembly/Belt Roller Support Assembly.PNG",
    gallery: [
      "Belt Roller Support Assembly/Belt Roller Support Assembly.PNG",
      "Belt Roller Support Assembly/Belt Roller Support Assembly.mp4",
      "Belt Roller Support Assembly/Belt Roller Support Assembly.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Belt Roller Support Assembly/Belt Roller Support Assembly.SLDASM" }],
    specs: ["Support Structure", "Assembly Design", "Visual Documentation"]
  },
  {
    id: 5,
    category: "assembly",
    title: "Double Bearing Assembly",
    desc: "Dual-bearing support arrangement modeled for alignment and mechanical stability.",
    longDesc:
      "Modeled a double bearing assembly in SolidWorks to represent a dual-support bearing arrangement commonly used in rotating systems. The project focused on clean assembly structure, dimensional consistency, and technical export preparation.",
    mainImg: "Double Bearing Assembly/Double Bearing Assembly.PNG",
    gallery: [
      "Double Bearing Assembly/Double Bearing Assembly.PNG",
      "Double Bearing Assembly/Double Bearing Assembly.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Double Bearing Assembly/Double Bearing Assembly.SLDASM" }],
    specs: ["Bearing Support", "PDF Drafting", "Assembly Integrity"]
  },
  {
    id: 6,
    category: "assembly",
    title: "Hydraulic Cylinder Assembly",
    desc: "Hydraulic actuator assembly developed with attention to motion and component integration.",
    longDesc:
      "Designed a hydraulic cylinder assembly in SolidWorks including cylinder body, rod, and associated parts. The project demonstrates mechanical assembly practice, motion understanding, and preparation of professional visual documentation.",
    mainImg: "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.PNG",
    gallery: [
      "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.PNG",
      "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.mp4",
      "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.SLDASM" }],
    specs: ["Hydraulic Mechanism", "Motion Study", "Assembly Modeling"]
  },
  {
    id: 7,
    category: "assembly",
    title: "Pulley Support Assembly",
    desc: "Mechanical support assembly created for pulley mounting and load distribution.",
    longDesc:
      "Developed a pulley support assembly in SolidWorks with focus on structural arrangement, mounting support, and presentation-ready outputs. The project reflects practical mechanical design workflow from modeling to documentation.",
    mainImg: "Pulley Support Assembly/Pulley Support Assembly.PNG",
    gallery: [
      "Pulley Support Assembly/Pulley Support Assembly.PNG",
      "Pulley Support Assembly/Pulley Support Assembly.mp4",
      "Pulley Support Assembly/Pulley Support Assembly.PDF"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Pulley Support Assembly/Pulley Support Assembly.SLDASM" }],
    specs: ["Support Assembly", "Animation", "PDF Export"]
  },
  {
    id: 8,
    category: "sheetmetal",
    title: "Electrical Enclosure",
    desc: "Sheet metal enclosure designed for manufacturability, protection, and clean layout integration.",
    longDesc:
      "Designed a sheet metal electrical enclosure in SolidWorks using flanges, bends, cutouts, and enclosure features suited for fabrication. The project emphasizes manufacturable geometry, organized panel layout, and technical drawing preparation for production communication.",
    mainImg: "Electrical Enclosure/Electrical Enclosure.PNG",
    gallery: [
      "Electrical Enclosure/Electrical Enclosure.PNG",
      "Electrical Enclosure/Electrical Enclosure.PDF"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Electrical Enclosure/Electrical Enclosure.SLDASM" }],
    specs: ["Sheet Metal Design", "Manufacturing Drawings", "Fabrication Logic"]
  },
  {
    id: 9,
    category: "sheetmetal",
    title: "Foldable Laptop Stand",
    desc: "Portable sheet metal product designed for compactness, stability, and usability.",
    longDesc:
      "Engineered a foldable laptop stand in SolidWorks Sheet Metal with focus on portability, ergonomic intent, and manufacturable bends. The project combines product-style mechanical design with practical fabrication thinking and clean presentation outputs.",
    mainImg: "Foldable Laptop Stand/Foldable Laptop Stand.PNG",
    gallery: [
      "Foldable Laptop Stand/Foldable Laptop Stand.PNG",
      "Foldable Laptop Stand/Foldable Laptop Stand.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Foldable Laptop Stand/Foldable Laptop Stand.SLDASM" }],
    specs: ["Foldable Design", "Sheet Metal", "Product Development"]
  },
  {
    id: 10,
    category: "sheetmetal",
    title: "BBQ Grill",
    desc: "Sheet metal grill concept developed for fabrication, assembly, and visual presentation.",
    longDesc:
      "Designed a BBQ grill assembly in SolidWorks using sheet metal features and fabrication-oriented geometry. The project showcases design intent for manufacturability, structural arrangement, and product presentation through technical and visual deliverables.",
    mainImg: "BBQ Grill/BBQ Grill.PNG",
    gallery: [
      "BBQ Grill/BBQ Grill.PNG",
      "BBQ Grill/BBQ Grill.mp4",
      "BBQ Grill/BBQ Grill.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "BBQ Grill/BBQ Grill.SLDASM" }],
    specs: ["Fabrication Design", "Sheet Metal Assembly", "Technical Presentation"]
  },
  {
    id: 11,
    category: "weldments",
    title: "Leisure Chair (Weldments)",
    desc: "Welded frame concept created for structural support and lightweight product design.",
    longDesc:
      "Modeled a leisure chair frame using SolidWorks Weldments with emphasis on structural member creation, clean frame layout, and practical welded construction. The project reflects frame-based design workflow and documentation for presentation and review.",
    mainImg: "Leisure Chair/Leisure Chair.PNG",
    gallery: [
      "Leisure Chair/Leisure Chair.PNG",
      "Leisure Chair/Leisure Chair.pdf"
    ],
    downloads: [{ label: "SolidWorks Part (.SLDPRT)", path: "Leisure Chair/Leisure Chair.SLDPRT" }],
    specs: ["Weldment Profiles", "Frame Modeling", "Drawing Export"]
  },
  {
    id: 12,
    category: "weldments",
    title: "Platform Trolley",
    desc: "Material handling trolley developed with weldment structure and assembly-oriented detailing.",
    longDesc:
      "Designed a platform trolley in SolidWorks for industrial material handling applications. The project focused on welded structural members, functional layout, and presentation outputs including animation and drawings to communicate design intent clearly.",
    mainImg: "Platform Trolley/Platform Trolley.PNG",
    gallery: [
      "Platform Trolley/Platform Trolley.PNG",
      "Platform Trolley/Platform Trolley.mp4",
      "Platform Trolley/Platform Trolley.pdf"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Platform Trolley/Platform Trolley.SLDASM" }],
    specs: ["Welded Structure", "Industrial Design", "Technical Drawings"]
  },
  {
    id: 13,
    category: "weldments",
    title: "Stair Structure",
    desc: "Structural stair frame modeled using weldment workflow for clean and efficient design.",
    longDesc:
      "Created a stair structure model using SolidWorks Weldments to represent a fabricated structural frame. The project demonstrates geometric control, member placement, and a practical approach to structural design representation.",
    mainImg: "Stair/Stair.PNG",
    gallery: ["Stair/Stair.PNG"],
    downloads: [{ label: "SolidWorks Part (.SLDPRT)", path: "Stair/Stair.SLDPRT" }],
    specs: ["Structural Modeling", "Weldment Design", "CAD Download"]
  },
  {
    id: 14,
    category: "analysis",
    title: "Leisure Chair – Structural Optimization (ANSYS)",
    desc: "Finite element study focused on lightweighting and material-driven performance improvement.",
    longDesc:
      "Performed structural analysis of a leisure chair assembly in ANSYS to evaluate stress, deformation, and weight reduction through material optimization.\n\nKey Outcomes:\n• Mass reduced from 19.93 kg to 6.87 kg\n• Static load applied: 1000 N\n• Maximum von Mises stress: 184.25 MPa\n• Maximum deformation: 2.76 mm\n\nThis project highlights the use of simulation for design validation, lightweighting, and engineering decision-making.",
    mainImg: "Leisure Ansys/Leisure Ansys Stress.png",
    gallery: [
      "Leisure Ansys/Leisure Ansys Stress.png",
      "Leisure Ansys/Leisure Ansys Deformation.png",
      "Leisure Ansys/Leisure Ansys.gif",
      "Leisure Ansys/Leisure Ansys.pdf"
    ],
    downloads: [],
    specs: ["Static Structural FEA", "Material Optimization", "Performance Validation"]
  },
  {
    id: 15,
    category: "analysis",
    title: "Beam – ANSYS vs Theoretical Validation",
    desc: "Beam deflection and stress results validated against analytical theory.",
    longDesc:
      "Conducted a static structural analysis of a simply supported beam in ANSYS and compared the results with theoretical calculations based on beam theory.\n\nKey Findings:\n• Maximum deflection: -1.459 mm\n• Maximum von Mises stress: 58.56 MPa\n• Strong agreement between analytical and simulation results\n\nThis project demonstrates engineering validation workflow by combining simulation with theoretical verification.",
    mainImg: "Stress Deflection Ansys/Stress Deflection.png",
    gallery: [
      "Stress Deflection Ansys/Stress Deflection.png",
      "Stress Deflection Ansys/Stress Deflection.gif",
      "Stress Deflection Ansys/Stress Deflection.pdf"
    ],
    downloads: [],
    specs: ["Theory Validation", "Beam Analysis", "ANSYS Mechanical"]
  },
  {
    id: 16,
    category: "analysis",
    title: "1D Steady-State Heat Conduction (ANSYS + MATLAB)",
    desc: "Thermal simulation validated using Fourier’s law and MATLAB-based comparison.",
    longDesc:
      "Performed a one-dimensional steady-state thermal analysis and compared ANSYS temperature distribution results with a MATLAB implementation based on Fourier’s law. The project demonstrates numerical validation and reinforces the relationship between simulation and analytical understanding.",
    mainImg: "Thermal Steady State 1D/Thermal Steady State 1D.png",
    gallery: [
      "Thermal Steady State 1D/Thermal Steady State 1D.png",
      "Thermal Steady State 1D/Steady State.png",
      "Thermal Steady State 1D/Steady State Graph.jpg",
      "Thermal Steady State 1D/Thermal Steady State 1D.gif"
    ],
    downloads: [],
    specs: ["Thermal Analysis", "Fourier’s Law", "MATLAB Validation"]
  }
];

/* ===================== UI BUILD ===================== */
function badge(text) {
  return `<span class="text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">${text}</span>`;
}

function createCard(project, idx) {
  return `
    <div
      class="project-card glass rounded-[2.25rem] p-4 group cursor-pointer stagger shadow-panel"
      style="transition-delay:${Math.min(idx * 60, 420)}ms"
      data-project-id="${project.id}"
      role="button"
      aria-label="Open ${project.title}"
      tabindex="0"
    >
      <div class="overflow-hidden rounded-[1.75rem] mb-5 h-56 border border-white/5">
        <img
          src="${safe(project.mainImg)}"
          class="w-full h-full object-cover"
          alt="${project.title} preview"
          loading="lazy"
          onerror="this.onerror=null; this.src='${placeholderImg}';"
        />
      </div>

      <div class="px-3 pb-3 relative z-10">
        <div class="flex justify-between items-start gap-3 mb-3">
          <h3 class="text-xl font-extrabold logo-font leading-snug">${project.title}</h3>
          <i class="fas fa-arrow-up-right-from-square text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></i>
        </div>

        <p class="text-zinc-400 text-sm mb-4">${project.desc}</p>

        <div class="flex flex-wrap gap-2">
          ${(project.specs || []).slice(0, 3).map(badge).join("")}
        </div>
      </div>
    </div>
  `;
}

function buildThumb(path, idx, activeIndex) {
  const type = mediaType(path);
  const labelIcon = type === "video" ? "fa-video" : type === "pdf" ? "fa-file-pdf" : "fa-image";
  const name = String(path).split("/").pop();

  return `
    <button
      class="thumb ${idx === activeIndex ? "active" : ""} rounded-2xl px-3 py-3 text-left"
      data-media-index="${idx}"
      aria-label="View media ${idx + 1}"
    >
      <div class="flex items-center gap-2">
        <i class="fa-solid ${labelIcon} text-cyan-300"></i>
        <span class="text-xs font-bold text-zinc-300 truncate max-w-[220px]">${name}</span>
      </div>
    </button>
  `;
}

/* ===================== MODAL STATE ===================== */
let activeProject = null;
let activeMediaIndex = 0;

function setActiveMedia(idx) {
  if (!activeProject) return;

  const gallery = activeProject.gallery || [];
  activeMediaIndex = Math.max(0, Math.min(idx, gallery.length - 1));

  const main = document.getElementById("portal-main-media");
  const thumbs = document.getElementById("portal-thumbs");
  const counter = document.getElementById("media-counter");

  if (main) main.innerHTML = renderMainMedia(gallery[activeMediaIndex]);
  if (thumbs) thumbs.innerHTML = gallery.map((m, i) => buildThumb(m, i, activeMediaIndex)).join("");
  if (counter) counter.textContent = `${activeMediaIndex + 1} / ${gallery.length}`;
}

function openProject(id) {
  const p = projectData.find((x) => x.id === id);
  if (!p) return;

  activeProject = p;
  activeMediaIndex = 0;

  const portal = document.getElementById("project-portal");
  const content = document.getElementById("portal-content");
  if (!portal || !content) return;

  const downloadsHtml =
    p.downloads && p.downloads.length
      ? p.downloads.map((d) => `
          <a
            href="${safe(d.path)}"
            download
            class="w-full py-4 bg-white text-black text-center font-extrabold rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-soft"
          >
            <i class="fas fa-download"></i> ${d.label}
          </a>
        `).join("")
      : `<div class="text-zinc-500 text-sm">CAD download is not included for this analysis project.</div>`;

  content.innerHTML = `
    <div class="space-y-5 portal-slide">
      <div class="flex items-center justify-between gap-4">
        <div class="text-xs text-zinc-400">Project Media <span class="text-zinc-500">(use arrow keys to navigate)</span></div>
        <div class="text-xs text-zinc-400"><span id="media-counter"></span></div>
      </div>

      <div id="portal-main-media"></div>

      <div class="flex items-center justify-between gap-3">
        <button id="prevBtn" class="glass rounded-2xl px-4 py-3 font-extrabold hover:bg-white/10 transition flex items-center gap-2 shadow-soft">
          <i class="fa-solid fa-arrow-left"></i> Previous
        </button>
        <button id="nextBtn" class="glass rounded-2xl px-4 py-3 font-extrabold hover:bg-white/10 transition flex items-center gap-2 shadow-soft">
          Next <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div id="portal-thumbs" class="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
    </div>

    <div class="lg:sticky lg:top-24 h-fit space-y-6 portal-slide">
      <div>
        <div class="text-cyan-300 font-extrabold tracking-widest uppercase text-xs">${p.category}</div>
        <h2 class="text-4xl md:text-5xl font-extrabold logo-font mt-2">${p.title}</h2>
      </div>

      <p class="text-zinc-300 text-base leading-relaxed whitespace-pre-line">${p.longDesc}</p>

      <div class="grid grid-cols-2 gap-3">
        ${(p.specs || [])
          .map((s) => `<div class="glass p-4 rounded-2xl text-xs font-extrabold text-zinc-300 border border-white/5 shadow-soft"># ${s}</div>`)
          .join("")}
      </div>

      <div class="pt-3 space-y-3">
        ${downloadsHtml}
        <button id="backBtn" class="w-full py-4 glass rounded-2xl font-extrabold hover:bg-white/10 transition-all shadow-soft">
          Return to Projects
        </button>
      </div>
    </div>
  `;

  portal.classList.remove("hidden");
  requestAnimationFrame(() => portal.classList.add("show"));
  document.body.style.overflow = "hidden";

  setActiveMedia(0);

  document.getElementById("prevBtn")?.addEventListener("click", prevMedia);
  document.getElementById("nextBtn")?.addEventListener("click", nextMedia);
  document.getElementById("backBtn")?.addEventListener("click", closeProjectPortal);

  document.getElementById("portal-thumbs")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-media-index]");
    if (!btn) return;
    setActiveMedia(Number(btn.dataset.mediaIndex));
  });
}

function closeProjectPortal() {
  const portal = document.getElementById("project-portal");
  if (!portal) return;

  portal.classList.remove("show");
  setTimeout(() => {
    portal.classList.add("hidden");
  }, 250);

  document.body.style.overflow = "auto";
  activeProject = null;
  activeMediaIndex = 0;
}

function prevMedia() {
  if (!activeProject) return;
  setActiveMedia(activeMediaIndex - 1);
}

function nextMedia() {
  if (!activeProject) return;
  setActiveMedia(activeMediaIndex + 1);
}

/* ===================== GRID + FILTER + SEARCH ===================== */
let currentCat = "all";
let currentQuery = "";

function attachGridClickOnce() {
  const grid = document.getElementById("project-grid");
  if (!grid || grid.dataset.bound === "1") return;

  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-project-id]");
    if (!card) return;
    openProject(Number(card.dataset.projectId));
  });

  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest("[data-project-id]");
    if (!card) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject(Number(card.dataset.projectId));
    }
  });

  grid.dataset.bound = "1";
}

function renderGrid(data) {
  const grid = document.getElementById("project-grid");
  const count = document.getElementById("count");
  if (!grid) return;

  grid.innerHTML = data.map((p, i) => createCard(p, i)).join("");
  if (count) count.textContent = data.length;

  requestAnimationFrame(() => {
    document.querySelectorAll(".stagger").forEach((el) => el.classList.add("show"));
  });
}

function setActiveFilter(cat) {
  document.querySelectorAll("#filters button").forEach((btn) => {
    const isActive = btn.dataset.cat === cat;
    btn.className = isActive
      ? "px-5 py-2 rounded-full bg-white text-black font-extrabold text-sm shadow-soft"
      : "px-5 py-2 rounded-full glass hover:bg-white/5 text-sm";
  });
}

function applyFilterAndSearch() {
  const q = currentQuery.trim().toLowerCase();

  const filteredByCat =
    currentCat === "all"
      ? projectData
      : projectData.filter((p) => p.category === currentCat);

  const final = !q
    ? filteredByCat
    : filteredByCat.filter((p) => {
        const hay = (
          p.title +
          " " +
          p.desc +
          " " +
          (p.longDesc || "") +
          " " +
          (p.specs || []).join(" ")
        ).toLowerCase();

        return hay.includes(q);
      });

  renderGrid(final);
}

/* ===================== INIT ===================== */
document.addEventListener("DOMContentLoaded", () => {
  attachGridClickOnce();

  document.querySelectorAll("#filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCat = btn.dataset.cat;
      setActiveFilter(currentCat);
      applyFilterAndSearch();
    });
  });

  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", (e) => {
      currentQuery = e.target.value || "";
      applyFilterAndSearch();
    });
  }

  const closeBtn = document.getElementById("closePortalBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeProjectPortal);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.addEventListener("keydown", (e) => {
    const portalOpen = document.getElementById("project-portal")?.classList.contains("show");
    if (!portalOpen) return;

    if (e.key === "Escape") closeProjectPortal();
    if (e.key === "ArrowLeft") prevMedia();
    if (e.key === "ArrowRight") nextMedia();
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  setActiveFilter("all");
  applyFilterAndSearch();
});