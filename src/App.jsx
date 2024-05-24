import Home from "./pages/home";
import Navigation from "./components/navigation";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
	return (
		<Router>
			<div className="min-h-screen max-w-[86rem] mx-auto p-5 ">
				<Navigation />
				<main className="w-full mt-5 ">
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/projects" element={<Projects />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}
