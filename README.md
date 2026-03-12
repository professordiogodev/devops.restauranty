# 🍽️ Restauranty

![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-blue?logo=kubernetes)
![Terraform](https://img.shields.io/badge/Terraform-IaC-purple?logo=terraform)
![Azure](https://img.shields.io/badge/Azure-AKS-blue?logo=microsoftazure)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-black?logo=githubactions)
![Monitoring](https://img.shields.io/badge/Monitoring-Prometheus%20%7C%20Grafana-orange?logo=grafana)

A **cloud-native restaurant management platform** built using **microservices architecture** and deployed on **Azure Kubernetes Service (AKS)** with modern **DevOps practices**.

---

# 🚀 Live Demo

Application  
https://restauranty.shishir-pariyar.com

Monitoring (Grafana)  
https://grafana.shishir-pariyar.com

---

# 🏗️ Architecture

```
Browser
   │
   ▼
NGINX Ingress (HTTPS)
   │
   ├── /api/auth → Auth Service (Node.js)
   ├── /api/items → Items Service (Node.js)
   ├── /api/discounts → Discounts Service (Node.js)
   │
   ▼
MongoDB Database
```

Architecture diagram:

screenshots/architecture.png

---

# 📁 Project Structure

```
restauranty
│
├── backend
│   ├── auth
│   ├── discounts
│   └── items
│
├── client
│
├── k8s
│
├── terraform
│
├── screenshots
│
└── .github/workflows
    └── ci-cd.yaml
```

---

# 🧰 Tech Stack

## Frontend
- React 18
- React Router
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express
- JWT Authentication
- bcryptjs

## Database
- MongoDB

## Storage
- Cloudinary

---

# 🐳 Docker

Build example:

```bash
docker build -t restauranty-auth ./backend/auth
```

Images pushed to:

```
restaurantyacrshishir.azurecr.io
```

---

# ☸️ Kubernetes

Deploy services:

```bash
kubectl apply -f k8s/
```

Check resources:

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

---

# 🌐 Networking

- NGINX Ingress Controller
- Azure Load Balancer
- Namecheap DNS

---

# 🔐 HTTPS & TLS

Certificates issued automatically using:

- cert-manager
- Let's Encrypt

Secure endpoints:

https://restauranty.shishir-pariyar.com  
https://grafana.shishir-pariyar.com

---

# ⚙️ Local Development

Start MongoDB

```bash
docker run -d -p 27017:27017 --name my-mongo mongo
```

Start services

Auth

```bash
cd backend/auth
npm install
npm start
```

Discounts

```bash
cd backend/discounts
npm install
npm start
```

Items

```bash
cd backend/items
npm install
npm start
```

Frontend

```bash
cd client
npm install
npm start
```

---

# 🔄 CI/CD

CI/CD implemented with **GitHub Actions**.

Pipeline:

1. Install dependencies
2. Build Docker images
3. Push to Azure Container Registry
4. Deploy to AKS

Workflow:

```
.github/workflows/ci-cd.yaml
```

---

# 🔑 Secret Management

Sensitive values stored in **Kubernetes Secrets**.

Examples:

- MongoDB URI
- JWT Secret
- Cloudinary credentials

---

# 📊 Monitoring

Monitoring stack:

- Prometheus
- Grafana

Grafana dashboard:

https://grafana.shishir-pariyar.com

---

# 🔒 Security

- HTTPS with TLS
- JWT authentication
- Kubernetes Secrets
- Secure ingress routing

---

# 📦 Infrastructure as Code

Infrastructure created using **Terraform**.

Resources:

- Azure Resource Group
- Azure Kubernetes Service
- Azure Container Registry

---

# 👨‍💻 Author

**Shishir Pariyar**  
DevOps Engineer | Cloud & Kubernetes

---

# 📜 License

Educational & portfolio project.
