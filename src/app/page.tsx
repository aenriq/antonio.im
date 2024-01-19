import A from "@/components/A";
import List, { ListItem } from "@/components/List";

export default function Home() {
	const todolist: ListItem[] = [
		{ id: "0", text: "Swap css with tailwind", done: true },
		{ id: "1", text: "Upgrade to Nextjs14", done: true },
		{ id: "2", text: "Add a dark mode", done: true },
		{ id: "3", text: "Add a blog", done: false },
		{ id: "4", text: "Add a projects page", done: false },
		{ id: "5", text: "Add an Akeem page", done: false },
	];

	const socialList: ListItem[] = [
		{ id: "0", text: "Github", url: "https://github.com/aenriq" },
		{
			id: "1",
			text: "Linkedin",
			url: "https://www.linkedin.com/in/antonio-rene-enriquez/",
		},
		{
			id: "2",
			text: "Resume",
			url: "https://read.cv/aenriq",
		},
		{ id: "3", text: "Email", url: "mailto:antonioe117@gmail.com" },
	];

	return (
		<div className="col-start-2">
			<article className="w-full">
				<h3 className="pb-7">Antonio</h3>
				<p>
					Software engineer at <A href="https://www.gapinc.com/en-us/">Gap.</A>
					Part of the rotation program and currently on my last rotation.
					Passionate about frontend and CI/CD.
				</p>
				<p>
					Working on <A href="https://www.pombo.email">pombo.email</A> (under
					construction)
				</p>
				<p>I live with a cat named Akeem.</p>
				<div className="flex flex-row gap-8">
					<List title="Socials" listItems={socialList} />
					<List title="Site Todo" type="todo" listItems={todolist} />
				</div>
			</article>
		</div>
	);
}
