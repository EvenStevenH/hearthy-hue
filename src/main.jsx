import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter basename="/">
			<App />
		</HashRouter>
	</StrictMode>,
);
