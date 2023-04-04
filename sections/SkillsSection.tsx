import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { Area, CartesianGrid, ComposedChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Skill from "../components/Skill";

const languageSkills = [
	['C#', '85%'],
	['Typescript', '80%'],
	['Javascript', '75%'],
	['Dart', '70%'],
	['C++', '60%'],
	['Python', '40%'],
]

async function getContributions(token: string) {
	const headers = {
		'Authorization': `bearer ${token}`,
	}
	const body = {
		"query": `query {
					user(login: "weidelix") {
						name
						contributionsCollection {
							contributionCalendar {
								totalContributions
								weeks {
									contributionDays {
										contributionCount
										date
										weekday
									}
									firstDay
								}
							}
						}
					}
				}`
	}
	const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
	const data = await response.json()
	return data
}

type SkillsSectionProps = {
	gradients: string[]
};

export default function SkillsSection({ gradients }: SkillsSectionProps) {
	const data = [];
  
	useEffect(() => {
		// Hide API key in production
		getContributions('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').then((data) => console.log(data));
	}, []);

	const rand = 300;
	for (let i = 0; i < 7; i++) {
		let d = {
			year: 2000 + i,
			value: Math.random() * (rand + 50) + 100
		};

		data.push(d);
	}

	return <><h1 className='text-xl md:text-4xl lg:text-4xl font-bold p-10'>Skills</h1>
		<div className='grid gap-8 grid-cols-2 w-4/6'>
			<div className='p-10 text-left'>
				<h2 className='inline-block text-3xl font-bold pb-6'>
					<FontAwesomeIcon className='inline h-10 w-10 mr-3 p-2 rounded-full gradient-background' icon={faCode} />
					Language Skills
				</h2>
				{/* <p className=' pb-5'>
				Here are some of the languages I&apos;ve worked with.
			</p> */}
				<table className='w-full'>
					<tbody>
						{languageSkills.map((skill, i) => <Skill key={i} language={skill[0]} percentage={skill[1]} />)}
					</tbody>
				</table>
			</div>
			<div className='p-10 text-left'>
				<h2 className='text-3xl font-bold pb-6'>
					<FontAwesomeIcon className='inline h-10 w-10 mr-3 p-2 rounded-full gradient-background' icon={faCodeCommit} />
					Github Contributions
				</h2>
				{/* <p className='pb-5'>
				Here are some of the frameworks and libraries I&apos;ve worked with.
			</p> */}
				<ResponsiveContainer width='100%' height={300}>
					<ComposedChart
						data={data}
						margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
					>
						<defs>
							<linearGradient id='line' x1='0%' y1='0%' x2='0%' y2='100%'>
								<stop offset='0%' stopColor={gradients[1]} />
								<stop offset='100%' stopColor={gradients[0]} />
							</linearGradient>
							<linearGradient id='area' x1='0%' y1='0%' x2='0%' y2='100%'>
								<stop offset='0%' stopColor={gradients[1]} stopOpacity={0.5} />
								<stop offset='100%' stopColor={gradients[0]} stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="year" />
						<YAxis width={35} />
						<CartesianGrid stroke="#cccccc44" strokeDasharray="5 5" />
						<Area type="monotone"
							markerEnd="0"
							dataKey={'value'}
							strokeWidth={4}
							fillOpacity={1}
							fill="url(#area)"
							stroke="url(#line)" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	</>;
}
