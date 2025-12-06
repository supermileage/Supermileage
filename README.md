# UBC Supermileage

This repository contains the source code for the UBC Supermileage Team website, built with Next.js and Tailwind CSS.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Figtree](https://fonts.google.com/specimen/Figtree)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/supermileage/Supermileage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Supermileage
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── public/              # Static assets (images, etc.)
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   ├── components/      # Reusable React components
│   ├── css/             # Custom CSS files
│   └── types/           # TypeScript type definitions
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 📜 Scripts

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs the linter to check for code issues.

## 🤝 Contributing

1. Create a new branch for your feature or fix.
2. Make your changes.
3. Submit a pull request.