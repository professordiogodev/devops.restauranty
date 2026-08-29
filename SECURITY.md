# Security

## IAM

Access to Azure resources is controlled using Azure RBAC.

GitHub Actions authenticates with Azure Container Registry to push images.

## Secret Management

Sensitive credentials are stored in:

* Kubernetes Secrets
* GitHub Actions Secrets

Secrets are never committed to the repository.

## Network Security

Traffic is restricted using Kubernetes services.

Only the Ingress controller exposes services to the public internet.

Internal services communicate using ClusterIP services.

## Authentication

The auth microservice issues JWT tokens.

The items and discounts services validate these tokens via middleware before processing requests.

## Encryption

All communication between services happens within the AKS virtual network.

TLS/HTTPS can be enabled on the Ingress using cert-manager and Let's Encrypt.

## Compliance

User data is stored in MongoDB inside the AKS cluster.

Sensitive data should be encrypted at rest and in transit.

The architecture follows best practices aligned with GDPR requirements for data protection.
