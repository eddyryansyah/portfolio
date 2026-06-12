# Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e1b834c-1bcd-4012-a36a-eb28d14f71d7/deploy-status)](https://app.netlify.com/projects/eddyryansyah/deploys)

A personal portfolio website to showcase my profile, skills, projects, and experience as an aspiring developer and QA Engineer.

## Live Demo

Visit the live website here:

```text
https://eddyryansyah.netlify.app
```

## Overview

This project is a static personal portfolio website built using HTML, CSS, and JavaScript. The website presents personal information, skills, project highlights, and contact details in a clean and responsive layout.

## Features

- Responsive website layout
- Personal profile section
- Skills and experience showcase
- Project portfolio section
- Contact information
- Netlify deployment status badge
- Production deployment through GitHub Actions and Netlify CLI

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Actions
- Netlify

## Deployment

This project is deployed to Netlify using GitHub Actions and Netlify CLI.

Every update pushed to the `main` branch triggers a GitHub Actions workflow. The workflow deploys the latest version of the website to Netlify production and records the deployment under the `production` environment in GitHub.

The Netlify status badge at the top of this README reflects the current state of the latest production deployment.

## Project Structure

```text
.
├── .github/
│   ├── FUNDING.yml
│   └── workflows/
│       └── deploy-netlify.yml
├── assets/
│   ├── apple-touch-icon.png
│   ├── checkmark.png
│   ├── eddy-about.webp
│   ├── eddy-profile.webp
│   ├── eddy-resume.pdf
│   ├── education.png
│   ├── email.png
│   ├── favicon-32x32.png
│   ├── favicon.png
│   ├── github.png
│   ├── linkedin.png
│   ├── project-1.webp
│   ├── project-2.webp
│   └── project-3.webp
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── mediaqueries.css
├── script.js
└── style.css
```

## Author

Created and maintained by Eddy Ryansyah.

## License

This project is licensed under the MIT License.
