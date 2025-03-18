import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { THEME } from "./shared/theme.ts";

import "./assets/styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
