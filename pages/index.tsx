import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { randomInt } from 'crypto';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
	let desc = 'Student. Developer. Hatdog.'.split(' ');
	let title = 'Hi, I\'m Anthony'.split(' ');
	let baseDelay = 150;
	let titleDelay = 700;
	let descDelay = (baseDelay * title.length) + titleDelay;
	let slideDownDelay = (baseDelay * desc.length) + descDelay; 
	let zoomInDelay = slideDownDelay + baseDelay * 2;
	
	return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.greet} style={{animationDelay: `${zoomInDelay}ms`}}>
					{/* Show after animation */}
					<h1 className={styles['name-after-animating']} style={{animationDelay: `${slideDownDelay}ms`}}>
						{title.map((word, i) => <span key={i}>{word}</span>)}
					</h1>

					{/* Show while animating */}
					<h1 className={styles['name-while-animating']}
							style={{animationDelay: `${slideDownDelay}ms`}}>
						
						{title.map((char, i) => {
							let dir = i % 2 === 0 ? 'X' : 'Y';
							let offset = [-40, 40][Math.round(Math.random())];
							let out = `translate${dir}(${offset}px)`;
 
							return <span key={i} className={`${styles['stagger-child']} text-white`}
													 style={{transform: out, 
																	 animationDelay: `${(baseDelay * i) + titleDelay}ms`}}>
											 {char}
										 </span>;
						})}
					</h1>
					<p className={styles.description}>
							{desc.map((d, i) => <span key={d} className={styles['stagger-child']} 
																				style={{animationDelay: `${(baseDelay * i) + descDelay}ms`}}>{d}</span>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
