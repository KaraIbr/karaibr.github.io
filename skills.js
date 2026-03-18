const data = {
  React: ['React', 'Core frontend framework used across Followback, SIALT Logistics, LunaCornea and multiple client projects. Combined with Tailwind CSS and Motion Design for production-grade interfaces.', 'Experience with hooks, context API, custom component libraries, and state management. Deployed on Vercel, DigitalOcean and AWS.'],
  JavaScript: ['JavaScript ES6+', 'Primary language for all frontend and Node.js backend work. Deep understanding of async/await, closures, modules and modern browser APIs.', 'Applied in every web project from simple landing pages to complex SaaS dashboards with real-time functionality.'],
  Python: ['Python', 'Backend development with Django and FastAPI. Used for REST API design, automation scripts, data pipelines and computer vision research with OpenCV.', 'Applied in R&D projects including EMG signal processing and real-time object detection for IoT Vision Glasses.'],
  'Node.js': ['Node.js', 'Server-side JavaScript for APIs and backend services. Used in Followback and multiple freelance projects requiring real-time data and event-driven architecture.', 'Experience with Express, REST API design, database integrations and production deployment on Linux VPS and cloud environments.'],
  Django: ['Django', 'Full-featured Python web framework for secure, scalable web applications. Preferred for projects requiring robust ORM, authentication and admin tooling out of the box.', 'Used with Django REST Framework for client projects requiring solid backend architecture and clean API contracts.'],
  FastAPI: ['FastAPI', 'Modern, high-performance Python framework for building APIs with automatic OpenAPI documentation. Preferred for microservices and lightweight backend services.', 'Used for building fast backend APIs integrated with React frontends, often alongside Docker for containerized deployment.'],
  Tailwind: ['Tailwind CSS', 'Utility-first CSS framework enabling rapid, consistent UI development. Avoids CSS bloat while maintaining design system coherence across large projects.', 'Combined with Motion Design for animated production interfaces delivered to clients in Mexico and internationally.'],
  'C++': ['C++', 'Systems-level programming language. Applied in academic and competitive contexts, including data structures, algorithms and embedded-adjacent development.', 'Foundation for understanding low-level computation and performance optimization in technical problem-solving.'],
  Pentesting: ['Penetration Testing', 'Ethical hacking and vulnerability assessment for local companies. Includes network scanning, port analysis, service enumeration, exploit research and attack simulation.', 'Applied at Biotempak to detect and neutralize a live security breach, and delivered as consulting service to multiple Aguascalientes businesses.'],
  OSINT: ['OSINT', 'Open Source Intelligence using theHarvester, Google Dorks, Shodan and social footprint analysis to map attack surfaces before active security testing.', 'First phase of every security engagement — understanding a target\'s digital exposure before any active tools are used.'],
  Wireshark: ['Wireshark', 'Network protocol analysis and real-time traffic monitoring. Used to detect anomalous behavior, identify unencrypted communications and diagnose network issues.', 'Core tool in cybersecurity consulting — used in both passive recon and active incident response phases.'],
  HubSpot: ['HubSpot CRM', 'Certified in HubSpot — automations, marketing workflows, sales pipelines, lead scoring and reporting. Customized at source-code level for corporate clients.', 'Built automated lead nurturing sequences, custom contact properties and conversion dashboards for B2B sales teams at Biotempak.'],
  GA4: ['Google Analytics 4', 'Web analytics, event tracking, funnel analysis and conversion optimization. Connected GA4 data to CRM reporting for full-funnel attribution.', 'Used to drive data-informed decisions on web experiences, campaign performance and SEO strategy across multiple corporate web properties.'],
  AWS: ['Amazon Web Services', 'Cloud infrastructure including EC2, S3, IAM and deployment pipelines. Used alongside DigitalOcean VPS for production application hosting.', 'Applied in freelance and personal projects for scalable, cost-efficient cloud deployments.'],
  Docker: ['Docker', 'Containerization for consistent, portable development and production environments. Packages applications and all dependencies for reproducible deployments.', 'Used in freelance projects to streamline deployment pipelines and eliminate environment-related bugs across client servers.'],
  Linux: ['Linux', 'Server administration, shell scripting and system hardening. Comfortable managing production Linux servers via CLI for configuration, monitoring and security.', 'Managed Linux-based corporate VPS infrastructure at Biotempak and client hosting environments across freelance engagements.'],
  Git: ['Git', 'Source code version control with Git and GitHub. Branching strategies, pull requests, code review workflows and collaborative development.', 'Used across all projects — from solo freelance work to multi-developer team environments.'],
  OpenCV: ['OpenCV', 'Computer vision library applied in two R&D projects — real-time body tracking for EMG rehabilitation and object/person detection for autonomous navigation glasses.', 'Integrated with EMG sensors and IoT hardware in collaboration with kinesiologists and biomedical engineers at Global University.'],
  Blockchain: ['Blockchain & Web3', 'Smart contract development and decentralized application architecture. Won national blockchain hackathon, advancing to international competition in Medellín, Colombia.', 'Experience with Web3 concepts, token standards, and decentralized system design applied in real competitive development environments under time pressure.'],
  n8n: ['n8n Automation', 'Visual workflow automation connecting APIs and services without custom backend code for every integration. Core tool for rapid business process automation.', 'Built automated WhatsApp order notifications, CRM sync workflows and customer communication pipelines for B2B clients in POS Multitenant project.'],
  Figma: ['Figma', 'UI/UX design and interactive prototyping for web and mobile. Used to design interfaces before development, collaborate with clients and maintain design system documentation.', 'Applied across freelance projects to ensure design-development alignment and reduce revision cycles.'],
  SEO: ['SEO · SEM · CRO', 'Technical SEO, on-page optimization, Core Web Vitals, and search engine marketing. Combined with GA4 and DataDog for data-driven optimization strategies.', 'Applied at Biotempak to drive sustained organic traffic growth across corporate web properties through structured content architecture and metadata improvements.'],
};

const skillParas = document.querySelectorAll('.skillpara');
const mainContent = document.getElementById('mainContent');

skillParas.forEach(function (el) {
  el.addEventListener('click', function () {
    skillParas.forEach(function (p) { p.classList.remove('active'); });
    this.classList.add('active');
    const key = this.getAttribute('data-content');
    const d = data[key];
    if (d && mainContent) {
      mainContent.innerHTML = '<h3>' + d[0] + '</h3><p class="normalFont text-justify">' + d[1] + '</p><p class="normalFont text-justify mt-2">' + d[2] + '</p>';
    }
  });
});
