import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Card from '../components/Card';
import styles from '../styles/ProjectsSection.module.css';

export default function ProjectsSection() {
	return <>
		<h1 className='text-xl md:text-4xl lg:text-4xl font-bold p-10'>Projects made with ❤️</h1>
		<div className={styles.grid}>
			<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={100} animateOnce={true}>
				<Card title='Tommy' projectName='tommy' tags={['Flutter', 'Dart']}>
					A free manga reader for Windows.
				</Card>
			</AnimationOnScroll>

			<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={200} animateOnce={true}>
				<Card title='Iron' projectName='iron' tags={['C++']}>
					A light weight game engine made using OpenGL.
				</Card>
			</AnimationOnScroll>

			<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={300} animateOnce={true}>
				<Card title='Anima' projectName='anima' tags={['Typescript', 'Javascript', 'Svelte', 'NodeJS']}>
					Manage and be updated on the latest games.
				</Card>
			</AnimationOnScroll>

			<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={400} animateOnce={true}>
				<Card title='Cleithropobia' projectName='cleithrophobia' tags={['C#', 'Unity']}>
					Navigate your way through a dark maze and find the exit.
				</Card>
			</AnimationOnScroll>
		</div>

		<div className='flex space-x-8 absolute right-0 top-0 px-10 py-8'>
			<a href={'https://www.linkedin.com/in/anthony-mesina-b41a82245/'} target='_blank' rel='noreferrer'>
				<FontAwesomeIcon className='inline h-6' icon={faLinkedin} />
			</a>
			<a href={'https://www.github.com/weidelix'} target='_blank' rel='noreferrer'>
				<FontAwesomeIcon className='inline h-6' icon={faGithub} />
			</a>
		</div>
	</>;
}