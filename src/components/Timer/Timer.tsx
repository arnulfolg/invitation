import './timer.css'
import dayjs from 'dayjs'


var d1: any = new Date(); //"now"
var d2: any = new Date("2023-10-19");  // some date
var diff = Math.abs(d1-d2);  // difference in milliseconds

const date = dayjs(diff);

const date_month = date.format('M')
const date_day = date.format('D')
const date_hours = date.format('H')

export default function Timer() {
  return (
	<section className="hero_date_timer">
		<p className='small'>Estamos a:</p>
		<p className="timer">
			<span className="date_month">
				{date_month}
				<span className="small">meses</span>
			</span>
			<span className="">:</span>
			<span className="date_day">
				{date_day}
				<span className="small">días</span>
			</span>
			<span className="">:</span>
			<span className="date_hours">
				{date_hours}
				<span className="small">horas</span>
			</span>
		</p>
	</section>
  )
}

