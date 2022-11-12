import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CSSProperties } from 'react';
import Image from 'next/image';
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

	const imageStyle : CSSProperties = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className={styles.card}>
			<div className={styles['card-content']}>
				<div>
						<h1 className='text-3xl font-bold mb-2'>{title}</h1>
					<span>
						{tags.map((tag, i) => <Tag key={i} tag={tag}/>)}
					</span>
					<p className='text-base font-normal py-4'>
						{children}
					</p>
				</div>

				<Image className={styles['project-image']} width={1920} height={1080} src={image} alt={`${title} image`}/>

				<a href={link} target='_blank' rel='noreferrer' className={styles.github}>
						<FontAwesomeIcon className='inline h-full' icon={faGithub}/>
						<span className='px-2'>Open in Github</span>
				</a>
			</div>
		</div>
	);
}