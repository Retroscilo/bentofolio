import Bento from "../bento";
import { CardHeader, CardTitle, CardContent } from "../ui/card";
import { IconBrandNodejs, IconBrandNextjs, IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandFigma } from "@tabler/icons-react";
import { IconBrandFramer, IconBrandNotion } from "@tabler/icons-react";

export default function Expertise({ ...props }) {
	return (
		<Bento className={"col-span-1 row-span-1 flex flex-col " + props.className}>
			<CardHeader>
				<CardTitle>Expertise Area</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-3 w-full h-full gap-4">
				<ExpertiseIcon icon={<IconBrandNodejs size={45} stroke={1} />} label="Nodejs" />
				<ExpertiseIcon icon={<IconBrandNextjs size={45} stroke={1} />} label="Next.js" />
				<ExpertiseIcon
					icon={<IconBrandTypescript size={45} stroke={1} />}
					label="Typescript"
				/>
				<ExpertiseIcon icon={<IconBrandFigma size={45} stroke={1} />} label="Figma" />
				<ExpertiseIcon icon={<IconBrandFramer size={45} stroke={1} />} label="Framer" />
				<ExpertiseIcon icon={<IconBrandNotion size={45} stroke={1} />} label="Notion" />
			</CardContent>
		</Bento>
	);
}

export function ExpertiseIcon({ icon, label }) {
	return (
		<div className="rounded-lg flex flex-col items-center justify-center gap-2">
			<div aria- className=" bg-muted rounded-lg px-5 py-2">
				{icon}
			</div>
			<p>{label}</p>
		</div>
	);
}
