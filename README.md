
# Gunny Rush

## Join the Adventure

**Gunny Rush** invites you to become part of an epic journey where fun and rewards go hand in hand. Take on challenges, enhance your skills, and prove your worth in a world where innovation and entertainment collide on the blockchain. The world of Gunny Rush awaits!

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

Gunny Studios is pioneering the future of blockchain gaming. Our mission is to integrate blockchain technology seamlessly into gameplay, providing a secure and transparent platform for item collection and user exchanges. Gunny Rush embodies our vision to elevate gaming experiences beyond financial speculation, focusing instead on pure enjoyment and innovation.

## Features

- Secure and transparent blockchain-powered gameplay.
- Collect, trade, and own unique items in a decentralized manner.
- Innovative and immersive gaming experience with cutting-edge technology.
- Community-driven enhancements and player-focused updates.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kayeddy/gunny-games-web.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gunny-games-web
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to:

   ```
   http://localhost:3000
   ```

   By default, the application runs on port 3000. If that port is in use, you will be prompted to change it.

## Project Structure

```
├── public/            # Static assets (images, icons, etc.)
├── src/               # Source files
│   ├── app/           # Application-level configuration and assets
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/    # Reusable UI components
│   │   ├── 3dModels/  # Components for 3D interactions
│   │   ├── custom/    # Custom-designed components
│   │   ├── landing/   # Landing page components
│   │   ├── modals/    # Modal components
│   │   └── shared/    # Shared components across the app
│   ├── lib/           # Utility libraries
│   │   ├── hooks/     # Custom React hooks
│   │   ├── scripts/   # Utility scripts
│   │   ├── styles/    # Shared styles
│   │   ├── css/       # CSS styles
│   │   ├── scss/      # SCSS styles
│   │   ├── types/     # TypeScript type definitions
│   │   ├── motion.ts  # Framer motion configurations
│   │   └── utils.ts   # Utility functions
│   ├── sections/      # Organized sections for pages
│   │   ├── landing/   # Landing-specific sections
│   │   └── shared/    # Shared sections across pages
│   ├── wrappers/      # Higher-order components and wrappers
│   │   └── ClientLoaderWrapper.tsx
├── .gitignore         # Git ignore file
├── components.json    # Component mappings and metadata
├── next-env.d.ts      # TypeScript environment definitions for Next.js
├── next.config.mjs    # Next.js configuration file
├── package.json       # npm configuration and dependencies
├── package-lock.json  # Exact versions of npm dependencies
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Technologies Used

Gunny Rush leverages a variety of cutting-edge technologies to deliver an exceptional gaming experience:

### Core Frameworks and Libraries

- **[Next.js](https://nextjs.org/):** React-based framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/):** Frontend library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** Type-safe development environment.

### Blockchain Integration

- **[Ethers.js](https://docs.ethers.io/):** Ethereum interaction library for managing wallets and contracts.

### UI and Styling

- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI development.
- **[Framer Motion](https://www.framer.com/motion/):** Animation library for React.
- **CSS/SCSS:** Stylesheets for additional customization.

### State Management and Utilities

- **[Zustand](https://zustand-demo.pmnd.rs/):** Lightweight state management library.
- **[Clsx](https://github.com/lukeed/clsx):** Utility for conditionally applying class names.

## License

This project is proprietary software. Unauthorized copying, modification, or distribution of the software is strictly prohibited. All rights reserved.

---

For inquiries or issues, feel free to contact us through our official channels.
