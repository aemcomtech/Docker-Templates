# ⚡ n8n: The Automation Hive

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.213000  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A node-based workflow automation tool. This stack is architected for high-scale, AI-driven automation using distributed workers and Model Context Protocol (MCP) integration.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Distributed Processing. We do not run executions on the Editor node. Instead, we use "Queue Mode," delegating heavy lifting to a dedicated `n8n-worker`. This keeps the UI snappy even during heavy loads.
* **The Ghost (Green Hat):** Resource Isolation. By splitting the Editor, Worker, and Task Runners, we prevent a single heavy Python script or infinite loop from crashing the entire management interface.
* **The Librarian (Blue Hat):** External State. This stack relies on the "Hub" (Postgres + Redis). It uses Postgres to store workflow history (reliable storage) and Redis to manage the job queue (fast, ephemeral state).
* **The Engineer (Red Hat):** AI & Docker Integration. 
    * **Docker Watcher:** A sidecar that listens to the Docker socket and fires webhooks when containers start/stop.
    * **MCP Gateway:** A bridge allowing your AI Agents inside n8n to "speak" to external tools (YouTube, Playwright, Local Files) via the Model Context Protocol.

---

### 🌐 Network Topology
This stack operates as a cluster:
* **Editor (Main):** Sits on `${YOUR_NETWORK_1}` (Web). Accessible via Reverse Proxy. Handles Webhooks and UI.
* **Worker & Runners:** Sit on `${YOUR_NETWORK_2}` (Internal). They poll Redis for jobs and execute them silently.
* **MCP Gateway:** Sits on `${YOUR_NETWORK_2}` (Internal). Exposes tool APIs to the n8n AI Agent nodes.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Encryption Key (CRITICAL):**
    You **must** generate a random encryption key for `N8N_ENCRYPTION_KEY`. If you lose this, you lose access to all credentials stored in n8n.
2.  **The "Hub" Dependency:**
    This stack *requires* an external Postgres database and a Redis instance (defined as `postgres-hub` and `redis-hub` in the compose file).
3.  **Docker Watcher:**
    The `docker-watcher` service mounts the docker socket. It is configured to POST JSON data to `https://n8n-admin.${DOMAIN}/webhook/docker-logs` whenever a container starts. You must create this webhook workflow in n8n to receive the data.