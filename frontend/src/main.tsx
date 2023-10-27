import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Disable strict mode to avoid opening multiple connections with SignalR
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
