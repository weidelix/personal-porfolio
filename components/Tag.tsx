const tagColor : { [key: string]: string } = {
	'cplusplus': 'text-blue-500',
	'dart': 'text-blue-500',
	'flutter': 'text-blue-400',
	'csharp': 'text-violet-500',
	'unity': 'text-white',
	'svelte': 'text-orange-500',
	'nodejs': 'text-green-500',
	'javascript': 'text-yellow-500',
	'typescript': 'text-blue-400',
};

const tagName : { [key: string]: string } = {
	'cplusplus': 'devicon-cplusplus-plain',
	'dart': 'devicon-dart-plain',
	'flutter': 'devicon-flutter-plain',
	'csharp': 'devicon-csharp-plain',
	'unity': 'devicon-unity-original',
	'svelte': 'devicon-svelte-plain',
	'nodejs': 'devicon-nodejs-plain',
	'javascript': 'devicon-javascript-plain',
	'typescript': 'devicon-typescript-plain',
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