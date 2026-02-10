# 🗼 Watchtower: The Sentinel

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.234500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A process for automating Docker container base image updates. It watches your running containers and updates them when a new image is pushed to the registry.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Automated Hygiene. Watchtower ensures your stack is always running the latest patches and features without manual intervention. It acts as the "Windows Update" for your Docker environment, but cleaner.
* **The Ghost (Green Hat):** Garbage Collection. Configured with `WATCHTOWER_CLEANUP=true`, it automatically removes the old image layers after a successful update. This prevents your disk from filling up with "dangling" images over time.
* **The Librarian (Blue Hat):** Scheduling. We do not run continuous polling. Instead, Watchtower is scheduled via cron (`0 4 * * *`) to run once daily at 4:00 AM, ensuring updates happen during low-traffic windows to minimize disruption.
* **The Engineer (Red Hat):** Notification Relay. Using the Shoutrrr library, Watchtower sends a detailed report to your Discord server whenever containers are updated. You wake up to a log of exactly what changed.

---

### 🌐 Network Topology
* **Docker Socket:** Mounts `/var/run/docker.sock` to control the host's Docker daemon.
* **Outbound Reach:** Connects to `${YOUR_NETWORK_1}` (Web) to pull images from Docker Hub and push notifications to Discord.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **Notification URL:**
    The `.env` file requires a Shoutrrr-formatted URL. For Discord, the format is:
    `discord://token@webhook_id`
    (Check the [Shoutrrr documentation](https://containrrr.dev/shoutrrr/) for other services like Telegram or Slack).
2.  **API Version:**
    We explicitly set `DOCKER_API_VERSION=1.44` to ensure compatibility with modern Docker Engines on the host. If you experience connection errors, check your engine version with `docker version`.
3.  **Selective Updates:**
    This instance monitors *all* containers. To exclude a specific critical container (like your database) from auto-updates, add the label `com.centurylinklabs.watchtower.enable=false` to that container's compose file.