# 🔐 Vaultwarden: The Digital Vault

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.233000  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A lightweight, Rust-based implementation of the Bitwarden server API. It grants you total control over your passwords, identity data, and secure notes.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Zero-Knowledge Sovereignty. Unlike cloud password managers (LastPass, 1Password) where your vault resides on someone else's computer, Vaultwarden keeps your encrypted data on "IKE". Only you hold the master key.
* **The Ghost (Green Hat):** Rust Efficiency. The official Bitwarden server uses MSSQL and requires massive resources. Vaultwarden runs on a fraction of the RAM (often <50MB) using SQLite, making it perfect for self-hosting without sacrificing security.
* **The Librarian (Blue Hat):** Automated Backup Strategy. This stack includes a dedicated "Sidecar" backup container (`ttionya/vaultwarden-backup`). It wakes up hourly, compresses your database and attachments, and rotates old backups automatically.
* **The Engineer (Red Hat):** WebSocket Sync. We enable the WebSocket server on port 3012. This ensures that when you add a password on your phone, your browser extension updates instantly without needing a manual refresh.

---

### 🌐 Network Topology
* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web) to be accessible via Reverse Proxy (`https://vault.domain.com`).
* **Backend:** Uses a dedicated internal network (`${YOUR_NETWORK_2}`) to link the main server with the backup sidecar securely.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Signups (CRITICAL):**
    The variable `SIGNUPS_ALLOWED` is set to `true` by default in the template to allow you to create your initial account. **Immediately** change this to `false` and restart the container after you have registered to prevent unauthorized access.
2.  **HTTPS Requirement:**
    Bitwarden/Vaultwarden clients *require* HTTPS. You must run this behind a Reverse Proxy (NPM, Caddy, Traefik) with a valid SSL certificate.
3.  **Backup Location:**
    Backups are stored in `./backups`. Ensure this directory is included in your off-site backup strategy (e.g., Rclone to Google Drive or AWS S3).