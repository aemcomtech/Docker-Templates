# 🗄️ The Data-Hub: Centralized Storage

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.184500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A high-performance, centralized database cluster designed to serve as the single source of truth for the entire homelab.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Consolidation is efficiency. Instead of running 20 isolated database containers with overhead for each, we deploy a "Hub" model. One Postgres, one MariaDB, one Redis—tuned for performance and shared across the stack.
* **The Ghost (Green Hat):** Data Sovereignty requires stability. By using named volumes and specific version pinning, we ensure that updates to client services (like Sonarr or Radarr) do not corrupt the core data layer.
* **The Librarian (Blue Hat):** Order from chaos. `pgAdmin` provides a visual interface to inspect schemas, run queries, and verify backups, turning the abstract "database" into a manageable asset.
* **The Vault (Red Hat):** This stack isolates your data from the application layer. Even if a frontend service is compromised or broken, the data remains secure and accessible within the Hub.

---

### 🌐 Network Topology
This stack acts as a **Service Provider** to your other containers.

* **YOUR_NETWORK_1 & 2:** The Hub connects to both your Proxy network and your Internal network. This allows services like `Authelia` (on the proxy net) and `Sonarr` (on the internal net) to both reach `postgres-hub` without complex routing rules.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment, ensuring high availability, security, and documentation.

---

### 🚀 Implementation Notes
1. **Performance Tuning:** The `postgres-hub` container includes a custom command block tuning `shared_buffers` and `work_mem` for a system with ample RAM (like "IKE"). Adjust these values if your host has less than 16GB RAM.
2. **Transaction Isolation:** `mariadb-hub` is configured with `READ-COMMITTED` isolation. This is a strict requirement for services like **Nginx Proxy Manager** and **Nextcloud** to function correctly.
3. **Health Checks:** All services include native health checks. Dependent services in other stacks will wait for `healthy` status before attempting to connect, preventing startup race conditions.

---

### 🛒 Support the Movement
Represent the homelab community and support these builds:
👉 **[shop.aemcomtech.au](https://shop.aemcomtech.au)**