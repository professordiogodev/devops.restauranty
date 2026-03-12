Restauranty – Microservices DevOps Platform
Project Overview
Restauranty is a microservices-based restaurant management platform deployed on Azure Kubernetes Service (AKS). The platform demonstrates modern DevOps practices including Infrastructure as Code, CI/CD automation, monitoring, and secure HTTPS routing.
Live Demo
Application: https://restauranty.shishir-pariyar.com
Monitoring (Grafana): https://grafana.shishir-pariyar.com
Architecture
![Architecture](screenshots/architecture.png)
Project Structure
![Project Structure](screenshots/project_structure.png)
Technology Stack
Infrastructure
- Terraform- Azure Kubernetes Service (AKS)- Azure Container Registry (ACR)- Azure Load Balancer
Containers
- Docker- Docker Buildx
Orchestration
- Kubernetes- Deployments- Services- Ingress- Secrets
Networking
- Namecheap DNS- NGINX Ingress Controller- Let's Encrypt TLS (cert-manager)
CI/CD
- GitHub Actions- Docker build pipeline- Automatic deployment to AKS
Monitoring
- Prometheus- Grafana- Kubernetes metrics- Application metrics
Local Development Setup
Start MongoDB
docker run -d \--name my-mongo \-p 27017:27017 \-v mongo-data:/data/db \mongo:latest
Start Backend Services
Auth Service
cd backend/authnpm installnpm start
Discounts Service
cd backend/discountsnpm installnpm start
Items Service
cd backend/itemsnpm installnpm start
Frontend
cd clientnpm installnpm start
Docker
Each microservice is containerized using Docker.Example:docker build -t restauranty-auth ./backend/authImages are pushed to:restaurantyacrshishir.azurecr.io
Kubernetes Deployment
Deploy services:kubectl apply -f k8s/Check pods:kubectl get podsCheck services:kubectl get svcCheck ingress:kubectl get ingress
HTTPS and TLS
TLS certificates are automatically issued using cert-manager and Let's Encrypt.The NGINX Ingress controller securely routes traffic to:- restauranty.shishir-pariyar.com- grafana.shishir-pariyar.com
CI/CD Pipeline
The project uses GitHub Actions for continuous integration and deployment.Pipeline stages include:1. Install dependencies2. Build Docker images3. Push images to Azure Container Registry4. Deploy to AKSWorkflow file: .github/workflows/ci-cd.yaml
Secret Management
Sensitive configuration values are stored using Kubernetes Secrets instead of being committed to source code. Examples include:- MongoDB connection strings- JWT authentication secrets- API credentials- Environment configuration values
Monitoring and Observability
The platform uses Prometheus to collect metrics and Grafana to visualize system and application performance across Kubernetes nodes, pods, and microservices.
Security
- Kubernetes Secrets for environment variables- HTTPS encryption with TLS certificates- JWT authentication via Auth microservice- Single secure entry point using NGINX Ingress
Infrastructure as Code
Infrastructure is provisioned using Terraform. The following resources are created:- Azure Resource Group- Azure Kubernetes Service- Azure Container Registry
Author
Shishir PariyarDevOps Engineer | Cloud & Kubernetes Enthusiast
License
This project is for educational and portfolio purposes.