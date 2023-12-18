# website-Link = ""

## StreakForge: Habits Based Streak Maker App

## Description

This is a Next.js web application for tracking and managing daily streaks for building good habits or breaking one. It utilizes the Appwrite backend for user authentication and data storage.

## Installation

1. Clone the repository
2. Install dependencies using `pnpm install`

## Usage

1. Create a `.env.local` file in the root directory and add the variables according to `env.example` file
2. Run the development server using `pnpm run dev`
3. Access the application at [http://localhost:3000]

## Project Structure

- **config.json**: Configuration file for the project, specifying compiler options.
- **.gitignore**: File specifying which files and directories to ignore in version control.
- **package.json**: File containing project metadata and dependencies.
- **.eslintrc.json**: Configuration file for ESLint, a popular JavaScript linter.
- **tailwind.config.js**: Configuration file for Tailwind CSS, a utility-first CSS framework.
- **next.config.js**: Configuration file for Next.js, a React framework.
- **postcss.config.js**: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.

- **src/app**: Directory containing application-specific code.
  - **globals.css**: Global CSS file for the application.
  - **layout.js**: Layout component for the application.
  - **page.js**: Main page component for the application.
  -**account/**: contains pages for user authentication.
  -example. **account/recoverypath/page.js**: Page component for password recovery path.

- **src/components**: Directory containing React components.
  - **CreateStreakForm.js**: Component for creating a streak form.
  - **StreakDashboard.js**: Component for the streak dashboard.
  - **Login.js**: Component for user login.
  - **SignUp.js**: Component for user sign-up.
  - **LogOut.js**: Component for Log-out.

- **src/appwrite**: Directory containing code related to Appwrite, an open-source backend server.
  - **authentication.js**: File containing authentication-related functions.
  - **database.js**: File containing database-related functions.

