# 📽️ The Arr-Stack: Automated Media

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.173600  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A privacy-hardened, automated media acquisition stack using a centralized VPN gateway to eliminate subscription reliance.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Implements a Sidecar networking pattern. By tethering all services to the Gluetun container, we create a unified, leak-proof environment where the VPN is the only exit node.
* **The Ghost (Green Hat):** The ultimate "Kill-Switch." If the VPN container drops, the entire stack loses connectivity instantly. No IP leaks, no exceptions.
* **The Librarian (Blue Hat):** A practical demonstration of shared network namespaces. All services communicate over `localhost`, significantly reducing the complexity of internal routing.
* **The Pirate (Red Hat):** Reclaims digital assets from the subscription cycle. Integrates Soulseek and BitTorrent into a seamless, automated workflow for the modern homelab.

---

### 🌐 Network Topology
This stack utilizes a shared network namespace. Every service in this file (excluding Gluetun itself) uses `network_mode: "service:gluetun"`.

* **YOUR_NETWORK_1:** Connected to your reverse proxy (e.g., NPM or Caddy).
* **YOUR_NETWORK_2:** Connected to your authentication stack (e.g., Authentik).

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment, ensuring high availability, security, and documentation.

---

### 🚀 Implementation Notes
1. **Database:** This stack expects a centralized Postgres instance named `postgres-hub`.
2. **Ports:** Because of the sidecar mode, all ports are mapped on the **gluetun** container. To access Sonarr, you visit `http://<IP>:8989`.
3. **Storage:** Ensure your `.env` file defines `${TV_PATH}`, `${MOVIES_PATH}`, and `${DOWNLOADS_PATH}` to point to your Windows host drives.

---

### 🛒 Support the Movement
Represent the homelab community and support these builds:
👉 **[shop.aemcomtech.au](https://shop.aemcomtech.au)**