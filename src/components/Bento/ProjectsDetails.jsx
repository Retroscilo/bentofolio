import Bento from "../bento";
import { CardHeader, CardContent, CardDescription, CardTitle } from "../ui/card";
import { IconArrowUpRight } from "@tabler/icons-react";
import { TypographyInlineCode } from "../ui/Typography/inlineCode";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function DetailedProjects() {
	return (
		<div className="flex flex-col gap-3">
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	);
}

const projects = [
	{
		media: ["/tulip.jpg", "/tulip_mini_2.jpg", "/tulip_mini_3.jpg"],
		title: "Tulip - insurance app",
		tags: "Development | User research | Next.js",
		description: () => (
			<div className="text-primary">
				<p>
					This is the application I built for
					<TypographyInlineCode>Tulip, an insurance company</TypographyInlineCode>. It's a
					web app that allows users to purchase insurance for their bikes, scooter and
					other mobility devices. I was responsible for the
					<TypographyInlineCode>
						development, user research and wireframing.
					</TypographyInlineCode>
				</p>
				<p>
					<TypographyInlineCode>
						The app was built using Next.js and firebase
					</TypographyInlineCode>
					, upon an old version of the app. Today, it's an app with
					<TypographyInlineCode>
						e2e tests, a defined CI/CD pipeline and clear code standards
					</TypographyInlineCode>
					.
				</p>
			</div>
		),
	},
	{
		media: ["/LBV.gif", "/lbv_mini_2.jpg", "/lbv_mini_3.jpg"],
		link: "https://labellevie-tarot.com",
		title: "La Belle Vie - Personal website",
		tags: "Wireframe | code/no-code (framer) | SEO",
		description: () => (
			<p className="text-primary">
				La Belle Vie is a personal website for a client who needed a strong identity to
				showcase her tarot reading services and her universe. The website was built using
				<TypographyInlineCode>
					Framer, a no-code tool, and optimized for SEO.
				</TypographyInlineCode>
			</p>
		),
	},
	{
		media: ["/Workout_mini.png", "/workout_mini_2.jpg", "/workout_mini_3.jpg"],
		title: "Workout helper",
		tags: "HTMX | AI | Bun",
		description: () => (
			<p className="text-primary">
				Side project to help me with my workouts.{" "}
				<TypographyInlineCode>
					The app uses AI to suggest workouts based on user parameters.
				</TypographyInlineCode>
				This project was an opportunity to
				<TypographyInlineCode> discover htmx and bun</TypographyInlineCode>, and to develop
				a tool allowing to compose prompt based on dynamic requests.
			</p>
		),
	},
];

function Project(props) {
	return (
		<Bento>
			<CardHeader className="bg-muted p-4 m-4 rounded-lg">
				<Carousel>
					<CarouselContent className="items-center">
						<CarouselItem className="md:basis-1/2 lg:basis-2/5 lg:order-2 md:order-2 order-1">
							<img
								src={props.media[0]}
								alt={props.title}
								className="rounded-lg w-full object-cover h-[220px]"
							/>
						</CarouselItem>
						<CarouselItem className="md:basis-1/2 lg:basis-[30%] order-1">
							<img
								src={props.media[1]}
								alt={props.title}
								className="rounded-lg w-full object-cover h-[150px]"
							/>
						</CarouselItem>
						<CarouselItem className="md:basis-1/2 lg:basis-[30%] order-3">
							<img
								src={props.media[2]}
								alt={props.title}
								className="rounded-lg w-full object-cover h-[150px]"
							/>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</CardHeader>
			<CardContent>
				<CardTitle>
					{props.link ? (
						<Button variant="link" className="p-0 text-xl">
							<a href={props.link} target="_blank" rel="noopener noreferrer">
								{props.title}
							</a>
							<IconArrowUpRight stroke={2} />
						</Button>
					) : (
						<div className="text-xl font-medium h-10 flex items-center">
							{props.title}
						</div>
					)}
				</CardTitle>
				<CardDescription className="space-y-3">
					<p>{props.tags}</p>
					<props.description />
				</CardDescription>
			</CardContent>
		</Bento>
	);
}
