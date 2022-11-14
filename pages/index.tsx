import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { randomInt } from 'crypto';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';


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
	
	let desc = 'Student. Developer. Hatdog.'.split(' ');
	let title = 'Hi, I\'m Anthony'.split(' ');
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
						{title.map((word, i) => <span key={i}>{word}</span>)}
					</h1>

					{/* Show before slide */}
					<h1 className={styles['name-before-slide']}
							style={{animationDelay: `${slideDownDelay}ms`}}>
						
						{title.map((char, i) => {
							let dir = i % 2 === 0 ? 'X' : 'Y';
							let offset = [-40, 40][Math.round(Math.random())];
							let out = `translate${dir}(${offset}px)`;
 
							return <span key={i} className={`${styles['stagger-child']} text-white`}
													 style={{transform: out, 
																	 animationDelay: `${(interval * i) + baseDelay}ms`}}>
											 {char}
										 </span>;
						})}
					</h1>
					<p className={styles.description}>
							{desc.map((d, i) => <span key={d} className={styles['stagger-child']} 
																				style={{animationDelay: `${(interval * i) + descDelay}ms`}}>{d}</span>
							)}
					</p>
				</div>

				<h1 className='text-4xl font-bold p-10'>Projects made with ❤️</h1>

        <div className={styles.grid}>
					<Card title='Tommy' projectName='tommy' tags={['flutter', 'dart']}>
						A free manga reader for Windows.
					</Card>

					<Card title='Iron' projectName='iron' tags={['cplusplus']}>
						A light weight game engine made using OpenGL. 
					</Card>
					
					<Card title='Anima' projectName='anima' tags={['typescript', 'javascript', 'svelte', 'nodejs']}>
						Something something soemthing nice.
					</Card>
					
					<Card title='Cleithropobia' projectName='cleithrophobia' tags={['csharp', 'unity']}>
						Navigate your way through a dark maze and find the exit.
					</Card>
        </div>
      </main>
    </div>
  );
}
