# ATLAS - AI-Powered Real Estate Acquisition Platform

## Overview

ATLAS is an intelligent real estate acquisition platform powered by machine learning and AI. Using advanced scoring algorithms and multi-agent automation, ATLAS transforms how real estate professionals identify, evaluate, and close on high-intent buyer and seller opportunities.

**Developed by:** Caelum Private Equity S.L.U.  
**NIF:** B22718514  
**Location:** Madrid, Spain

---

## Key Features

- **Property Intent Scoring (PIS):** Proprietary AI engine calculating intent scores (0-100) based on 45+ behavioral and financial signals
- **Bank-Linked Verification:** PSD2-compliant bank linking for financial readiness validation
- **Multi-Agent Automation:** Scout (discovery) → Director (routing) → Consultor (optimization)
- **Cross-Platform Access:** Native iOS/Android apps, web dashboard, and API integration
- **Enterprise Security:** GDPR, PSD2, and EU AI Act compliant
- **Real-Time Analytics:** Conversion rates, lead quality, market trend insights

---

## Technology Stack

- **Backend:** Python + FastAPI + LangChain (AI Agents)
- **API:** Node.js + Express.js + TypeScript
- **Mobile:** React Native (iOS/Android)
- **Web:** Next.js
- **Databases:** PostgreSQL + Redis + Elasticsearch
- **Infrastructure:** AWS (ECS Fargate, RDS, Lambda, S3)
- **AI/ML:** OpenAI

---

## Landing Page Deployment (this repo)

This repository hosts the static marketing landing page (`caelum-website-preview.html`, `index.html`) — separate from the main ATLAS platform infrastructure on AWS described above. It deploys to **Google Cloud Run** via **Cloud Build**, independent of the AWS stack.

**GCP project:** `brilliant-dryad-506612-j0` ("My First Project")
**Region:** `europe-southwest1` (Madrid)

### How it works

1. `Dockerfile` builds an `nginx:alpine` image serving the static HTML on port 8080 (required by Cloud Run).
2. `cloudbuild.yaml` defines a 3-step pipeline: build the Docker image → push it to Artifact Registry → deploy to Cloud Run.
3. A Cloud Build trigger (`caelum-deploy`) watches the `main` branch of this GitHub repo and runs the pipeline automatically on every push.

### One-time GCP setup (already completed)

1. Enabled APIs: Cloud Build, Cloud Run Admin, Artifact Registry.
2. Created the Artifact Registry Docker repository `caelum` in `europe-southwest1`.
3. Granted the Cloud Build service account (`<PROJECT_NUMBER>-compute@developer.gserviceaccount.com`) these IAM roles:
   - `Cloud Run Admin` (deploy the service)
   - `Artifact Registry Writer` (push images)
   - `Logs Writer` (write build logs — required because the trigger uses a non-default service account)
   - `Service Account User` **on itself** (required for `gcloud run deploy` to run as that service account)
4. Created the `caelum-deploy` trigger: GitHub source `stimacf-a11y/atlas-landing`, event "push to branch" `^main$`, config file `/cloudbuild.yaml`.

### Manually triggering a deploy / checking status

- Trigger a build by hand: [Cloud Build → Triggers](https://console.cloud.google.com/cloud-build/triggers?project=brilliant-dryad-506612-j0) → "Ejecutar" on `caelum-deploy`.
- View build logs: [Cloud Build → Historial](https://console.cloud.google.com/cloud-build/builds;region=global?project=brilliant-dryad-506612-j0).
- Get the live URL: [Cloud Run](https://console.cloud.google.com/run?project=brilliant-dryad-506612-j0) → `caelum` service → URL shown at the top.
