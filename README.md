Restauranty – DevOps Microservices Platform
1. Project Overview
Restauranty is a cloud-native restaurant management platform built using a microservices architecture. The system consists of three backend services built with Node.js and Express, a React frontend, and MongoDB for data storage.
The platform demonstrates modern DevOps practices, including:
Microservices architecture


Docker containerization


Kubernetes orchestration using Azure Kubernetes Service (AKS)


Continuous Integration with GitHub Actions


Container registry with Azure Container Registry (ACR)


Monitoring with Prometheus and Grafana


Secure configuration using environment variables and secrets



2. System Architecture
                       Internet / Browser
                              │
                              ▼
                       Kubernetes Ingress
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    Auth Service        Items Service       Discounts Service
      (Node.js)            (Node.js)            (Node.js)
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ▼
                           MongoDB
Monitoring Stack:
Prometheus → collects metrics
Grafana → visualizes monitoring dashboards

3. Microservices
Auth Service
Port: 3001
Responsibilities:
User signup


Login


JWT authentication


Items Service
Port: 3003
Responsibilities:
Menu management


Dietary categories


Order items


Discounts Service
Port: 3002
Responsibilities:
Coupon management


Campaigns


Discount validation


Frontend
Port: 3000
A React-based administrative dashboard used to manage restaurant operations.

4. Technology Stack
Frontend
React 18


React Router


Tailwind CSS


Axios


Backend
Node.js


Express


Mongoose


JWT Authentication


bcryptjs


Infrastructure
Docker


Kubernetes (AKS)


Azure Container Registry


GitHub Actions


Monitoring
Prometheus


Grafana


Database
MongoDB



5. Local Development Setup
Start MongoDB
docker run -d \
--name my-mongo \
-p 27017:27017 \
-v mongo-data:/data/db \
mongo:latest

Start Microservices
Auth
cd backend/auth
npm install
npm start

Discounts
cd backend/discounts
npm install
npm start

Items
cd backend/items
npm install
npm start

Frontend
cd client
npm install
npm start

Start HAProxy
haproxy -f haproxy.cfg
Access:
http://localhost

6. CI/CD Pipeline
Deployment workflow:
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions CI Pipeline
      │
      ├── Build Docker Images
      ├── Push Images to Azure Container Registry
      │
      ▼
Azure Kubernetes Service (AKS)
      │
      ▼
Application Deployment

7. Kubernetes Deployment
Kubernetes resources include:
Deployments for microservices


Services for internal communication


MongoDB deployment


Kubernetes Secrets


Ingress Controller


Routing:
/                → Frontend
/api/auth        → Auth Service
/api/items       → Items Service
/api/discounts   → Discounts Service

8. Monitoring & Observability
Monitoring stack:
Prometheus
Collects metrics from services using the /metrics endpoint.
Example metrics:
HTTP request count


request duration


service availability


Grafana
Visualizes Prometheus metrics using dashboards.
Example dashboards show:
Request rates


Response latency


Error rates


Pod resource usage


Grafana is exposed through an Azure LoadBalancer service.

9. Logging
All services log output to stdout.
Kubernetes captures logs automatically.
Logs can be viewed with:
kubectl logs <pod-name>
Example:
kubectl logs auth-xxxxx
Centralized logging solutions like Azure Monitor or ELK stack can also be integrated.

10. Security
Security practices implemented:
Authentication
JWT tokens issued by the Auth service and validated by other services.
Secret Management
Sensitive credentials stored in:
Kubernetes Secrets


GitHub Secrets


Secrets are never committed to the repository.
Network Security
Only the Ingress controller exposes services publicly. Internal services communicate using ClusterIP networking.
Data Protection
MongoDB stores application data within the Kubernetes network.
Encryption and TLS can be enabled for production deployments.

11. DevOps Architecture Summary
Developer
  │
  ▼
GitHub Repository
  │
  ▼
GitHub Actions (CI/CD)
  │
  ▼
Azure Container Registry
  │
  ▼
AKS Kubernetes Cluster
  │
  ├── Ingress Controller
  ├── Microservices
  ├── MongoDB
  │
  ▼
Monitoring Stack
  ├── Prometheus
  └── Grafana

12. Project Demonstration
To demonstrate the system:
Check pods
kubectl get pods
Check services
kubectl get svc
Access application
http://9.160.136.211
Access monitoring
http://9.160.152.68

View logs
kubectl logs auth-d55cbfcb8-xfxmn

What This Project Demonstrates
Cloud-native architecture


Kubernetes orchestration


DevOps CI/CD pipeline


Infrastructure monitoring


Secure microservices communication



If you'd like, I can also help you make one final improvement professors love:
a clean visual architecture diagram page (like a real DevOps system diagram).


make final with adding up ingress ip and all
Great — let’s produce a final polished version you can directly paste into Word / PDF with the real values from your project (Ingress IP and Grafana IP included). This will look like a complete DevOps project report.
You can copy everything below into Word and export as PDF.

Restauranty – DevOps Microservices Platform
1. Project Overview
Restauranty is a cloud-native restaurant management platform built using a microservices architecture. The system consists of multiple backend services developed with Node.js and Express, a React frontend, and MongoDB as the database.
The platform demonstrates modern DevOps practices, including:
Microservices architecture


Docker containerization


Kubernetes orchestration using Azure Kubernetes Service (AKS)


Continuous Integration with GitHub Actions


Container registry using Azure Container Registry (ACR)


Monitoring with Prometheus and Grafana


Secure configuration using environment variables and secrets



2. System Architecture
                       Internet / Browser
                              │
                              ▼
                       Kubernetes Ingress
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    Auth Service        Items Service       Discounts Service
      (Node.js)            (Node.js)            (Node.js)
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ▼
                           MongoDB
Monitoring Stack:
Prometheus → collects metrics
Grafana → visualizes dashboards

3. Microservices
Service
Port
Endpoint
Description
Auth Service
3001
/api/auth
Handles authentication and JWT tokens
Items Service
3003
/api/items
Manages restaurant menu items
Discounts Service
3002
/api/discounts
Manages promotional discounts
Frontend
3000
/
React dashboard interface


4. Technology Stack
Frontend
React 18


React Router


Tailwind CSS


Axios


Backend
Node.js


Express


JWT authentication


bcryptjs


Mongoose


Infrastructure
Docker


Kubernetes (AKS)


Azure Container Registry


GitHub Actions


Monitoring
Prometheus


Grafana


Database
MongoDB



5. Local Development Setup
Start MongoDB
docker run -d \
--name my-mongo \
-p 27017:27017 \
-v mongo-data:/data/db \
mongo:latest

Start Backend Services
Auth
cd backend/auth
npm install
npm start
Discounts
cd backend/discounts
npm install
npm start
Items
cd backend/items
npm install
npm start
Frontend
cd client
npm install
npm start

Start HAProxy
haproxy -f haproxy.cfg
Access application locally:
http://localhost

6. CI/CD Pipeline
Continuous integration is implemented using GitHub Actions.
Workflow:
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions CI Pipeline
      │
      ├── Build Docker Images
      ├── Push Images to Azure Container Registry
      │
      ▼
Azure Kubernetes Service (AKS)
      │
      ▼
Application Deployment
Images are stored in:
restaurantyacrshishir.azurecr.io
Repositories:
auth
items
discounts
client

7. Kubernetes Deployment
The application is deployed to Azure Kubernetes Service (AKS).
Resources used:
Kubernetes Deployments


Kubernetes Services


MongoDB Deployment


Kubernetes Secrets


Ingress Controller



8. Ingress Routing
The application is exposed using Kubernetes Ingress.
Public Application URL:
http://9.160.144.95
Routes:
/                → Frontend
/api/auth        → Auth Service
/api/items       → Items Service
/api/discounts   → Discounts Service
Example endpoints:
http://9.160.144.95/items
http://9.160.144.95/discounts

9. Monitoring & Observability
The monitoring stack includes Prometheus and Grafana.
Prometheus
Prometheus collects metrics from each microservice through the /metrics endpoint.
Example metrics:
HTTP request count


request latency


service availability



Grafana
Grafana visualizes Prometheus metrics using dashboards.
Grafana is exposed through an Azure LoadBalancer service.
Grafana URL:
http://9.160.152.68
Login:
username: admin
password: (from Kubernetes secret)
Grafana dashboards display:
request rate


response time


system resource usage


Kubernetes cluster metrics



10. Logging
All services log output to stdout.
Kubernetes automatically captures logs from containers.
Logs can be accessed using:
kubectl logs <pod-name>
Example:
kubectl logs auth-d55cbfcb8-xfxmn
Centralized logging solutions such as Azure Monitor or ELK Stack can be integrated for production.

11. Security
Security measures implemented:
Authentication
JWT tokens issued by the Auth service.
Other services validate JWT tokens using middleware.

Secret Management
Sensitive values stored in:
Kubernetes Secrets


GitHub Actions Secrets


Secrets are never committed to the repository.

Network Security
Only the Ingress controller exposes services publicly.
Internal communication between services uses ClusterIP networking.

Data Protection
MongoDB stores application data within the Kubernetes network.
Encryption and TLS can be enabled for production environments.

12. DevOps Architecture Summary
Developer
  │
  ▼
GitHub Repository
  │
  ▼
GitHub Actions (CI/CD)
  │
  ▼
Azure Container Registry
  │
  ▼
Azure Kubernetes Service
  │
  ├── Ingress Controller
  ├── Microservices
  ├── MongoDB
  │
  ▼
Monitoring Stack
  ├── Prometheus
  └── Grafana

13. Project Demonstration
To demonstrate the system:
Check running pods
kubectl get pods
Check services
kubectl get svc
Access application
http://9.160.144.95
Access monitoring dashboard
http://9.160.152.68
View logs
kubectl logs <pod-name>

Project Capabilities
This project demonstrates:
Cloud-native microservices architecture


Kubernetes container orchestration


DevOps CI/CD automation


Infrastructure monitoring


Secure service communication



