# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html), and
the format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Every release is archived on Zenodo. The **concept DOI**
[10.5281/zenodo.21757591](https://doi.org/10.5281/zenodo.21757591) always resolves to the latest
version; each release below also has its own version DOI.

## [0.1.0] - 2026-08-02

First public release.

### Added

- A single static page (`index.html` + `app.js`) that builds a well-formed
  `llms.txt` from a site name, domain, summary and a list of key pages.
- Copy and download output. Everything runs client-side — no build step, no
  dependencies, no server, and nothing typed into it leaves the browser.
- `CITATION.cff` and `.zenodo.json`, so the repository is citable and archives
  automatically on release.

### Notes

- Version DOI: [10.5281/zenodo.21757592](https://doi.org/10.5281/zenodo.21757592)
- Mirrored to [Codeberg](https://codeberg.org/clear-cited/llms-txt-generator), tags included.

[0.1.0]: https://github.com/Clear-Cited/llms-txt-generator/releases/tag/v0.1.0
