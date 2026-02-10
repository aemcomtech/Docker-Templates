# 💓 Uptime Kuma: The Pulse

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.230000  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A fancy, self-hosted monitoring tool. It tracks the status of your services (HTTP, TCP, Docker) and creates beautiful status pages.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** The Dashboard. Uptime Kuma provides the "Single Source of Truth" regarding the health of the "IKE" lab. It visualizes uptime percentages, response times, and incident history in a clean, modern UI.
* **The Ghost (Green Hat):** Local & Private. Unlike external tools (like Pingdom or UptimeRobot) which require public IPs to work, Kuma sits inside your network. It can monitor internal IPs, local ports, and hidden containers that the outside world cannot see.
* **The Librarian (Blue Hat):** Incident Logging. It keeps a persistent history of every outage. If a service goes down at 3 AM, Kuma records it and sends a notification (Discord, Telegram, Email), ensuring you are never in the dark about stability issues.
* **The Engineer (Red Hat):** Docker Awareness. By mapping the `/var/run/docker.sock`, Kuma can monitor containers directly by name. If a container enters an "Unhealthy" state, Kuma knows instantly, even if the web server inside is still technically responding.

---

### 🌐 Network Topology
* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web) to be accessible via Reverse Proxy (e.g., `status.domain.com`).
* **Backend Reach:** Connected to `${YOUR_NETWORK_2}` (Internal) to ping databases (`postgres-hub`), caches (`redis-hub`), and other isolated services.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Docker Socket Security:**
    This container mounts the Docker socket to monitor container statuses. While convenient, ensure this service is not exposed publicly without strong authentication (Authentik/Cloudflare Access) in front of it.
2.  **Notification Triggers:**
    You must configure notifications manually in the UI. It supports virtually every platform (Discord, Slack, Email, Pushover, etc.).
3.  **Data Persistence:**
    This stack uses a **Named Volume** (`uptime-kuma-data`) rather than a bind mount. This is often preferred for SQLite-heavy applications to prevent database locking issues on some file systems.