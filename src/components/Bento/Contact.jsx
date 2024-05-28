import Bento from "../bento";
import { CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { IconArrowElbowRight } from "@tabler/icons-react";

export default function Contact({ ...props }) {
	return (
		<Bento className={props.className}>
			<CardContent className="flex flex-col justify-between h-[100%] items-start py-6 space-y-2">
				<div className="w-full overflow-hidden p-3 bg-muted rounded-lg border-x-8 border-x-muted text-muted-foreground">
					<div className="max-w-none flex whitespace-nowrap  h-full">
						<div className="animate-[translateXFull_12s_linear_infinite] ">
							Available for hire &nbsp; 🚀 &nbsp; Crafting digital experiences &nbsp;
							✨ &nbsp; Prototyping your next product &nbsp; ⚡️ &nbsp; Developing
							cool-edgy API &nbsp; ✌️ &nbsp;
						</div>
						<div className="max-w-none animate-[translateXFull_12s_linear_infinite] ">
							Available for hire &nbsp; 🚀 &nbsp; Crafting digital experiences &nbsp;
							✨ &nbsp; Prototyping your next product &nbsp; ⚡️ &nbsp; Developing
							cool-edgy API &nbsp; ✌️ &nbsp;
						</div>
					</div>
				</div>
				<CardTitle className="text-5xl">Let's ⚡️ work together !</CardTitle>
				<a href="tel:+33628921127">
					<Button className="flex gap-2 p-0 text-xl" variant="link">
						Let's Talk <IconArrowElbowRight />
					</Button>
				</a>
			</CardContent>
		</Bento>
	);
}
