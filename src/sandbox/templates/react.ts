export const Index = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	<title>React App</title>
</head>

<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<div id="root"></div>
</body>

</html>
`;

export const IndexTs = `
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`;

export const PackageJson = `
{
  "name": "gemini-react-typescript",
  "version": "1.0.0",
  "description": "Gemini, React and TypeScript example starter project",
  "main": "src/index.tsx",
  "dependencies": {
    "@emotion/react": "^11.8.1",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.0.0",
    "@opensesame/gemini": "^2.0.0",
    "core-js": "3.8.3",
    "deepmerge": "4.2.2",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "react-scripts": "4.0.3"
  },
  "devDependencies": {
    "@types/react": "17.0.20",
    "@types/react-dom": "17.0.9",
    "typescript": "4.4.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}`;

export const Tsconfig = `
{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "es2015"
        ],
        "jsx": "react-jsx"
    }
}`;

export const Template = {
  files: {
    'package.json': {
      content: PackageJson
    },
    'public/index.html': {
      content: Index
    },
    'src/index.tsx': {
      content: IndexTs
    },
    'tsconfig.json': {
      content: Tsconfig
    }
  }
};
