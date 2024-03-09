# Job Portal Application

This is a Next.js web application for a job portal, designed to facilitate job posting, job search, and application management for both employers and job seekers.

## Features

### Authentication

- User authentication with login, logout, and signup functionalities.
- Access control for employer and employee-specific features.

### Employer Features

- **Dashboard**: Provides an overview of statistics and recent activities.
- **Request Management**: Allows employers to view and manage job requests from applicants.
- **Job Posting**: Enables employers to post new job listings.

### Employee Features

- **Dashboard**: Displays personalized information and lists applied jobs.
- **Job Search and Viewing**: Allows users to search for jobs and view job details.
- **Application Management**: Enables users to view their applied jobs and manage applications.

### Backend API

- RESTful API endpoints for various functionalities.
- Routes for handling jobs, requests, resumes, and user-related actions.

### Reusable UI Components

- Includes a collection of reusable UI components for forms, job listings, job details, user profiles, etc.
- Enhances modularity and maintainability of the codebase.

## Folder Structure

./app
├── api
├── components
├── employer
├── helper
├── lib
├── login
├── profile
├── register
└── user

./components
├── AddJob.tsx
├── ApplyFilter.tsx
├── ApplyJob.tsx
├── DeleteJob.tsx
├── EditJob.tsx
├── JobListing.tsx
├── Jobrequests.tsx
├── Jobs.tsx
├── Me.tsx
├── MyAppliedLists.tsx
├── Navigation.tsx
└── ViewJob.tsx

./dbConfig
└── dbConfig.ts

./lib
└── utils.ts

./models
├── jobModel.js
├── requestModel.js
├── resumeModel.js
└── userModel.js



## Database Configuration

- Configuration files for database connections.
- Utilizes MongoDB for data storage.

## Installation

To run the application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Contributors

- [Your Name](https://github.com/your-username)

## License

This project is licensed under the [MIT License](LICENSE).
