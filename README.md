# Frontend AI Resume

A React frontend for an AI-powered resume and interview preparation app. Users can register, log in, upload a resume or describe their profile, paste a target job description, and generate a personalized interview strategy with technical questions, behavioral questions, skill gaps, a preparation roadmap, and a resume PDF download.

## Features

- User authentication with register, login, logout, and current-user lookup
- Protected routes for authenticated pages
- AI interview report generation from job description, resume file, and/or self-description
- Recent interview report history
- Interview report detail view with:
  - Technical interview questions
  - Behavioral interview questions
  - Preparation roadmap
  - Match score
  - Skill gap tags
- Resume PDF generation/download from a generated interview report
- Vite, React, React Router, Axios, Sass, and Tailwind CSS setup

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Axios
- Sass
- Tailwind CSS 4
- ESLint

## Project Structure

```text
src/
  App.jsx
  app.routes.jsx
  main.jsx
  style.scss
  feature/
    auth/
      auth.context.jsx
      components/
      hooks/
      pages/
      services/
    interview/
      interview.context.jsx
      hooks/
      pages/
      services/
      style/
  style/
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at the local URL printed by Vite, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routes

| Route | Description |
| --- | --- |
| `/login` | Login page |
| `/register` | Register page |
| `/` | Protected home page for generating interview reports |
| `/interview/:interviewId` | Protected interview report detail page |

## API Backend

The frontend currently calls this hosted backend:

```text
https://ai-resume-xvlh.onrender.com
```

Authentication endpoints are under:

```text
https://ai-resume-xvlh.onrender.com/api/auth
```

Interview endpoints are under:

```text
https://ai-resume-xvlh.onrender.com/api/interview
```

Axios requests use `withCredentials: true`, so the backend must allow credentialed CORS requests from the frontend origin.

## Main API Services

### Auth

- `register(username, email, password)`
- `login(email, password)`
- `logout()`
- `getMe()`

### Interview

- `generateInterviewReport({ jobDescription, selfDescription, resumeFile })`
- `getInterviewReportById(interviewId)`
- `getAllInterviewReports()`
- `generateResumePdf({ interviewReportId })`

## Notes

- Resume uploads accept PDF and DOCX files in the UI.
- The app expects generated reports to include fields such as `matchScore`, `technicalQuestions`, `behavioralQuestions`, `preparationPlan`, and `skillGaps`.
- If you want to use a different backend URL, update the Axios `baseURL` values in:
  - `src/feature/auth/services/auth.api.js`
  - `src/feature/interview/services/interview.api.js`
