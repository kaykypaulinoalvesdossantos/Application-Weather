'use client';
import {useEffect, useState} from 'react';

export default function Week() {
	const [week, setWeek] = useState<string | undefined>('------');

	useEffect(() => {
		setInterval(() => {
			const dateToday = new Date();
			const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
			setWeek(weekDays[dateToday.getDay()]);
		}, 1000);
	});
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<h1 className='text-6xl font-extralight text-zinc-100'>{week}</h1>
	);
}
