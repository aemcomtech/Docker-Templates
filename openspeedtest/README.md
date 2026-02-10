# OpenSpeedTest Docker Deployment

# ==============================================================================
# AUTHOR:  aemcomtech.au
# VERSION: 1.2026.02.10.170845
# WEBSITE: aemcomtech.au
# PURPOSE: Secure a Docker-centric homelab repository by excluding sensitive 
#          environment variables, local database binaries, and platform-specific 
#          build artifacts.
# ==============================================================================

## 🎩 MadHatter Summary:
* **The Sentry (White Hat):** Ensures that network performance data is kept within the private infrastructure, preventing external leakage of internal throughput metrics.
* **The Optimizer (Green Hat):** Provides a lightweight, browser-based testing tool that doesn't require client-side software, keeping the environment lean.
* **The Scholar (Blue Hat):** Implements localized performance benchmarking to separate ISP limitations from internal network bottlenecks.
* **The Fixer (Red Hat):** Identifies packet loss and congestion within the Docker network before they impact critical public-facing services.

## 🚀 Features
* **Zero Client Software:** Run speed tests from any device with a web browser.
* **Network Transparency:** Benchmarks internal LAN/VLAN speeds independently of your ISP.
* **Reverse Proxy Ready:** Pre-configured to join the `caddy_plex_default` network for secure remote access.
* **ISO/IEC 27001 Alignment:** Designed with availability and performance monitoring principles in mind.

## 🛠️ Deployment Details
* **Container Name:** `openspeedtest`
* **Internal Port:** `3000` (Mapped via environment variable to `3001` for external access).
* **Timezone:** Set to `Australia/Melbourne` for accurate logging.

## 📂 Volume Configuration
This service is intentionally stateless to maximize performance. No persistent volumes are required for standard operation, aligning with the **Optimizer** philosophy of keeping repositories bloated-free.

## 🚦 Usage
To deploy this network diagnostic tool:

1. Clone this repository.
2. Ensure the external network is active on your host.
3. Deploy using PowerShell:

```powershell
docker-compose up -d