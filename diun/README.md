# 🔔 Diun: The Sentinel

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.190500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A lightweight, noise-free Docker image update notifier. It watches your containers and reports updates without blindly applying them.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Knowledge is power. Before we update a critical service, we must know an update exists. Diun provides the intelligence required to make informed decisions rather than relying on "set and forget" auto-updates.
* **The Ghost (Green Hat):** Stability is king. Unlike Watchtower, which can break your stack by auto-updating to a buggy release at 3 AM, Diun simply flags the change. You remain in control of *when* the update happens.
* **The Librarian (Blue Hat):** Organized reporting. This stack integrates directly with **n8n** and **Discord**, turning raw update data into structured notifications or automated workflows (e.g., creating a Jira ticket or a To-Do item).
* **The Scout (Red Hat):** Supply chain awareness. By monitoring tags, we can see when upstream providers are patching vulnerabilities or releasing new features, keeping "IKE" ahead of the curve.

---

### 🌐 Network Topology
This stack requires access to the Docker Socket and the external internet/internal network for notifications.

* **YOUR_NETWORK_1:** Connected to the network where your notification targets live (e.g., your n8n instance or simply the WAN for Discord).
* **Docker Socket:** Mapped RO (Read Only) implicitly or RW if required, though Diun only needs to *read* container labels to function.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment, ensuring high availability, security, and documentation.

---

### 🚀 Implementation Notes
1. **Schedule:** The default schedule is set to `1 9-17 * * 0-6` (Every hour from 9 AM to 5 PM, Mon-Sat). This prevents notification fatigue during sleeping hours.
2. **Registry Auth:** We use `DOCKER_HUB_TOKEN` (PAT) instead of a password. This is critical for security and to bypass anonymous rate limits imposed by Docker Hub.
3. **Integration:** This template is pre-configured to send a `GET` webhook to an n8n instance. This allows for complex logic downstream (e.g., "If update is for Plex, update immediately; if update is for Postgres, wait for approval").

---

### 🛒 Support the Movement
Represent the homelab community and support these builds:
👉 **[shop.aemcomtech.au](https://shop.aemcomtech.au)**