# Logging

All microservices log to stdout.

Kubernetes automatically captures container logs, which can be viewed using:

kubectl logs <pod-name>

Example:

kubectl logs auth-xxxxx

## Azure Monitor

In production environments, logs can be centralized using Azure Monitor.

Azure Monitor can collect logs from AKS and allow querying through Log Analytics.

This enables:

* Centralized log storage
* Log search and filtering
* Alerting on errors
