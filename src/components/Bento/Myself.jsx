import { useState } from "react";
import Bento from "../bento";
import { CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import IconDeviceMobileMessage from "@tabler/icons-react/dist/esm/icons/IconDeviceMobileMessage";
import IconCopy from "@tabler/icons-react/dist/esm/icons/IconCopy";
import IconCopyCheck from "@tabler/icons-react/dist/esm/icons/IconCopyCheck";
import LinkedinIcon from "lucide-react/dist/esm/icons/linkedin";
import { GithubIcon } from "lucide-react";

export default function Myself({ ...props }) {
	const [copyButtonText, setCopyButtonText] = useState("Copy email");
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyEmail = () => {
		const email = "loic.torresg@gmail.com";
		navigator.clipboard.writeText(email).then(() => {
			setCopyButtonText("Email copied!");
			setIsCopied(true);
			setTimeout(() => {
				setCopyButtonText("Copy email");
				setIsCopied(false);
			}, 2000); // Reset button text and icon after 2 seconds
		});
	};

	return (
		<Bento className={"col-span-1 row-span-2 flex flex-col justify-between " + props.className}>
			<CardHeader>
				<img
					src="/public/loic.jpg"
					className="w-full rounded-lg max-h-[350px] object-cover"
					alt="Photo de Loïc Torres"
				/>
			</CardHeader>
			<CardContent className="space-y-5">
				<CardTitle>Loïc Torres ⚡️</CardTitle>
				<CardDescription>
					A passionate full-stack developer & product designer with 5 years of experience
					in developing solutions for tech companies
				</CardDescription>
				<div className="w-full space-x-5">
					<a href="tel:+33628921127">
						<Button>
							<IconDeviceMobileMessage className="mr-2" stroke={1} />
							Contact
						</Button>
					</a>
					<Button variant="outline" onClick={handleCopyEmail}>
						<span>
							{isCopied ? (
								<IconCopyCheck className="mr-2" stroke={1} />
							) : (
								<IconCopy className="mr-2" stroke={1} />
							)}
						</span>
						{copyButtonText}
					</Button>
				</div>
			</CardContent>
			<CardFooter role="list" className="space-x-5">
				<a href="https://github.com/Retroscilo" target="_blank">
					<Button role="listitem" variant="secondary">
						<GithubIcon strokeWidth={1.2} size={20} fill="white" />
					</Button>
				</a>
				<a href="https://www.linkedin.com/in/lo%C3%AFctorres/" target="_blank">
					<Button role="listitem" variant="secondary">
						<LinkedinIcon strokeWidth={1.2} size={20} fill="white" />
					</Button>
				</a>
			</CardFooter>
		</Bento>
	);
}
