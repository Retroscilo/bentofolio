import Myself from "@/components/Bento/Myself";
import DetailedProjects from "@/components/Bento/ProjectsDetails";

export default function Projects() {
	return (
		<div>
			<div
				className={`grid gap-[2rem] transition-all delay-75 grid-cols-1 md:grid-cols-[.3fr_.7fr]`}
			>
				<Myself
					className={`overflow-hidden transition-opacity delay-75 h-fit sticky top-[79px] hidden md:block`}
				/>
				<DetailedProjects />
			</div>
		</div>
	);
}
