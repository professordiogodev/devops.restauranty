# Restauranty — DevOps Notes

## URLs
- App: https://restauranty.diogohack.shop
- Grafana: https://grafana.restauranty.diogohack.shop  (user: `admin`)

## Monitoring
- Stack: kube-prometheus-stack (Prometheus + Alertmanager + node-exporter) and Grafana
- Prometheus datasource URL (inside cluster): `http://monitoring-kube-prometheus-prometheus.monitoring:9090`
- Dashboards: see `monitoring/dashboards.md` for import IDs.

**Quick metrics check (local port-forward to Prometheus):**
```bash
kubectl -n monitoring get pods -l app.kubernetes.io/name=prometheus -o name
# example output: pod/prometheus-monitoring-kube-prometheus-prometheus-0
kubectl -n monitoring port-forward pod/prometheus-monitoring-kube-prometheus-prometheus-0 9090:9090
# Open http://127.0.0.1:9090 → Status → Targets (Ctrl+C to stop)

