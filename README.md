# ApplyTrack

A full-stack job application tracker built with the MERN stack. Track applications from "Applied" through "Offer" or "Rejected" with search, filtering, and live statistics.

## Features

- Add, edit, and delete job applications
- Search by company name or job title
- Filter by status (Applied, Interview, Offer, Rejected)
- Live dashboard statistics computed from your data
- Responsive layout (mobile + desktop)
- Persistent storage in MongoDB Atlas
- Loading, empty, and error states

## Tech Stack

**Frontend**

- React (with Vite)
- Tailwind CSS v4
- Deployed on Vercel

**Backend**

- Node.js + Express
- Mongoose (MongoDB ODM)
- Deployed on Render

**Database**

- MongoDB Atlas (free tier)

## Architecture

    Browser (React) → fetch JSON → Express API → Mongoose → MongoDB Atlas
       Vercel                         Render                    Cloud

The frontend and backend are deployed separately. The frontend calls the backend's REST API over HTTPS. The backend is the only thing that talks to MongoDB. The browser never sees database credentials.

## API Endpoints

| Method   | Path                    | Description              |
| -------- | ----------------------- | ------------------------ |
| `GET`    | `/health`               | Health check             |
| `GET`    | `/api/applications`     | List all applications    |
| `POST`   | `/api/applications`     | Create a new application |
| `PATCH`  | `/api/applications/:id` | Update an application    |
| `DELETE` | `/api/applications/:id` | Delete an application    |

## Local Setup

### Prerequisites

- Node.js 18+
- A MongoDB Atlas account (free tier works)

### 1. Clone the repo

    git clone https://github.com/semura135/applytrack.git
    cd applytrack

### 2. Backend setup

    cd server
    npm install

Create `server/.env`:

    PORT=5000
    MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/applytrack

Run:

    npm run dev

The API runs on `http://localhost:5000`. Test: `curl http://localhost:5000/health`.

### 3. Frontend setup

Open a second terminal from the project root:

    cd client
    npm install

Create `client/.env`:

    VITE_API_URL=http://localhost:5000

Run:

    npm run dev

The app runs on `http://localhost:5173`.

## Deployment

- **Frontend:** Vercel, root directory `client/`, environment variable `VITE_API_URL`
- **Backend:** Render, root directory `server/`, environment variables `MONGODB_URI` and `CLIENT_ORIGIN`

## Known Limitations

- **No authentication.** Any visitor can read, create, edit, and delete applications.
- **Atlas network access.** If configured with `0.0.0.0/0`, connections are allowed from any IP, subject to database authentication. Restrict network access where practical.
- **Single-user design.** No per-user data isolation.
- **No automated tests.** CRUD was verified manually during development.

## What I Learned Building This

- React state lifting, props, and callback props
- Controlled forms with `useState`
- Derived state: statistics and filtered lists computed from source data
- The `key` prop for resetting component state
- Express routing, middleware order, and error handling
- Mongoose schema validation and `runValidators` on updates
- CORS and configuring access for a deployed frontend
- Environment variables across local development, Vercel, and Render
- The difference between running locally and deploying an application

## License

MIT
