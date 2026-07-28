# Builds the GameMaker local package (.yymps) from the repository sources.
# Replicates the output of the GameMaker IDE "Create Local Package" tool:
# package-side project files come from .github/package/ templates, content
# files (datafiles/, objects/, extensions/) are taken from the repo as is.
#
# NOTE: if resources are added or removed in the project (.yyp), the templates
# in .github/package/ must be updated to match.
#
# Usage: python3 build_yymps.py <version> <output.yymps>

import hashlib
import os
import sys
import zipfile

PACKAGE_DIR = '.github/package'
CONTENT_DIRS = ['datafiles', 'objects', 'extensions']
PACKAGE_ID = 'com.playgama.bridge'
DISPLAY_NAME = 'Playgama Bridge'
IDE_VERSION = '2023.4.0.0'


def read(path):
    with open(path, 'rb') as f:
        return f.read()


def main():
    if len(sys.argv) != 3:
        print('Usage: python3 build_yymps.py <version> <output.yymps>')
        sys.exit(1)

    version = sys.argv[1].lstrip('v')
    out_path = sys.argv[2]

    metadata = (
        '{\n'
        f'  "package_id": "{PACKAGE_ID}",\n'
        f'  "display_name": "{DISPLAY_NAME}",\n'
        f'  "version": "{version}",\n'
        '  "package_type": "asset",\n'
        f'  "ide_version": "{IDE_VERSION}"\n'
        '}'
    ).encode('utf-8')

    resource_order = read(os.path.join(PACKAGE_DIR, f'{DISPLAY_NAME}.resource_order')).rstrip(b'\n')
    yyp = read(os.path.join(PACKAGE_DIR, f'{DISPLAY_NAME}.yyp')).rstrip(b'\n')
    yyp = yyp.replace(b'{{VERSION}}', version.encode('utf-8'))

    files = [
        ('metadata.json', metadata),
        (f'{DISPLAY_NAME}.resource_order', resource_order),
        (f'{DISPLAY_NAME}.yyp', yyp),
    ]

    for content_dir in CONTENT_DIRS:
        for dirpath, dirnames, filenames in os.walk(content_dir):
            dirnames[:] = sorted(d for d in dirnames if not d.startswith('.'))
            for name in sorted(filenames):
                if name.startswith('.'):
                    continue
                path = os.path.join(dirpath, name)
                files.append((path.replace(os.sep, '/'), read(path)))

    entries = ''.join(
        f'\t<file md5="{hashlib.md5(data).hexdigest().upper()}">{path}</file>\n'
        for path, data in files
    )
    manifest = (
        '\ufeff<?xml version="1.0" encoding="utf-8"?>\n<files>\n' + entries + '</files>'
    ).encode('utf-8')

    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as archive:
        archive.writestr('yymanifest.xml', manifest)
        for path, data in files:
            archive.writestr(path, data)

    print(f'Packed {len(files) + 1} files into {out_path}')


if __name__ == '__main__':
    main()
