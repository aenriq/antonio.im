import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "antonio.im",
	description: "personal website of antonio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<main>
					<div className="grid grid-cols-main-grid gap-x-6">{children}</div>
				</main>
			</body>
		</html>
	);
}
