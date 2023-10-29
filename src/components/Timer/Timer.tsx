import './timer.css'
import dayjs from 'dayjs'

export default function Timer() {
	
	const d1: any = new Date(); //"now"
	const d2: any = new Date("2023-11-19 17:30");  // some date
	
	const diff = Math.abs(d1-d2);  // difference in milliseconds
	const date = dayjs(diff);
	
	const date_month = 0;
	const date_day = date.format('D');
	const date_hours = date.format('H');

	return (
		<section className="hero_date_timer">
			<p className='small'>Estamos a:</p>
			<p className="timer">
				<span className="date_month">
					{date_month}
					<span className="small">meses</span>
				</span>
				<span className="date_colons">:</span>
				<span className="date_day">
					{date_day}
					<span className="small">días</span>
				</span>
				<span className="date_colons">:</span>
				<span className="date_hours">
					{date_hours}
					<span className="small">horas</span>
				</span>
			</p>
		</section>
	)
}

