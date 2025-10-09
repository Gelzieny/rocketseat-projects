import type { ComponentProps } from "react";
import { techDisplayNameMap, techIconMap } from "./techIconMap";

type TechBadgeProps = ComponentProps<"div"> & {
	names: string[];
	className: string;
};


export function TechBadge({ names, className, ...props }: TechBadgeProps) {
	return (
		<div className="flex flex-wrap gap-2" {...props}>
			{names.map((name) => {
				const iconKey = techIconMap[name] || name.toLowerCase();
				const displayName = techDisplayNameMap[name] || name;
				const imageUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}-original.svg`;

				return (
					<span key={name} className={className}>
						<img
							src={imageUrl}
							alt={displayName}
							width={20}
							height={20}
							className="object-contain"
							onError={(e) => {
								(e.target as HTMLImageElement).style.display = "none";
							}}
						/>
						{displayName}
					</span>
				);
			})}
		</div>
	);
}
