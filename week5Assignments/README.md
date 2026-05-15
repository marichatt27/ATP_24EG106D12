# Week 5 Projects

This workspace contains two frontend assignments:

- `Assignment_10` - React + Vite project
- `tailwindcss-assignment-1` - Tailwind CSS practice project

## Folder Structure

```text
week_5/
├─ Assignment_10/
│  ├─ Components/
│  ├─ public/
│  └─ src/
└─ tailwindcss-assignment-1/
   └─ src/
```

## Prerequisites

- Node.js (LTS recommended)
- npm

## 1) Run `Assignment_10` (React + Vite)

```bash
cd Assignment_10
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## 2) Run `tailwindcss-assignment-1`

```bash
cd tailwindcss-assignment-1
npm install
```

If your `package.json` has scripts, run the appropriate command, for example:

```bash
npm run dev
```

If scripts are not available, compile Tailwind manually from the project root:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Then open `src/index.html` in your browser (or use Live Server).

## Notes

- Keep `node_modules/` out of Git commits.
- Each assignment can be worked on independently.