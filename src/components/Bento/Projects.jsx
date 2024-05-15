import Bento from "../bento";
import { CardTitle, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Projects({ ...props }) {
	return (
		<Bento className={"flex flex-col " + props.className}>
			<CardHeader className="flex flex-row justify-between">
				<CardTitle>Recent projects</CardTitle>
				<Button variant="link">All projects →</Button>
			</CardHeader>
			<CardContent className="flex flex-col h-full justify-evenly space-y-5">
				<ProjectPeek name="La·belle·vie" media="/LBV.gif" tag="Development & Design" />
				<ProjectPeek
					name="Project 1"
					tag="Product design & Development"
					media="/tulip.jpg"
				/>
			</CardContent>
		</Bento>
	);
}

function ProjectPeek({ name, media, tag }) {
	return (
		<div className="relative p-4 bg-muted border-inset rounded-lg">
			<img className="rounded-lg w-full max-h-[220px] object-cover" src={media} alt="" />
			<Badge className={"absolute bottom-5 -left-3"}> {tag}</Badge>
		</div>
	);
}
