# 🍿 Jellyfin: The Media Server

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.210500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** The Free Software Media System. It organizes video, audio, and photos from your storage media and streams them to any device.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Centralized Entertainment. Jellyfin acts as the "Brain" of the media stack, indexing content across multiple physical drives (B:, N:, Q:, G:) and presenting a unified library to the end-user.
* **The Ghost (Green Hat):** Hardware Transcoding. This stack is configured to pass through a specific NVIDIA GPU (ID: 1) to the container. This allows "IKE" to transcode high-bitrate 4K content to smaller clients (phones, tablets) without crushing the CPU.
* **The Librarian (Blue Hat):** Metadata Management. Jellyfin scrapes metadata for Movies, TV, Music, and Audiobooks, creating a rich visual interface. It stores its cache and config on the high-speed Q: drive for snappy UI performance.
* **The Engineer (Red Hat):** Networking & Discovery. It exposes DLNA ports (1900/udp) and Service Discovery ports (7359/udp) so that local devices (Smart TVs) can find the server instantly without manual IP entry.

---

### 🌐 Network Topology
* **Web UI:** Sits on `${YOUR_NETWORK_1}` (Web) for access via the Reverse Proxy.
* **Backend:** Sits on `${YOUR_NETWORK_2}` (Internal) to communicate with authentication services or other internal tools.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Transcoding Cache:**
    We map the transcoding directory to a physical disk (`/transcode`) rather than RAM to avoid OOM (Out of Memory) kills during long 4K movie sessions.
2.  **NVIDIA Drivers:**
    Ensure the NVIDIA Container Toolkit is installed and the GPU ID specified in the `.env` matches your specific card (Check with `nvidia-smi`).
3.  **Media Permissions:**
    Since media is spread across multiple drives (`B:`, `N:`, `Q:`, `G:`), ensure the Docker user (PUID 1001) has read/write access to these Windows directories.