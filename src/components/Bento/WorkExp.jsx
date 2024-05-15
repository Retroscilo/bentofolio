import Bento from "../bento";
import { CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
export default function WorkExp({ ...props }) {
	return (
		<Bento
			className={
				"col-span-1 row-span-1 flex flex-col h-full overflow-hidden max-h-[20rem] " +
				props.className
			}
		>
			<CardHeader>
				<CardTitle>Work Experience</CardTitle>
			</CardHeader>
			<CardContent className="border-b-[1rem] border-b-background overflow-hidden w-full">
				<div className="animate-[translateFull_12s_infinite_linear] space-y-5">
					{experiences.map((_, i) => (
						<Experience index={i} key={i} />
					))}
					{experiences.map((_, i) => (
						<Experience index={i} key={i} />
					))}
				</div>
			</CardContent>
		</Bento>
	);
}

const experiences = [
	{
		date: "2021 - 2024",
		title: "Full-stack developer",
		company: "Tulip",
		logo: "/tulip-logo.png",
	},
	{
		date: "2023",
		title: "No-code developer",
		company: "La·belle·vie",
		logo: "/LBV_logo.png",
	},
	{
		date: "2019-2021",
		title: "Backend developer",
		company: "GrandVision France",
		logo: "/GV_logo.jpg",
	},
	{
		date: "2019",
		title: "Junior developer",
		company: "First Finance",
		logo: "/FF_logo.jpg",
	},
];

function Experience({ index = 0 }) {
	const exp = experiences[index];
	return (
		<div className="flex gap-5">
			<div className="text-lg text-gray-500 w-[50px] sm:w-[100px]">{exp.date}</div>
			<div className="grid gap-1 grid-cols-[60px_1fr] grid-rows-2">
				<div className="h-[50px] w-[50px] row-span-2 col-span-1 sm:self-center self-start bg-muted p-2 rounded-lg place-content-center ">
					<img className="rounded-lg" src={exp.logo} alt="logo entreprise" />
				</div>
				<div className="text-lg font-bold">{exp.title}</div>
				<div className="text-gray-500">{exp.company}</div>
			</div>
		</div>
	);
}
