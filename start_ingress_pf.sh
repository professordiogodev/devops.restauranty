#!/usr/bin/env bash
set -euo pipefail

ns=ingress-nginx

# stop any previous forwards (won't error if none)
pkill -f "kubectl.*port-forward.*8080:80" 2>/dev/null || true
pkill -f "kubectl.*port-forward.*8443:443" 2>/dev/null || true

# start fresh forwards in background and bind to all addresses so windows can reach them
nohup kubectl -n "$ns" port-forward svc/ingress-nginx-controller 8080:80  --address=0.0.0.0 >/tmp/ingress-80.log  2>&1 &
nohup kubectl -n "$ns" port-forward svc/ingress-nginx-controller 8443:443 --address=0.0.0.0 >/tmp/ingress-443.log 2>&1 &

sleep 1
echo "Listening:"
ss -ltnp | egrep ':8080|:8443' || true

cat <<EOF

Hints:
 - HTTP test:  curl -I  -H 'Host: restauranty.local'  http://127.0.0.1:8080/      # expect 308 -> https
 - HTTPS test: curl -kI -H 'Host: restauranty.local'  https://127.0.0.1:8443/     # expect 200
EOF
