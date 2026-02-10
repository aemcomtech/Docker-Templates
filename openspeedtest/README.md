# 🚀 OpenSpeedTest: The Network Gauge

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.214500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A client-side, HTML5 network performance tool. It measures LAN and WAN bandwidth without requiring Flash, Java, or client-side apps.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Truth in Bandwidth. Unlike public speed tests (Ookla) which measure your internet connection, OpenSpeedTest measures the speed *between* your device and the "IKE" server. This allows you to verify internal Wi-Fi performance and switch throughput.
* **The Ghost (Green Hat):** Zero Footprint. No installation required on client devices. It runs entirely in the browser using HTML5, making it compatible with everything from Smart TVs to iPhones.
* **The Librarian (Blue Hat):** Benchmarking. Use this to establish a baseline for your network. If streaming buffers or file transfers lag, OpenSpeedTest proves whether the bottleneck is your local network or the ISP.
* **The Engineer (Red Hat):** Stress Testing. It generates real traffic loads to saturate the link, allowing you to test the thermal stability of your router or the throughput of a new Powerline adapter.

---

### 🌐 Network Topology
* **Frontend:** Sits on `${YOUR_NETWORK_1}` (Web). This allows you to test speeds over the Reverse Proxy (simulating external access) or directly via IP (for raw LAN speed).
* **Backend Reach:** Does not require backend database access.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Testing Context:**
    * **Direct IP (http://192.168.x.x:3000):** Tests raw LAN speed (Switch/Wi-Fi limit).
    * **Domain (https://speed.domain.com):** Tests the Reverse Proxy overhead and SSL encryption speed.
2.  **Resources:**
    While lightweight, the container needs CPU to generate the random data for the test. If "IKE" is under heavy load (e.g., transcoding Plex), results may be artificially lower.