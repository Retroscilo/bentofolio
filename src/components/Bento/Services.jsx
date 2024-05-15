import Bento from "../bento";
import Vector from "../svg/cubes";
import Triangle from "../svg/triangle";
import Rounded from "../svg/rounded";
import TriangleBis from "../svg/TriangleBis";
import { CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function Services({ ...props }) {
	return (
		<Bento className={props.className + " flex flex-col"}>
			<CardHeader className="flex justify-between w-full pb-2">
				<div className="flex justify-between">
					<CardTitle>Services I offered</CardTitle>
					<Button variant="link">View all services </Button>
				</div>
			</CardHeader>
			<CardContent className="h-full">
				<div className="grid grid-cols-2 gap-6 [@media(min-width:919px)]:grid-cols-4 grid-rows-2 [@media(min-width:919px)]:grid-rows-1 w-full h-full justify-items-center items-center">
					<Service text="Software development">
						<Vector w={60} h={60} className="fill-primary stroke-[0.5px]" />
					</Service>
					<Service text="Product design">
						<Triangle w={60} h={60} className="fill-primary stroke-[0.5px]" />
					</Service>
					<Service text="No-code">
						<Rounded w={60} h={60} className="fill-primary stroke-[0.5px]" />
					</Service>
					<Service text="prototyping">
						<TriangleBis w={60} h={60} className="fill-primary stroke-[0.5px]" />
					</Service>
				</div>
			</CardContent>
		</Bento>
	);
}

function Service({ text, children }) {
	return (
		<div className="flex flex-col rounded-lg items-center  h-content text-center p-2 space-y-5  w-48 h-56">
			<div className="h-28 flex flex-col align-center justify-center bg-muted px-4 rounded-lg">
				{children}
			</div>
			<h1 className="text-muted-foreground text-2xl">{text}</h1>
		</div>
	);
}
