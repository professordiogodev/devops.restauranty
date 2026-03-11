Replace your entire README with this cleaned version:

# 🍽️ Restauranty – Microservices DevOps Platform

Restauranty is a **microservices-based restaurant management platform** deployed on **Azure Kubernetes Service (AKS)** using modern DevOps practices including **Infrastructure as Code, CI/CD, monitoring, and secure HTTPS routing**.

This project demonstrates how to build and operate a **production-style cloud-native system**.

---

# 🚀 Live Demo

### Application
https://restauranty.shishir-pariyar.com

### Monitoring (Grafana)
https://grafana.shishir-pariyar.com

---

# 🏗️ Architecture

![Architecture](screenshots/architecture.png)

---

# 📁 Project Structure

![Project Structure](screenshots/project_structure.png)

---

# 🧰 Tech Stack

## Infrastructure
- Terraform
- Azure Kubernetes Service (AKS)
- Azure Container Registry (ACR)
- Azure Load Balancer

## Containers
- Docker
- Docker Buildx

## Orchestration
- Kubernetes
- Deployments
- Services
- Ingress
- Secrets

## Networking
- Namecheap DNS
- NGINX Ingress Controller
- Let's Encrypt TLS (cert-manager)

## CI/CD
- GitHub Actions
- Docker build pipeline
- Automatic deployment to AKS

## Monitoring
- Prometheus
- Grafana
- Kubernetes metrics
- Application metrics

---

# ⚙️ Local Development

### Start MongoDB

```bash
docker run -d \
 --name my-mongo \
 -p 27017:27017 \
 -v mongo-data:/data/db \
 mongo:latest
Start Services

Auth service

cd backend/auth
npm install
npm start

Discounts service

cd backend/discounts
npm install
npm start

Items service

cd backend/items
npm install
npm start

Frontend

cd client
npm install
npm start
🐳 Docker

Each microservice is containerized using Docker.

Example:

docker build -t restauranty-auth ./backend/auth

Images are pushed to:

restaurantyacrshishir.azurecr.io
☸️ Kubernetes Deployment

Deploy services:

kubectl apply -f k8s/

Check pods:

kubectl get pods

Check services:

kubectl get svc

Check ingress:

kubectl get ingress
🔐 HTTPS & TLS

TLS certificates are issued automatically using:

cert-manager

Let's Encrypt

Ingress handles secure routing for:

restauranty.shishir-pariyar.com

grafana.shishir-pariyar.com

🔄 CI/CD Pipeline

CI/CD implemented with GitHub Actions

Pipeline stages:

Install dependencies

Build Docker images

Push images to Azure Container Registry

Deploy to AKS

Workflow location:

.github/workflows/ci-cd.yaml
📊 Monitoring

Monitoring stack:

Prometheus

Grafana

Metrics collected from:

Kubernetes nodes

Pods

Microservices

Application endpoints

Grafana dashboard:

https://grafana.shishir-pariyar.com

🔒 Security

Kubernetes Secrets for environment variables

HTTPS with TLS certificates

JWT authentication via Auth microservice

Single entry point using Ingress

📦 Infrastructure as Code

Infrastructure created with Terraform

Resources:

Azure Resource Group

Azure Kubernetes Service

Azure Container Registry

👨‍💻 Author

Shishir Pariyar

DevOps Engineer | Cloud & Kubernetes Enthusiast

📜 License

HEAD
--


This project is for educational and portfolio purposes.
2f3a040 (Clean README and remove old project description)
