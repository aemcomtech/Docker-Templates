# 🎧 Audiobookshelf: The narrator

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.170845  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A self-hosted audiobook and podcast server. It tracks listening progress, manages metadata, and streams to mobile apps.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Centralized Spoken Word. Audiobookshelf decouples your library from proprietary ecosystems (Audible/Apple). It acts as the single source of truth for your audiobooks and podcasts, serving them to any device via a unified API.
* **The Ghost (Green Hat):** Metadata Efficiency. The stack separates the heavy media files (G: Drive) from the high-I/O configuration and metadata (Q: Drive). This ensures that browsing the library is instant, even if the mechanical drives containing the audio are spinning up.
* **The Librarian (Blue Hat):** Automatic Organization. It fetches metadata from Audible, Google Books, and MusicBrainz, automatically tagging your authors, narrators, and series. It maintains reading progress sync across all devices.
* **The Engineer (Red Hat):** Mobile Sync. Designed to work with the Audiobookshelf iOS/Android app. It supports offline downloading on clients while keeping the server state synchronized.

---

### 🌐 Network Topology
* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web) to be accessible via Reverse Proxy (`audio.domain.com`) or directly via LAN.
* **Backend:** Completely self-contained; does not require external database dependencies (uses internal SQLite).

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Storage Mapping:**
    The compose file uses variables for paths. Ensure `ABS_MEDIA_DIR` points to your large storage (Audiobooks) and `ABS_CONFIG_DIR` points to fast storage (SSD/NVMe) for best performance.
2.  **Port Handling:**
    The default port is mapped to `13378` on the host to avoid conflicts with other media servers.
3.  **Tone & Tone:**
    This service includes a health check to ensure the web server is responding before the container is marked "Healthy" by Docker.