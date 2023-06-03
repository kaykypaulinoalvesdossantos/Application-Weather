/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client';
import {useEffect, useState} from 'react';

export default function Clock() {
	const [hours, setHours] = useState<string | number>('--');
	const [minutes, setMinutes] = useState<string | number>('--');
	const [seconds, setSeconds] = useState<string | number>('--');

	useEffect(() => {
		setInterval(() => {
			const dateToday = new Date();
			if (dateToday.getHours() < 10) {
				setHours('0' + dateToday.getHours());
			} else if (dateToday.getHours() > 10) {
				setHours(dateToday.getHours());
			}

			if (dateToday.getMinutes() < 10) {
				setMinutes('0' + dateToday.getMinutes());
			} else if (dateToday.getMinutes() > 10) {
				setMinutes(dateToday.getMinutes());
			}

			if (dateToday.getSeconds() < 10) {
				setSeconds('0' + dateToday.getSeconds());
			} else if (dateToday.getSeconds() > 10) {
				setSeconds(dateToday.getSeconds());
			}
		}, 1000);
	}, []);

	return (
		<div className='flex space-x-8 '>
			<div className='h-40 w-36 bg-brown-800 flex justify-center items-center flex-col shadow-black shadow-md rounded space-y-4'>
				<span className='text-6xl text-white font-bold'>{hours}</span>
				<span className='text-sm text-white '>Horas</span>
			</div>

			<div className='h-40 w-36 bg-brown-800 flex justify-center items-center flex-col shadow-black shadow-md rounded space-y-4'>
				<span className='text-6xl text-white font-bold'>{minutes}</span>
				<span className='text-sm text-white '>Minutos</span>
			</div>

			<div className='h-40 w-36 bg-brown-800 flex justify-center items-center flex-col shadow-black shadow-md rounded space-y-4'>
				<span className='text-6xl text-white font-bold'>{seconds}</span>
				<span className='text-sm text-white '>Segundos</span>
			</div>
		</div>
	);
}
