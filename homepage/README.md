# 🏠 Homepage: The Dashboard

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.200000  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A modern, fully static, fast, and secure application dashboard. It serves as the "Single Pane of Glass" for the entire Home Lab.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** The "Single Pane of Glass." Homepage aggregates all services, bookmarks, and system stats into one cohesive interface. It transforms a chaotic list of ports and IPs into a structured, navigable catalogue.
* **The Ghost (Green Hat):** Static-First Performance. Unlike heavy dashboards, Homepage compiles to static files at runtime. It is incredibly lightweight, loading instantly on any device with minimal resource drain on the "IKE" server.
* **The Librarian (Blue Hat):** Configuration as Code. The entire dashboard is defined in YAML files (`services.yaml`, `widgets.yaml`). This allows for version control, easy backups, and rapid disaster recovery without needing to navigate a GUI to restore settings.
* **The Engineer (Red Hat):** Docker & API Integration. It connects directly to the Docker socket to monitor container health and queries service APIs (Sonarr, Radarr, Pi-hole) to display real-time statistics (e.g., active downloads, queries blocked) directly on the tile.

---

### 🌐 Network Topology
This stack operates as the central landing page:

* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web) to be accessible via your Reverse Proxy.
* **Backend Reach:** Connects to `${YOUR_NETWORK_2}` (Internal) to ping services, fetch API stats from secured containers, and monitor database up-times without exposing them to the web.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment, ensuring high availability, security, and documentation.

---

### 🚀 Implementation Notes
1. **Directory Structure:**
   Ensure your file hierarchy looks like this before starting:
   ```text
   /opt/homepage/
   ├── .env
   ├── docker-compose.yml
   └── config/
       ├── services.yaml
       ├── widgets.yaml
       ├── settings.yaml
       ├── bookmarks.yaml
       ├── docker.yaml
       ├── custom.css
       └── custom.js