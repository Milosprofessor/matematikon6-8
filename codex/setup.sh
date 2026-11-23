#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
command -v python3 >/dev/null
command -v node >/dev/null
command -v npm >/dev/null
for tool in flock curl timeout sha256sum; do command -v "$tool" >/dev/null; done
npm run install:ci
