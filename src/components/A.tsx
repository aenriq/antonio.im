import React from "react";
import LinkIcon from "public/link.svg";
import Link from "next/link";

export default function A({
	href,
	icon = true,
	children,
}: Readonly<{
	href: string;
	icon?: boolean;
	children: React.ReactNode;
}>) {
	if (href && href.startsWith("/")) {
		return (
			<Link href={href}>
				<a className="underline decoration-[#c7c7c7] hover:decoration-[#6f6f6f] dark:decoration-[#505050] dark:hover:decoration-[#a0a0a0] underline-offset-4 hover:underline-offset-1 ease-in-out duration-300">
					{children}
				</a>
			</Link>
		);
	}
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="underline decoration-[#c7c7c7] hover:decoration-[#6f6f6f] dark:decoration-[#505050] dark:hover:decoration-[#a0a0a0] inline-flex underline-offset-4 hover:underline-offset-1 ease-in-out duration-300"
		>
			{children}
			{icon && <LinkIcon width="12px" height="12px" viewBox="0 0 36 36" />}
		</a>
	);
}
