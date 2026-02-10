# 🌐 Cloudflare DDNS: The Dynamic Gateway

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.183440  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** Automatically update Cloudflare DNS records to point to the current public IP of the "IKE" home lab server.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Ensures structural continuity. Without a stable DNS pointer, the rest of the stack (Authentik, Jellyfin, etc.) effectively disappears from the web.
* **The Ghost (Green Hat):** Operates in the background with a minimal footprint. It watches for IP changes and updates the record before your users even notice a disruption.
* **The Scholar (Blue Hat):** A perfect example of "Infrastructure as Code." We treat our connection as a variable, not a constant, allowing for maximum flexibility with residential ISPs.
* **The Sentry (Red Hat):** Reduces manual intervention. Automating the IP update prevents "lock-out" scenarios where you're away from home and lose access to your management tools.

---

### 🛰️ How it Works
Residential internet connections usually have "dynamic" IPs that change periodically. This service acts as a heartbeat monitor.

1.  **Check:** Every few minutes, the container checks your current public IP.
2.  **Compare:** It compares this with the record currently held at Cloudflare.
3.  **Update:** If they don't match, it sends an API request to Cloudflare to update `aemcomtech.au` and its subdomains.

---

### 👨‍💻 Professional Context
In project management, we plan for "known unknowns." A changing IP address is exactly that. By deploying this DDNS solution, we mitigate the risk of service downtime, ensuring that the **salary packaging support tools** or **family media services** remain online 24/7.

---

### 🛒 Support the Lab
Keep your connection stable and represent the self-hosting community:
👉 **[shop.aemcomtech.au](https://shop.aemcomtech.au)**