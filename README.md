# llms.txt Generator

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21757591.svg)](https://doi.org/10.5281/zenodo.21757591)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Generate a clean **llms.txt** for your website — entirely in your browser.

A free, open-source tool from **[Clear Cited](https://clearcited.com)** — AI search visibility (AEO/GEO) for B2B SaaS and developer tools.

## What it does

`llms.txt` is an emerging convention that gives AI crawlers a curated map of your most important pages. This tool builds a well-formed `llms.txt` from a few inputs (site name, domain, summary, and your key pages) and lets you copy or download it. Everything runs client-side — no data leaves your browser, no backend, no tracking.

## Usage

It's a single static page — no build step, no dependencies, no server.

- **Online:** use the hosted version at <https://clearcited.com/llms-txt-generator/>.
- **Locally:** clone this repo and open `index.html` in a browser (or serve the folder with any static server, e.g. `python -m http.server`).

All logic is in `app.js` and runs entirely client-side. Nothing you type is sent anywhere.

## What the output looks like

```markdown
# Acme Deploy

> Zero-config deployment for backend teams shipping containers.

## Docs

- [Quickstart](https://acmedeploy.com/docs/quickstart): Deploy your first service in five minutes.
- [CLI reference](https://acmedeploy.com/docs/cli): Every command, flag and exit code.

## Product

- [Pricing](https://acmedeploy.com/pricing): Plans, limits and what counts as a build minute.
```

Save it as `llms.txt` at the root of your site, so it resolves at
`https://yourdomain.com/llms.txt`.

## Why Clear Cited built this

When buyers ask ChatGPT, Perplexity, Claude, Gemini, or Google AI for the best tool in a category, you're either named — or a competitor is. Clean structured data and crawler-friendly signals are part of being citable. We build these free tools because the basics should be free.

→ **[Get a free AI-visibility teardown](https://clearcited.com/free-teardown/)** — send your domain and a couple of competitors, get a short video + one-pager showing where AI sends buyers in your category.

→ See the **[AI Visibility Index](https://clearcited.com/ai-visibility-index/)** — our public leaderboards of which products AI engines recommend.

## Cite this

Every release is archived on Zenodo with a DOI, and the repo carries a
`CITATION.cff` so GitHub’s **Cite this repository** box works.

| | DOI |
|---|---|
| **Cite the software** (always resolves to the latest version) | [10.5281/zenodo.21757591](https://doi.org/10.5281/zenodo.21757591) |
| **Cite this exact release** (v0.1.0) | [10.5281/zenodo.21757592](https://doi.org/10.5281/zenodo.21757592) |

## Mirror

Mirrored to Codeberg at <https://codeberg.org/clear-cited/llms-txt-generator>,
tags included, so the project does not depend on any single host.

## License

MIT © Clear Cited. See [LICENSE](LICENSE).
