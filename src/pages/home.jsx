import Myself from "../components/Bento/Myself";
import WorkExp from "../components/Bento/WorkExp";
import Expertise from "../components/Bento/Expertise";
import Projects from "../components/Bento/Projects";
import Services from "../components/Bento/Services";
import Contact from "../components/Bento/Contact";
import Education from "../components/Bento/Education";

export default function Home() {
	return (
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
			<Services className="col-span-1 order-5 row-span-1" />
			<Contact className="col-span-1 row-span-1 order-7 " />
			<Education className="col-span-1 row-span-1 order-6 h-[20rem]" />
		</div>
	);
}
