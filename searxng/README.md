# 🔍 SearXNG: The Private Eye

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.223000  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A privacy-respecting, hackable metasearch engine. It aggregates results from Google, Bing, DuckDuckGo, and Wikipedia without tracking you.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Search Sovereignty. Instead of relying on a single provider that bubbles your results based on your history, SearXNG queries multiple engines simultaneously. It strips the tracking pixels and presents a clean, unbiased list of results.
* **The Ghost (Green Hat):** The Proxy. SearXNG acts as a man-in-the-middle. When you search for "Linux ISOs," Google sees a request coming from your "IKE" server's IP, not your personal laptop or phone. Your browser fingerprint is never leaked to the big data giants.
* **The Librarian (Blue Hat):** Aggregation. This stack is heavily customized to search specific domains. It includes custom "shortcuts" for IT documentation (Docker Hub, ArchWiki, LinuxServer.io) and job hunting (Seek, LinkedIn), creating a unified research dashboard.
* **The Engineer (Red Hat):** Redis Caching. This stack connects to the central `redis-hub` (Database 2). This caches frequent queries to reduce outbound traffic and speed up repeated searches, keeping the "IKE" server responsive.

---

### 🌐 Network Topology
* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web) to be accessible via `scope.domain.com`.
* **Backend:** Sits on `${YOUR_NETWORK_2}` (Internal) to connect to `redis-hub` for caching.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Secret Key:**
    You must generate a strong secret key for `SEARXNG_SECRET`.
    ```bash
    openssl rand -hex 32
    ```
2.  **Redis Database:**
    This stack is configured to use **Database 2** on your `redis-hub` (`redis://redis-hub:6379/2`) to avoid conflicts with n8n (which uses DB 1) or other services.
3.  **Settings File:**
    The container mounts a `./settings.yml`. This file contains the "AEMComTech" custom engine definitions. Ensure this file is present before starting the container.