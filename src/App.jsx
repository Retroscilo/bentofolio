import { ModeToggle } from "@/components/ui/mode-toggle";
import { Card } from "./components/ui/card";
import Myself from "./components/Bento/Myself";
import WorkExp from "./components/Bento/WorkExp";
import Expertise from "./components/Bento/Expertise";
import Projects from "./components/Bento/Projects";
import Services from "./components/Bento/Services";
import Contact from "./components/Bento/Contact";

export default function Home() {
	return (
		<div className="min-h-screen max-w-[86rem] mx-auto p-5 ">
			<nav className="w-full -mx-1 sticky z-10 top-0">
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
					<Services className=" [@media(max-width:919px)]:col-span-1 col-span-2 [@media(max-width:919px)]:row-span-2 order-5 row-span-1" />
					<Contact className="col-span-1 row-span-1 order-6" />
				</div>
			</main>
		</div>
	);
}
