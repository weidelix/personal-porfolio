import styles from '../styles/Skill.module.css';
import { tagName } from './Tag';

type SkillProps = {
	language: string,
	percentage: string
}

export default function Skill({ language, percentage }: SkillProps) {
	return (
		<tr>
			<td className='w-0 py-2 pr-4'>
				<i className={`${tagName[language]} text-xl`}></i>
			</td>
			<td className='flex items-center py-2 overflow-hidden' style={{ width: '100%' }}>
				<div className={styles.bar} style={{ width: percentage }}>
					<span className="inline-block align-middle">{' '}</span>
				</div>
				<div className='inline-block pl-2'>{percentage}</div>
			</td>
		</tr>
	);
}