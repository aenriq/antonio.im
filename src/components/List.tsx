import React from "react";
import A from "@/components/A";

export type ListItem = {
	id: string;
	text: string;
	done?: boolean;
	url?: string;
};

export default function List({
	title,
	listItems,
	listStyle = "disc",
	type = "norm",
}: Readonly<{
	title: string;
	listItems: ListItem[];
	listStyle?: "disc" | "none" | "decimal";
	type?: "todo" | "norm";
}>) {
	if (type === "norm")
		return (
			<div>
				<article className="w-full">
					<h3 className="font-medium">{title}</h3>
					<ul className={`list-${listStyle} list-inside`}>
						{listItems.map((item) => (
							<li key={item.id}>
								{item.url ? (
									<A href={item.url}>{item.text}</A>
								) : (
									<span>{item.text}</span>
								)}
							</li>
						))}
					</ul>
				</article>
			</div>
		);

	return (
		<div>
			<article className="w-full">
				<h3 className="font-medium">{title}</h3>
				<ul className={`list-${listStyle} list-inside`}>
					{listItems.map((item) => (
						<li key={item.id}>
							{item.done ? (
								<span className="line-through">{item.text}</span>
							) : (
								<span>{item.text}</span>
							)}
						</li>
					))}
				</ul>
			</article>
		</div>
	);
}
