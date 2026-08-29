Restauranty – DevOps Microservices Platform
Project Overview
Restauranty is a cloud-native restaurant management platform built using a microservices architecture and deployed on Azure Kubernetes Service (AKS).
The platform includes three backend microservices and a React frontend, all containerized with Docker and orchestrated with Kubernetes. A full DevOps pipeline automates build, deployment, and monitoring.
The system demonstrates modern DevOps practices including:
Containerization with Docker
Infrastructure as Code using Terraform
Kubernetes orchestration on Azure AKS
Continuous Integration & Deployment with GitHub Actions
Monitoring with Prometheus and Grafana
Secure configuration using Kubernetes Secrets

Architecture Overview
                   ┌───────────────────────┐
                   │       Internet        │
                   └───────────┬───────────┘
                               │
                       Azure LoadBalancer
                               │
                               ▼
                      Azure Kubernetes Service
                               │
               ┌───────────────┴───────────────┐
               │                               │
           Ingress / Routing               Monitoring
               │                      (Prometheus + Grafana)
               │
    ┌──────────┼──────────┬──────────┬──────────┐
    │          │          │          │          │
  Client      Auth       Items    Discounts    MongoDB
(React App) (Users)     (Menu)     (Coupons)    (DB)
    │          │          │          │
    └──────────┴──────────┴──────────┴──────────┘
                   Internal Cluster Network

Microservices
Service
Port
Description
Auth
3001
Handles user authentication and JWT tokens
Items
3003
Manages restaurant menu items and orders
Discounts
3002
Manages coupons and campaigns
Client
80
React frontend for the application
MongoDB
27017
Database for all microservices


DevOps Pipeline
The project includes a complete CI/CD pipeline using GitHub Actions.
Developer Push
     │
     ▼
GitHub Repository
     │
     ▼
GitHub Actions CI/CD
     │
     ├ Build Docker images
     ├ Push images to Azure Container Registry
     └ Deploy to AKS
     │
     ▼
Azure Kubernetes Cluster

Infrastructure
Infrastructure is provisioned using Terraform.
Resources created:
Azure Resource Group
Azure Container Registry (ACR)
Azure Kubernetes Service (AKS)
Kubernetes networking and services

Monitoring
The platform includes a full monitoring stack.
Tool
Purpose
Prometheus
Collect application metrics
Grafana
Visualize metrics dashboards
Alertmanager
Send alerts based on metrics

Metrics are exposed by backend services at:
/metrics

Running Locally
Clone the repository:
git clone https://github.com/shishir165/devops.restauranty.git
cd devops.restauranty
Start MongoDB:
docker run -d \
--name my-mongo \
-p 27017:27017 \
-v mongo-data:/data/db \
mongo:latest
Run each service:
npm install
npm start
Start HAProxy:
haproxy -f haproxy.cfg
Access the application:
http://localhost

Deploying to Kubernetes
Apply Kubernetes manifests:
kubectl apply -f k8s/
Verify pods:
kubectl get pods
Verify services:
kubectl get svc

Accessing the Application
Application:
http://9.160.136.211
Monitoring (Grafana):
http://9.160.152.68

View Logs
View logs from a pod:
kubectl logs auth-d55cbfcb8-xfxmn


Security
Security features implemented:
JWT authentication between services
Kubernetes Secrets for sensitive credentials
Azure-managed infrastructure
Secure container images stored in ACR
Isolated Kubernetes networking
Full security details are available in:
SECURITY.md

Technologies Used
Category
Technology
Containerization
Docker
Orchestration
Kubernetes
Cloud
Azure AKS
Infrastructure
Terraform
CI/CD
GitHub Actions
Monitoring
Prometheus & Grafana
Database
MongoDB
Frontend
React
Backend
Node.js


Project Structure
devops.restauranty
│
├ backend/
│  ├ auth
│  ├ discounts
│  └ items
│
├ client/
│
├ k8s/
│
├ monitoring/
│
├ terraform/
│
├ docker-compose.yml
├ haproxy.cfg
│
├ README.md
└ SECURITY.md

Final Result
This project demonstrates a complete DevOps workflow, from development to production deployment, including:
Containerized microservices
Automated cloud infrastructure
Kubernetes orchestration
Continuous deployment
Production monitoring

DevOps Architecture Diagram

                          Developer
                              │
                              ▼
                       GitHub Repository
                              │
                              ▼
                    GitHub Actions CI/CD
                              │
                ┌─────────────┴─────────────┐
                │                           │
        Build Docker Images          Run Tests
                │
                ▼
        Azure Container Registry
                │
                ▼
        Azure Kubernetes Service (AKS)
                │
                ▼
        Kubernetes Cluster Components
                │
 ┌──────────────┼──────────────┬──────────────┐
 │              │              │              │
 ▼              ▼              ▼              ▼
Client        Auth          Items         Discounts
React App   Service        Service         Service
 (Nginx)    (Node.js)      (Node.js)       (Node.js)
 │              │              │              │
 └──────────────┴──────────────┴──────────────┘
                    │
                    ▼
                 MongoDB
                    │
                    ▼
             Kubernetes Services
                    │
                    ▼
           Azure LoadBalancer / Ingress
                    │
                    ▼
                 Internet
                    │
                    ▼
                 Users

This project reflects the integration of development, operations, automation, and monitoring into a single streamlined pipeline, highlighting the importance of DevOps in modern cloud-native applications.

Author
Shishir Pariyar

DevOps Bootcamp Project
Cloud & DevOps Engineering

GitHub:
https://github.com/shishir165