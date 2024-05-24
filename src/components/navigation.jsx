import { Card } from "./ui/card";
import { ModeToggle } from "./ui/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";
import { IconComponents } from "@tabler/icons-react";
export default function Navigation() {
	const { pathname } = useLocation();
	return (
		<nav className="w-full sticky z-10 top-0">
			<Card className="bg-muted flex justify-center p-2 gap-5">
				<ModeToggle className="absolute left-2" />
				<Link to="/">
					<NavButton className={pathname === "/" && "text-primary"}>
						<HomeIcon />
						Home
					</NavButton>
				</Link>
				<Link to={"/projects"}>
					<NavButton className={pathname === "/projects" && "text-primary"}>
						<IconComponents />
						Projects
					</NavButton>
				</Link>
			</Card>
		</nav>
	);
}

function NavButton({ className, children }) {
	return (
		<Button
			className={"flex gap-3 items-center justify-center text-muted-foreground " + className}
			variant="secondary"
		>
			{children}
		</Button>
	);
}
