# Audiobookshelf Docker Deployment

# AUTHOR:  aemcomtech.au
# VERSION: 1.2026.02.10.170845
# WEBSITE: aemcomtech.au
# PURPOSE: Secure a Docker-centric homelab repository by excluding sensitive 
#          environment variables, local database binaries, and platform-specific 
#          build artifacts.

## 🎩 MadHatter Summary:
* **The Sentry (White Hat):** Guards the gates by ensuring secrets like Authentik tokens and Cloudflare keys never leave the local environment.
* **The Optimizer (Green Hat):** Keeps the repo lean and mean by stripping out bloated DB volumes and temporary logs that don't belong in version control.
* **The Scholar (Blue Hat):** Demonstrates the 'Separation of Concerns' principle; code goes in the repo, data stays in the volume, and secrets stay in the .env.
* **The Fixer (Red Hat):** Prevents accidental credential leaks that lead to server takeovers—crucial for anyone hosting public services.

---

## 💰 Economic Impact & Savings (2026 Estimate)

Self-hosting an audiobook library provides a significant alternative to recurring commercial subscriptions. Based on 2026 market rates in Australia, the potential savings are detailed below:

### Audible Australia Subscription Costs
| Plan Tier | Monthly Cost (AUD) | Annual Total (AUD) |
| :--- | :--- | :--- |
| **Audible Standard** | $8.99 | $107.88 |
| **Audible Premium Plus (1 Credit)** | $16.45 | $197.40 |
| **Audible Premium Plus (2 Credits)** | $27.45 | $329.40 |

### Estimated Savings Analysis
* **Direct Savings:** Moving to a self-hosted stack saves between **$8.99 and $27.45 per month**.
* **Annual Impact:** Users avoid costs ranging from **$107.88 to $329.40** per year.

---

## 🚀 Features
* **Multi-Format Support:** Advanced management for audiobooks and podcasts.
* **Network Integration:** Configured to join external networks for seamless reverse proxy access.
* **ISO/IEC 27001 Alignment:** Principles of information security are baked into the deployment structure.

## 🛠️ Deployment Details
* **Container Name:** `audiobookshelf`
* **Port Mapping:** Host `13378` -> Container `80`

## 📂 Volume Configuration
Ensure you map your local directories to the following container paths in the `docker-compose.yml`:
* `/audiobooks`: Your main audiobook library.
* `/podcasts`: Your podcast library.
* `/config`: Persistent application data.
* `/metadata`: Book covers and metadata cache.

## 🚦 Usage
To deploy this service:

1. Clone this repository.
2. Update the volume paths in `docker-compose.yml`.
3. Execute via PowerShell:

```powershell
docker-compose up -d
