---
title: A homelab on one Raspberry Pi
summary: About twenty self-hosted services on a single Raspberry Pi, behind single sign-on, with metrics, logs, uptime checks, alerts and a written restart runbook.
order: 2
featured: true
---

My homelab runs on one Raspberry Pi. It started as a place to try monitoring tools and grew into the server for the apps my household uses every day: a budget tracker, a recipe manager, file sync, a comic library and a dashboard that ties them together.

## How it's put together

- **Every service runs in Docker** and almost none publish a port on the host. They're reached through **Traefik**, a reverse proxy that handles routing and HTTPS.
- **Authelia** puts single sign-on in front of anything that doesn't have its own login.
- **Tailscale** keeps the whole thing on a private network, with one deliberate public entry point.
- **Prometheus, Loki and Grafana** collect metrics and logs. **Uptime Kuma** checks that each service answers, and a small alert relay I wrote sends the alerts somewhere I'll see them.
- **A homepage dashboard** lists every service and its status, built from labels on the containers so it stays current without hand edits.

## What I learned

Running everything on one small machine forces discipline. In August 2026 the Pi's USB storage controller crashed, and Docker kept running against a stale copy of its data for four days before I noticed. Writing up what went wrong produced a hardening plan, a backup strategy and a restart runbook, and a written standard that every service needs a health check and a resource limit.
