# 🧠 AI & LLM: Local Intelligence

**AUTHOR:** aemcomtech.au  
**VERSION:** 1.2026.02.10.204500  
**WEBSITE:** [aemcomtech.au](https://aemcomtech.au)  
**PURPOSE:** A completely offline, privacy-focused Artificial Intelligence stack running locally on "IKE". It provides LLM inference and a ChatGPT-like interface.

---

### 🎩 MadHatter Summary
* **The Architect (White Hat):** Sovereignty over Intelligence. By hosting LLMs locally, we ensure that sensitive queries, code snippets, and personal data never leave the `aemcomtech.au` infrastructure. No data mining, no subscription fees.
* **The Ghost (Green Hat):** Hardware Acceleration. This stack is tuned to leverage the dual NVIDIA RTX 3060 GPUs. It uses the `nvidia-container-runtime` to pass GPU compute capabilities directly to the Docker containers for rapid token generation.
* **The Librarian (Blue Hat):** Retrieval Augmented Generation (RAG). Open WebUI is configured to ingest local documents (PDFs, Markdown) and allow the AI to "chat" with your personal knowledge base.
* **The Engineer (Red Hat):** The "Sidecar" Architecture. 
    * **Ollama:** The backend inference engine (The Brain). It exposes an API on port 11434.
    * **Open WebUI:** The frontend interface (The Face). It connects to Ollama internally and provides the chat history, user management, and MCP integration.

---

### 🌐 Network Topology
* **Ollama:** Sits strictly on `${YOUR_NETWORK_2}` (Internal). It does not need to be exposed to the public web directly.
* **Open WebUI:** Sits on `${YOUR_NETWORK_1}` (Web) for user access and `${YOUR_NETWORK_2}` (Internal) to communicate with Ollama.

---

### 👨‍💻 Behind the Lab
I am a **Business Analyst** and **Project Manager** (BABOK/PMBOK certified). This stack represents the transition from corporate system optimization to personal **Digital Sovereignty**. I treat my home lab ("IKE") with the same rigor as an enterprise environment.

---

### 🚀 Implementation Notes
1.  **NVIDIA Drivers:**
    Ensure your host machine has the NVIDIA Container Toolkit installed:
    ```bash
    sudo apt-get install -y nvidia-container-toolkit
    ```
2.  **Model Initialization:**
    Ollama starts empty. You must pull a model before chatting:
    ```bash
    docker exec -it ollama ollama pull llama3
    ```
3.  **MCP Configuration (Model Context Protocol):**
    This stack mounts a `./mcp.json` file. Ensure this file exists in your config directory, or the container may fail to start.
    ```bash
    touch mcp.json
    ```