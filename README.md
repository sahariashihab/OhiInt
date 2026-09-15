# Project Setup

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or newer recommended)
- **npm** (comes with Node.js)
- **Vercel** (optional, for CLI deployments)

Install the Vercel CLI globally if you want to deploy from the terminal:

```bash
npm install -g vercel
```

Verify the installation:

```bash
node -v
npm -v
vercel --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/sahariashihab/OhiInt.git
cd OhiInt
```

Install project dependencies:

```bash
npm install
```

---

## Running the Development Server

Open two terminal windows.

### Terminal 1: Start the Vite development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Terminal 2: Start the Vercel development server

```bash
vercel dev
```

Vercel will make the application available at the local URL shown in the terminal, usually:

```
http://localhost:3000
```

The project is deployed with Vercel. Vercel automatically runs `npm run build` and serves the generated `dist/` directory.

### Deploy with Vercel

You can import the repository from the [Vercel dashboard](https://vercel.com/new), or deploy with the CLI:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

---

## Available Scripts

### Start Vite Development Server

```bash
npm run dev
```

### Build the Project

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

---

## Development Workflow

After the initial setup:

1. In the first terminal, start the Vite development server:

   ```bash
   npm run dev
   ```

2. In the second terminal, start the Vercel development server:

   ```bash
   vercel dev
   ```

3. Make your changes.

4. Verify the production build when needed:

   ```bash
   npm run build
   ```

---

## Notes

- Run `npm install` once after cloning.
- Vercel builds the project automatically during deployment.
- If dependencies change, run:

  ```bash
  npm install
  ```
