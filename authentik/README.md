# 🛡️ aem-authentik: Centralized Identity & Access Management

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.174500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** Secure self-hosted portal for the whānau and private services, featuring SSO (Single Sign-On) and automated database backups.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Sets the standard for zero-trust architecture. Authentik acts as the "Single Source of Truth" for your digital kingdom, consolidating disparate logins into a unified flow.
* **The Sentry (Green Hat):** Hardens the perimeter. By using the Jellyfin Outpost and external networks, it ensures that your whānau can access services safely without exposing the underlying hardware directly.
* **The Scholar (Blue Hat):** A robust implementation of a distributed stack. Features health-dependent service starts, automated SQL dumps, and multi-network bridging.
* **The Guardian (Red Hat):** Implements an automated backup cycle (`auth-backup`) to ensure that even if the "IKE" database corrupts, the keys to the castle are preserved.

---

### 🌐 Network & Security Topology
Authentik sits at the intersection of your internal infrastructure and the public web.

[Image of OpenID Connect flow architecture]

* **default:** Connects the **authentik-server** to your reverse proxy for public access.
* **authentik:** The internal bridge for all other containers that require authentication or identity validation.

---

### 👨‍💻 Professional Context
Leveraging my background as a **BA/PM**, this stack is designed with a "Fail-Safe" mentality. We aren't just running an app; we are running a service with a **7-day rolling backup retention** policy and resource limits to ensure system stability on the "IKE" server.

---

### 🛒 Support the Lab
Keep the authentication flows running and represent the community:
👉 **[shop.aemcomtech.au](https://shop.aemcomtech.au)**