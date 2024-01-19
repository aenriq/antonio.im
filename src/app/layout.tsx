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
		<>
			<head></head>
			<html lang="en">
				<body>
					<main>
						<div className="px-6 flex sm:grid grid-cols-main sm:grid-cols-main-grid sm:gap-x-6">
							{children}
						</div>
					</main>
				</body>
			</html>
		</>
	);
}
