import './timer.css'
import simplyCountdown from 'simplycountdown.js';

export default function Timer() {

	setTimeout(() => {
		simplyCountdown("#simplycountdown", {
			year: 2025,
			month: 12,
			day: 23,
			hours: 17, // Target hour [0-23], default: 0
			minutes: 0,
			words: { // Custom labels, with lambda for plurals
			days: { root: 'día', lambda: (root, n) => n > 1 ? root + 's' : root },
			hours: { root: 'hora', lambda: (root, n) => n > 1 ? root + 's' : root },
			minutes: { root: 'minuto', lambda: (root, n) => n > 1 ? root + 's' : root },
        },
	   });
	}, 100);

	return (
		<section className="hero_date_timer">
			<p className='small'>Estamos a:</p>
			<div id="simplycountdown" className="simply-countdown"></div>
		</section>
	)
}

