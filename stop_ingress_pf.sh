#!/usr/bin/env bash
set -euo pipefail
pkill -f "kubectl.*port-forward.*8080:80"  2>/dev/null || true
pkill -f "kubectl.*port-forward.*8443:443" 2>/dev/null || true
echo "Stopped port-forwards (8080, 8443)."
