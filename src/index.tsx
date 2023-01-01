import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import Root from "./Root";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <Root />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
