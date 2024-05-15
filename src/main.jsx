import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { ThemeProvider } from "./components/ui/theme-provider.jsx";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { useTheme } from "@/components/ui/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<App />
			<Shader />
		</ThemeProvider>
	</React.StrictMode>
);

function Shader() {
	const { effectiveTheme } = useTheme();
	const colors = {
		dark: {
			color1: "#0A0C8E",
			color2: "#000000",
			color3: "#620A8E",
		},
		light: {
			color1: "#FFFFFF",
			color2: "#FF4500",
			color3: "#FFFFFF",
		},
	};
	return (
		<ShaderGradientCanvas
			importedFiber={{ ...fiber, ...drei, ...reactSpring }}
			style={{
				position: "fixed",
				top: 0,
				zIndex: -100,
				pointerEvents: "none",
			}}
		>
			<ShaderGradient
				enableTransition={false}
				uSpeed={0.1}
				grain="off"
				cDistance={5}
				cPolarAngle={105}
				color1={colors[effectiveTheme].color1}
				color2={colors[effectiveTheme].color2}
				color3={colors[effectiveTheme].color3}
				brightness={0.7}
				uStrength={4}
				uDensity={2}
			/>
		</ShaderGradientCanvas>
	);
}
