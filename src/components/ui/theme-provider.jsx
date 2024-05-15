import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "vite-ui-theme",
	...props
}) {
	const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);
	const [effectiveTheme, setEffectiveTheme] = useState(
		localStorage.getItem(storageKey) || defaultTheme
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
			root.classList.add(systemTheme);
			return;
		}

		setEffectiveTheme(theme);
		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		effectiveTheme,
		setTheme: (newTheme) => {
			localStorage.setItem(storageKey, newTheme);
			setTheme(newTheme);
		},
	};

	return (
		<ThemeProviderContext.Provider value={value} {...props}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
