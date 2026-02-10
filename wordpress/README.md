# 📝 WordPress: The Publisher

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.235500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** The world's most popular Content Management System (CMS). This stack includes a dedicated MariaDB database and is pre-configured for reverse proxy environments.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** The Publishing Engine. WordPress powers the blog/site frontend. This stack separates the application logic (`wordpress`) from the data storage (`db`), ensuring a clean architecture.
* **The Ghost (Green Hat):** Resource Capping. PHP applications can be memory hungry. We enforce a strict **512MB RAM limit** on both the Database and the App containers. This prevents a runaway plugin from consuming all of "IKE's" memory and crashing other services.
* **The Librarian (Blue Hat):** Persistent Storage. Data is split into two volumes: `db_data` (SQL records) and `wordpress_data` (Uploads, Plugins, Themes). This separation simplifies backup strategies.
* **The Engineer (Red Hat):** Proxy Awareness. The stack injects a custom `WORDPRESS_CONFIG_EXTRA` block. This forces WordPress to trust `HTTP_X_FORWARDED_PROTO` headers, preventing the dreaded "Infinite Redirect Loop" when running behind SSL termination (NPM/Caddy).

---

### 🌐 Network Topology
* **Frontend:** The `wordpress` container connects to `${YOUR_NETWORK_1}` (Web) to be accessible via the Reverse Proxy.
* **Backend:** Both `wordpress` and `db` connect to `${YOUR_NETWORK_2}` (Internal). The Database is **not** exposed to the external web network, ensuring SQL traffic remains isolated.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **First Launch:**
    On the first run, WordPress will take 30-60 seconds to initialize as it populates the MariaDB tables. Watch the logs: `docker logs wordpress_app`.
2.  **Domain Configuration:**
    Ensure `WP_HOME` and `WP_SITEURL` in the `.env` file match your exact domain (e.g., `https://blog.aemcomtech.au`). Mismatches here will break asset loading (CSS/JS).
3.  **Database Security:**
    Change the `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD` immediately. Do not use the defaults in a production environment.