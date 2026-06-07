import { useEffect } from "react";

export function useScrollReveal() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12 },
		);

		const elements = document.querySelectorAll(".reveal");
		for (const element of elements) {
			const rect = element.getBoundingClientRect();
			if (rect.top < window.innerHeight * 1.1) {
				element.classList.add("visible");
			} else {
				observer.observe(element);
			}
		}

		return () => {
			observer.disconnect();
		};
	}, []);
}
