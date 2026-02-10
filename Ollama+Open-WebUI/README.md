# 🖥️ Guacamole: The Remote Gateway

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.195500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A clientless remote desktop gateway. It translates RDP, VNC, and SSH protocols into HTML5, allowing access to internal systems via a standard web browser.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Universal access without universal exposure. We do not open RDP ports (3389) or SSH ports (22) to the WAN. Instead, we tunnel everything through a single, secured HTTPS session.
* **The Ghost (Green Hat):** Zero footprint. There are no plugins or clients to install. You can manage your "IKE" server or check your "Arr Stack" from a library computer, a tablet, or a restricted corporate laptop.
* **The Librarian (Blue Hat):** Audit trails. Guacamole creates a centralized log of who accessed which machine and when. It supports session recording for compliance and troubleshooting.
* **The Engineer (Red Hat):** Protocol Translation. The `guacd` daemon handles the heavy lifting of protocol negotiation, while the Tomcat frontend simply serves the pixels. This split architecture ensures stability and performance.

---

### 🌐 Network Topology
This stack operates in two parts:

* **Guacd (The Proxy):** Sits on the internal network, reaching out to your actual servers (Windows VMs, Linux Hosts) via RDP/SSH.
* **Guacamole (The Frontend):** Sits on the Proxy network, serving the UI to you via your browser. It talks to `postgres-hub` for user data and `guacd` for the actual connection.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment, ensuring high availability, security, and documentation.

---

### 🚀 Implementation Notes
1. **Database Initialization (CRITICAL):**
   Guacamole does *not* auto-create its database schema. You must generate the SQL and run it against `postgres-hub` manually before the container will start:
   ```bash
   docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --postgres > initdb.sql
   # Then import initdb.sql into your 'guacamole_main' database.