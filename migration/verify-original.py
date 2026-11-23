#!/usr/bin/env python3
"""Check original tracked bytes in a freshly extracted export; do not reset files."""
from pathlib import Path
import hashlib, json, sys
root = Path(__file__).resolve().parents[1]
baseline = json.loads((root/'migration/original-files.sha256.json').read_text())
errors = []
for name, expected in baseline.items():
    file = root/name
    if not file.is_file():
        errors.append(f'Missing: {name}')
    elif hashlib.sha256(file.read_bytes()).hexdigest() != expected:
        errors.append(f'Changed: {name}')
if errors:
    print('Original-byte check failed:\n' + '\n'.join(errors), file=sys.stderr)
    sys.exit(1)
print(f'Original-byte check passed: {len(baseline)} files. Nothing was changed.')
