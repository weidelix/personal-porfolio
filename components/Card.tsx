import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Card.module.css';
import Tag from './Tag';

type CardProps = {
	title: string,
	projectName: string,
	tags: string[],
	children: React.ReactNode
}

export default function Card({ title, projectName, tags, children }: CardProps) {
	let link = `https://www.github.com/weidelix/${projectName}`;
	let image = `/images/${projectName}.png`;

	return (
		<div className={styles.card}>
			<div className={styles['card-content']}>
				<div>
					<h1 className='text-2xl font-bold mb-2'>{title}</h1>
					<span>
						{tags.map((tag, i) => <Tag key={i} tag={tag} />)}
					</span>
					<p className='text-sm font-normal py-4'>
						{children}
					</p>
				</div>

				<Image className={styles['project-image']} width={1920} height={1080} src={image} alt={`${title} image`} />

				<a href={link} target='_blank' rel='noreferrer' className={styles.github}>
					<FontAwesomeIcon className='inline h-full' icon={faGithub} />
					<span className='px-3'>Open in Github</span>
				</a>
			</div>
		</div>
	);
}