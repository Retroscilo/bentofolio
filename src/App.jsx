import { ModeToggle } from "@/components/ui/mode-toggle";
import { Card } from "./components/ui/card";
import Myself from "./components/Bento/Myself";
import WorkExp from "./components/Bento/WorkExp";
import Expertise from "./components/Bento/Expertise";
import Projects from "./components/Bento/Projects";
import Services from "./components/Bento/Services";
import Contact from "./components/Bento/Contact";
import Education from "./components/Bento/Education";

export default function Home() {
	return (
		<div className="min-h-screen max-w-[86rem] mx-auto p-5 ">
			<nav className="w-full  sticky z-10 top-0">
				<Card className="bg-muted p-2">
					<ModeToggle />
				</Card>
			</nav>
			<main className="w-full mt-5 ">
				<div
					className="grid gap-[2rem]"
					style={{
						gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
						gridTemplateRows: "repeat(auto-fill, 20rem)",
					}}
				>
					<Myself className="order-1" />
					<WorkExp className="order-2" />
					<Expertise className="order-4" />
					<Projects className="col-span-1 row-span-2 order-3" />
					<Services className="col-span-1 order-5 row-span-1 h-[20rem]" />
					<Contact className="col-span-1 row-span-1 order-7 h-[20rem]" />
					<Education className="col-span-1 row-span-1 order-6 h-[20rem]" />
				</div>
			</main>
		</div>
	);
}
