import Bento from "../bento";
import { CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Education({ ...props }) {
	return (
		<Bento
			className={
				"col-span-1 row-span-1 flex flex-col h-full overflow-hidden max-h-[20rem] " +
				props.className
			}
		>
			<CardHeader>
				<CardTitle>Education</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 flex flex-col justify-evenly">
				<div className="flex items-center gap-6">
					<div className="rounded-lg overflow-hidden bg-muted p-1 sm:w-[50px] sm:h-[50px] h-[40px] w-[40px]">
						<img className="rounded-[50%]" src={"/DC_logo.png"} alt="logo hetic" />
					</div>
					<div>
						<h3 className="text-lg sm:text-xl font-semibold">
							Mastère Expert en Stratégie Digitale
						</h3>
						<p className="text-sm font-semibold">@DIGITAL CAMPUS - option tech lead</p>
						<div className="flex md:flex-col md:gap-0 gap-4">
							<p className="text-sm text-muted-foreground">Paris, 2021-2023</p>
							<p className="text-sm text-muted-foreground">Titre RNCP niveau 7</p>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-6">
					<div className="rounded-lg overflow-hidden bg-muted p-1 sm:w-[50px] sm:h-[50px] h-[40px] w-[40px]">
						<img className="rounded-[50%]" src={"/HETIC_logo.jpg"} alt="logo hetic" />
					</div>
					<div>
						<h3 className="text-lg sm:text-xl font-semibold">
							Bachelor Developpement web
						</h3>
						<p className="text-sm font-semibold">@HETIC - option technologies WEB</p>
						<div className="flex md:flex-col md:gap-0 gap-4">
							<p className="text-sm text-muted-foreground">Paris, 2021-2023</p>
							<p className="text-sm text-muted-foreground">Titre RNCP niveau 6</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Bento>
	);
}

const El = ({ ...props }) => {
	return (
		<div className="grid grid-cols-[50px_1fr]">
			<h3 className="col-start-2 text-lg sm:text-xl font-semibold">
				Bachelor Developpement web
			</h3>
			<p className="col-start-2 text-sm ">@HETIC - option technologies WEB</p>
			<p className="col-start-2 text-sm ">Montreuil, 2018-2021</p>
			<p className="col-start-2 text-sm ">Titre RNCP niveau 6</p>
			<div className="rounded-lg overflow-hidden bg-muted p-1 row-start-1">
				<img className="rounded-[50%]" src={props.media} alt="logo hetic" />
			</div>
		</div>
	);
};
