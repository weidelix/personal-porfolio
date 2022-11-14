import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import React, { useEffect } from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const colors = [
	['#ffa751', '#ffe259'],
	['#0575E6', '#00F260'],
	['#7F00FF', '#E100FF'],
	['#FF4E50', '#F9D423'],
	['#4568DC', '#B06AB3'],
	['#16A085', '#F4D03F'],
	['#4776E6', '#8E54E9'],
];

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
	useEffect(() => {
		let randomColor = colors[getRandomInt(0, colors.length - 1)];
		document.documentElement.style.setProperty('--grad1', randomColor[0]);
		document.documentElement.style.setProperty('--grad2', randomColor[1]);
	}, []);
	
	let desc = 'Student. Hobbyist. Developer.'.split(/(\s+)/);
	let title = "Hi, I'm Anthony".split(/(\s+)/);
	let interval = 150;
	let baseDelay = 700;
	let descDelay = (interval * title.length) + baseDelay;
	let slideDownDelay = (interval * desc.length) + descDelay; 
	let zoomInDelay = slideDownDelay + interval * 2;
	
	return (
    <div className={styles.container}>
      <main className={styles.main}>
				<div className={styles.greet} style={{animationDelay: `${zoomInDelay}ms`}}>
					{/* Show after slide */}
					<h1 className={styles['name-after-slide']} style={{animationDelay: `${slideDownDelay}ms`}}>
						{title.map((word, i) => <span key={i}>{(word === ' ' ? <>&nbsp;</> : word)}</span>)}
					</h1>

					{/* Show before slide */}
					<h1 className={styles['name-before-slide']}
							style={{animationDelay: `${slideDownDelay}ms`}}>
						
						{title.map((word, i) => {
							if (word === ' ') return <>&nbsp;</>;
													
							let dir = (i / 2) % 2  === 0 ? 'X' : 'Y';
							let offset = [-40, 40][Math.round(Math.random())];
							let out = `translate${dir}(${offset}px)`;

							return <span key={i} className={`${styles['stagger-child']} text-white`}
													style={{transform: out, 
																	animationDelay: `${(interval * i) + baseDelay}ms`}}>
											{word}
										</span>;
						})}
					</h1>
					<p className={styles.description}>
							{desc.map((d, i) => {
									if (d === ' ') return <>&nbsp;</>;
									return <span key={d} className={styles['stagger-child']} 
															 style={{animationDelay: `${(interval * i) + descDelay}ms`}}>
														{d}
												 </span>
								}
							)}
					</p>

					<div className='absolute left-0 right-0 bottom-14 flex flex-col justify-center mt-36 
												text-gray-200 text-sm animate__animated animate__fadeInUp'
							 style={{animationDelay: `${zoomInDelay}ms`}}>
							<span>Scroll for more</span>
							<i className="gg-chevron-down self-center"></i>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 place-content-center h-screen
											  px-10 md:px-40 snap-start'>
					<AnimationOnScroll animateIn='animate__fadeInDown animate__faster' animateOnce={true}>
						<h1 className={`${styles['gradient-text']} text-4xl md:text-4xl lg:text-7xl font-bold
														text-left md:text-right`}>
							Who am I? Let me tell you!
						</h1>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' animateOnce={true}>
						<p className='text-left text-base md:text-3xl'>
							Hi, I&apos;m Anthony. I&apos;m a student and a developer. 
							I love to make things and I&apos;m always looking for new projects to work on.
						</p>
					</AnimationOnScroll>
				</div>

				<div className='flex flex-col justify-center lg:h-screen snap-start md:lg:snap-center'>
					<h1 className='text-xl md:text-4xl lg:text-4xl font-bold p-10'>Projects I made with ❤️</h1>
					<div className={styles.grid}>
						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={100} animateOnce={true}>
							<Card title='Tommy' projectName='tommy' tags={['flutter', 'dart']}>
								A free manga reader for Windows.
							</Card>
						</AnimationOnScroll>

						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={200} animateOnce={true}>
							<Card title='Iron' projectName='iron' tags={['cplusplus']}>
								A light weight game engine made using OpenGL. 
							</Card>
						</AnimationOnScroll>
							
						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={300} animateOnce={true}>
							<Card title='Anima' projectName='anima' tags={['typescript', 'javascript', 'svelte', 'nodejs']}>
								Manage and be updated on the latest games. 
							</Card>
						</AnimationOnScroll>
							
						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' delay={400} animateOnce={true}>
							<Card title='Cleithropobia' projectName='cleithrophobia' tags={['csharp', 'unity']}>
								Navigate your way through a dark maze and find the exit.
							</Card>
						</AnimationOnScroll>
					</div>
				</div>

				<div className='flex space-x-8 absolute right-0 top-0 px-10 py-8'>
					<a href={'https://www.linkedin.com/in/anthony-mesina-b41a82245/'} target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='inline h-6' icon={faLinkedin}/>
					</a>
					<a href={'https://www.github.com/weidelix'} target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='inline h-6' icon={faGithub}/>
					</a>
				</div>
      </main>
    </div>
  );
}
