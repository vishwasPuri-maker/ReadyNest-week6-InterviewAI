# InterviewAI — AI-Powered Interview Preparation & Strategy Engine

InterviewAI is a personalized preparation platform that matches target Job Descriptions against candidate profiles to generate complete, high-fidelity interview strategy reports. 

Instead of general study paths, InterviewAI parses real-time job criteria and custom resumes to map exact technical questions, behavioral prep objectives, structural skill gaps, and a tailored day-by-day study roadmap.

---

## Why This Project is Important

Standard interview preparation is broken:
- **Generic Preparation:** Candidates spend hours studying unrelated topics (e.g., standard algorithm catalogs) that are never tested in their target interviews.
- **Undiscovered Skill Gaps:** Candidates go into interviews unaware of core mismatch indicators between their resumes and the role criteria.
- **Lack of Structured Schedule:** Candidates lack a structured day-by-day roadmap targeting the precise tech stacks, tools, and behavioral methodologies relevant to their specific target companies.

**InterviewAI solves this** by leveraging advanced GenAI pipelines to produce target-specific prep resources in under 30 seconds.

---

## What Makes This Different from Standard Full-Stack Apps

Unlike typical CRUD-based full-stack applications that only read and write static database records, InterviewAI operates as an intelligent AI orchestrator:
- **Strict Schema Enforcement:** Leverages type-safe Zod schema binding integrated directly into the Google Gemini API configuration using `responseSchema`. This guarantees structured JSON outputs on every single call, completely preventing standard AI hallucinations or UI formatting glitches.
- **Dynamic Content Pipeline:** Instead of serving static templates, the application dynamically constructs unique interview question banks, specific interviewer evaluation goals, and customized roadmap timelines on the fly.
- **Binary Processing Stream:** Handles raw binary streams (PDF uploads) on the backend using `pdf-parse`, extracts plain text vectors, and feeds them into the GenAI context wrapper without needing external doc converters.

---

## Project Architecture

```
                                  [ USER INTERFACE ]
                                          │
                                          ▼
                         React / Vite (Frontend) : Port 5174
                     ┌────────────────────────────────────────┐
                     │  - Feature Modules (Auth, Dashboard)   │
                     │  - State Context (Auth, Interview)     │
                     │  - Scss Design Tokens (Light Theme)   │
                     └───────────────────┬────────────────────┘
                                         │
                         Secure HttpOnly Cookies (JWT)
                                         │
                                         ▼
                        Node.js / Express (Backend) : Port 8000
                     ┌────────────────────────────────────────┐
                     │  - Express MVC Controllers             │
                     │  - JWT Middleware (Auth Guard)         │
                     │  - PDF Binary Parser (pdf-parse)       │
                     └───────────────────┬────────────────────┘
                                         │
                       Mongoose / MongoDB (Database)
                                         │
                                         ▼
                     Google Gemini AI Service (gemini-3.6-flash)
                     ┌────────────────────────────────────────┐
                     │  - Strict Type-Safe Zod Schema         │
                     │  - Structured JSON Output Processing   │
                     └────────────────────────────────────────┘
```

---

## Directory Structure Guide

### Root Directory
- [.gitignore](file:///.gitignore): Configured patterns to prevent staging build artifacts, node modules, operating system caches, and local configurations.
- [README.md](file:///README.md): Complete summary of project objectives, setup guide, architecture, and workspace breakdown.
- [design.md](file:///design.md): System style guide containing tokens for colors, typography, spacing scale, component classes, radii, elevation, and design principles.

---

### Backend Directory (`/backend`)
- [server.js](file:///backend/server.js): Entry point of the Express server. Connects to MongoDB, configures dotenv, and starts the listener on port `8000`.
- [package.json](file:///backend/package.json): Lists Node.js dependencies, scripts, and package descriptors.
- [src/](file:///backend/src/): Core backend application source code.
  - [app.js](file:///backend/src/app.js): Configures Express server properties, middleware (CORS, Cookie Parser, JSON parsers), and mounts API endpoints.
  - [config/database.js](file:///backend/src/config/database.js): Connects the application to the MongoDB Atlas database instance.
  - [controllers/](file:///backend/src/controllers/): Handles inbound client requests and formats HTTP response data.
    - [auth.controller.js](file:///backend/src/controllers/auth.controller.js): Processes secure user sign-ups, log-ins, and token clearance.
    - [interview.controller.js](file:///backend/src/controllers/interview.controller.js): Manages resume text extraction (PDF binary buffers) and invokes the GenAI generation controller.
  - [middlewares/](file:///backend/src/middlewares/): Custom request interceptors.
    - [auth.middleware.js](file:///backend/src/middlewares/auth.middleware.js): Validates JWT signatures inside HttpOnly cookies to protect endpoints.
    - [file.middleware.js](file:///backend/src/middlewares/file.middleware.js): Configures Multer storage configurations for processing file uploads.
  - [models/](file:///backend/src/models/): Defines database blueprints.
    - [user.model.js](file:///backend/src/models/user.model.js): Blueprints user accounts (secure hashed passwords).
    - [interviewReport.model.js](file:///backend/src/models/interviewReport.model.js): Structures generated interview plans, score ratios, roadmaps, and target positions.
    - [blacklist.model.js](file:///backend/src/models/blacklist.model.js): Tracks invalidated auth tokens for secure logouts.
  - [routes/](file:///backend/src/routes/): Binds URL routes to corresponding controllers.
    - [auth.routes.js](file:///backend/src/routes/auth.routes.js): Public authentication paths.
    - [interview.routes.js](file:///backend/src/routes/interview.routes.js): Protected endpoints for creating and viewing interview reports.
  - [services/](file:///backend/src/services/): Contains logic wrappers.
    - [ai.service.js](file:///backend/src/services/ai.service.js): Interacts with the Gemini API. Binds a typed Zod schema to enforce structured JSON outputs directly from the LLM.

---

### Frontend Directory (`/frontend`)
- [vite.config.js](file:///frontend/vite.config.js): Handles build pipeline configuration. Configured to run on port `5174`.
- [index.html](file:///frontend/index.html): HTML entry wrapper. Imports the DM Sans typography system and global JS components.
- [src/](file:///frontend/src/): Source folder containing all React code.
  - [main.jsx](file:///frontend/src/main.jsx): React bootstrap file. Loads global SCSS styling variables.
  - [App.jsx](file:///frontend/src/App.jsx): Binds global Auth and Interview Context state providers to the router stack.
  - [app.rotes.jsx](file:///frontend/src/app.rotes.jsx): Core application routing tree. Sets up public routes (`/landing`, `/login`, `/register`) and protected dashboard routes (`/`, `/interview/:interviewId`).
  - [style.scss](file:///frontend/src/style.scss): Implements custom design token variables (obsidian, ember, paper, slate, Cloud) and global CSS reset settings.
  - [style/button.scss](file:///frontend/src/style/button.scss): Button components (Ghost pill buttons, primary dark obsidian buttons, neutral buttons).
  - [features/](file:///frontend/src/features/): Domain-separated modular features.
    - [authentication/](file:///frontend/src/features/authentication/): User account validation modules.
      - [auth.context.jsx](file:///frontend/src/features/authentication/auth.context.jsx): Holds logged-in user profile states.
      - [hooks/useAuth.js](file:///frontend/src/features/authentication/hooks/useAuth.js): Wrapper managing login, logout, and token check triggers.
      - [components/Protected.jsx](file:///frontend/src/features/authentication/components/Protected.jsx): Route guard checking if a session token is active before loading the dashboard.
      - [pages/](file:///frontend/src/features/authentication/pages/): Includes `Login.jsx` and `Register.jsx` using split-panel card templates.
      - [pages/auth.form.scss](file:///frontend/src/features/authentication/pages/auth.form.scss): Form layout inputs and design configurations.
    - [landing/](file:///frontend/src/features/landing/): Marketing presentation module.
      - [pages/LandingPage.jsx](file:///frontend/src/features/landing/pages/LandingPage.jsx): Home template showcasing features, timelines, and product stats.
      - [style/landing.scss](file:///frontend/src/features/landing/style/landing.scss): Landing layout templates and micro-animations.
    - [interview/](file:///frontend/src/features/interview/): Dashboard and interview report features.
      - [interview.context.jsx](file:///frontend/src/features/interview/interview.context.jsx): Holds history records and generated plans.
      - [hooks/useInterview.js](file:///frontend/src/features/interview/hooks/useInterview.js): Manages data communication handlers for interview services.
      - [pages/Home.jsx](file:///frontend/src/features/interview/pages/Home.jsx): Setup dashboard. Contains fields to input Job Descriptions, upload resumes, and view past preparation strategy records.
      - [pages/interview.jsx](file:///frontend/src/features/interview/pages/interview.jsx): Renders the 3-column preparation strategy (Technical prep, Behavioral prep, roadmap schedules, match scores, and gap metrics).
      - [style/](file:///frontend/src/features/interview/style/): Layout styling modules (`home.scss` and `interview.scss`).
      - [services/interview.api.js](file:///frontend/src/features/interview/services/interview.api.js): Interacts with backend API routes using Axios instance calls.

---

## Secure Authentication Mechanics

InterviewAI implements a secure session system:
1. **Credential Safety:** User passwords are never saved in plain text. We hash credentials using `BcryptJS` with adaptive salting.
2. **Server-Side Tokens:** On login/signup, the backend generates a signed JSON Web Token (JWT).
3. **HttpOnly Protection:** The JWT is transmitted to the client and stored inside an `HttpOnly` cookie. This makes the session token invisible to client-side scripts, completely mitigating Cross-Site Scripting (XSS) tokens theft.
4. **Session Guarding:** The React application intercepts all private routes on load. If no user data is retrieved from the `/me` query, the client is redirected back to the login terminal.

---

## Local Development Setup

### 1. Prerequisite Installations
Make sure you have Node.js and MongoDB installed locally.

### 2. Configure Environment Variables
Create a `.env` file in the `/backend` directory:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_phrase
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

### 3. Run Backend Server
```bash
cd backend
npm install
node server.js
```
The server will start listening on port `8000`.

### 4. Run Frontend Dev Client
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.
