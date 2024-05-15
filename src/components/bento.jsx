import { useRef, useEffect } from "react";
import styles from "./bento.module.css";
import { Card } from "@/components/ui/card";

function lerp(start, end, amt) {
	return (1 - amt) * start + amt * end;
}

function throttle(func, limit) {
	let inThrottle;
	return function () {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

function Bento({ children, ...props }) {
	const bentoRef = useRef(null);
	const gradientPos = useRef({
		x: 50,
		y: 50,
	});
	const gradientTarget = useRef({
		x: 50,
		y: 50,
	});
	const frameId = useRef(null);

	useEffect(() => {
		const updateGradient = () => {
			if (bentoRef.current) {
				gradientPos.current = {
					x: lerp(gradientPos.current.x, gradientTarget.current.x, 0.05),
					y: lerp(gradientPos.current.y, gradientTarget.current.y, 0.05),
				};
				bentoRef.current.style.backgroundImage = `radial-gradient(at ${gradientPos.current.x}% ${gradientPos.current.y}%, 
					hsl(var(--primary)) 0%, hsl(var(--background)) 70%)`;
			}
			frameId.current = requestAnimationFrame(updateGradient);
		};

		const mousemovelistener = throttle((e) => {
			const bentoRect = bentoRef.current.getBoundingClientRect();

			// Vérifiez si l'élément cible (event.target) est un élément enfant du conteneur
			if (event.target !== bentoRef.current && bentoRef.current.contains(event.target)) {
				// Si c'est le cas, récupérez les coordonnées de la souris par rapport au conteneur parent
				const mouseX = event.clientX - bentoRect.left;
				const mouseY = event.clientY - bentoRect.top;

				// Calculez les pourcentages pour 'targetX' et 'targetY'
				const targetX = (mouseX / bentoRect.width) * 100;
				const targetY = (mouseY / bentoRect.height) * 100;

				gradientTarget.current = {
					x: targetX,
					y: targetY,
				};
			} else {
				// Calculez les pourcentages pour 'targetX' et 'targetY' normalement si la souris est sur le conteneur parent
				const targetX = (event.offsetX / bentoRef.current.offsetWidth) * 100;
				const targetY = (event.offsetY / bentoRef.current.offsetHeight) * 100;

				gradientTarget.current = {
					x: targetX,
					y: targetY,
				};
			}
		}, 100); // Throttle limit: 10 milliseconds

		const bento = bentoRef.current;
		bento.addEventListener("mousemove", mousemovelistener, true);
		bento.addEventListener("mouseleave", (e) => {
			gradientTarget.current = {
				x: 50,
				y: 50,
			};
		});

		frameId.current = requestAnimationFrame(updateGradient);

		return () => {
			bento.removeEventListener("mousemove", mousemovelistener);
			if (frameId.current) {
				cancelAnimationFrame(frameId.current);
			}
		};
	}, []);

	return (
		<div
			ref={bentoRef}
			className={
				"bento p-0.5 flex items-center justify-center rounded-[10px] " + props.className
			}
		>
			<Card className={"w-full h-full bg-background" + " " + props.className}>
				{children}
			</Card>
		</div>
	);
}

export default Bento;
