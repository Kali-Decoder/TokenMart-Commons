import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { MantineProvider } from "@mantine/core";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { StellarWalletProvider } from "./contexts/StellarWalletContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <BrowserRouter>
        <UserContextProvider>
          <StellarWalletProvider>
            <TonConnectUIProvider manifestUrl="http://localhost:5173//tonconnect-manifest.json">
              <App />
            </TonConnectUIProvider>
          </StellarWalletProvider>
        </UserContextProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
