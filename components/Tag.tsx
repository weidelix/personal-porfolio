export const tagColor: { [key: string]: string } = {
	'C++': 'text-blue-500',
	'Dart': 'text-blue-500',
	'Flutter': 'text-blue-400',
	'C#': 'text-violet-500',
	'Unity': 'text-white',
	'Svelte': 'text-orange-500',
	'NodeJS': 'text-green-500',
	'Javascript': 'text-yellow-500',
	'Typescript': 'text-blue-400',
};

export const tagName: { [key: string]: string } = {
	'C++': 'devicon-cplusplus-plain',
	'Dart': 'devicon-dart-plain',
	'Flutter': 'devicon-flutter-plain',
	'C#': 'devicon-csharp-plain',
	'Unity': 'devicon-unity-original',
	'Svelte': 'devicon-svelte-plain',
	'NodeJS': 'devicon-nodejs-plain',
	'Javascript': 'devicon-javascript-plain',
	'Typescript': 'devicon-typescript-plain',
};

type TagProps = {
	tag: string
}

export default function Tag({ tag }: TagProps) {
	return (
		<span className={`text-xl mr-1 ${tagColor[tag]}`}>
			<i className={tagName[tag]}></i>
		</span>
	);
}