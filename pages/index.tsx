import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import 'animate.css/animate.min.css';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';

const colors = [
	// ['#ffa751', '#ffe259'],
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
	let [randomColor, setRandomColor] = useState(colors[getRandomInt(0, colors.length - 1)]);

	useEffect(() => {
		document.documentElement.style.setProperty('--grad1', randomColor[0]);
		document.documentElement.style.setProperty('--grad2', randomColor[1]);
	}, [randomColor]);

	let desc = 'Student. Hobbyist. Developer.'.split(/(\s+)/);
	let title = "Hi, I'm Anthony".split(/(\s+)/);
	let interval = 100;
	let baseDelay = 700;
	let descDelay = (interval * title.length) + baseDelay;
	let slideDownDelay = (interval * desc.length) + descDelay;
	let zoomInDelay = slideDownDelay + interval * 2;

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.greet} style={{ animationDelay: `${zoomInDelay}ms` }}>
					{/* Show after slide */}
					<h1 className={styles['name-after-slide']} style={{ animationDelay: `${slideDownDelay}ms` }}>
						{title.map((word, i) => <span key={i}>{(word === ' ' ? <>&nbsp;</> : word)}</span>)}
					</h1>

					{/* Show before slide */}
					<h1 className={styles['name-before-slide']}
						style={{ animationDelay: `${slideDownDelay}ms` }}>

						{title.map((word, i) => {
							if (word === ' ') return <>&nbsp;</>;

							let dir = (i / 2) % 2 === 0 ? 'X' : 'Y';
							let offset = [-40, 40][Math.round(Math.random())];
							let out = `translate${dir}(${offset}px)`;

							return <span key={i} className={`${styles['stagger-child']} text-white`}
								style={{
									transform: out,
									animationDelay: `${(interval * i) + baseDelay}ms`
								}}>
								{word}
							</span>;
						})}
					</h1>
					<p className={styles.description}>
						{desc.map((d, i) => {
							if (d === ' ') return <>&nbsp;</>;
							return <span key={i} className={styles['stagger-child']}
								style={{ animationDelay: `${(interval * i) + descDelay}ms` }}>
								{d}
							</span>
						}
						)}
					</p>

					{/* <div className='absolute left-0 right-0 bottom-14 flex flex-col justify-center mt-36 
												text-gray-200 text-sm animate__animated animate__fadeInUp'
												style={{ animationDelay: `${zoomInDelay}ms` }}>
												<span>Scroll for more</span>
												<i className="gg-chevron-down self-center"></i>
											</div> */}
				</div>
				<SkillsSection gradients={randomColor} />
				<ProjectsSection />

				{/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 place-content-center
													px-60'>
					<AnimationOnScroll animateIn='animate__fadeInDown animate__faster' animateOnce={true} delay={300}>
						<h1 className={`${styles['gradient-text']} text-4xl md:text-4xl lg:text-7xl font-bold
															text-left md:text-right`}>
							Who am I? Let me tell you!
						</h1>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' animateOnce={true} delay={300}>
						<p className='text-left text-base md:text-3xl'>
						Hi, I&apos;m Anthony. I&apos;m a student and a developer.
						I love to make things and I&apos;m always looking for new projects to work on.
						</p>
						</AnimationOnScroll>
					</div> */}
				{/* 
				<div className={`min-h-screen px-10 md:px-60`}>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 place-content-center
													py-36'>
						<AnimationOnScroll animateIn='animate__fadeInDown animate__faster' animateOnce={true} delay={300}>
							<h1 className={`${styles['gradient-text']} text-4xl md:text-4xl lg:text-7xl font-bold
															text-left md:text-right`}>
								Who am I? Let me tell you!
							</h1>
						</AnimationOnScroll>
						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' animateOnce={true} delay={300}>
							<p className='text-left text-base md:text-3xl'>
								Hi, I&apos;m Anthony. I&apos;m a student and a developer.
								I love to make things and I&apos;m always looking for new projects to work on.
							</p>
						</AnimationOnScroll>
					</div>

					<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' animateOnce={true} delay={300}>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 place-content-center
														py-36'>
							<p className='text-right text-base md:text-3xl'>
								Never stop learning. I&apos;m always looking for new things to learn and new ways to improve.
							</p>
							<h1 className={`${styles['gradient-text']} text-4xl md:text-4xl lg:text-7xl font-bold
															text-left md:text-left`}>
								Always learn something new
							</h1>
						</div>
					</AnimationOnScroll>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 place-content-center
													py-36'>
						<AnimationOnScroll animateIn='animate__fadeInDown animate__faster' animateOnce={true} delay={300}>
							<h1 className={`${styles['gradient-text']} text-4xl md:text-4xl lg:text-7xl font-bold
															text-left md:text-right`}>
								Who am I? Let me tell you!
							</h1>
						</AnimationOnScroll>
						<AnimationOnScroll animateIn='animate__fadeInUp animate__faster' animateOnce={true} delay={300}>
							<p className='text-left text-base md:text-3xl'>
								Hi, I&apos;m Anthony. I&apos;m a student and a developer.
								I love to make things and I&apos;m always looking for new projects to work on.
							</p>
						</AnimationOnScroll>
					</div>
				</div> */}

			</main >
		</div >
	);
}
