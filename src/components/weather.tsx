/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import {getWeatherDate} from '../api/api';
import {Info} from 'lucide-react';
import {useEffect, useState} from 'react';
import CityForm from './cityForm';
import {cityAuth} from '@/context/cityContext';
import Week from './week';
import Clock from './clock';

export default function Weather() {
	const {city, setCity} = cityAuth();
	const [bg, setBg] = useState<string>('Clear');
	const [temp, setTemp] = useState<number | undefined>(0);
	const [showForm, setShowForm] = useState<boolean>(false);

	async function setTemperature(city: string) {
		const data = await getWeatherDate(city);
		setTemp(parseInt(data.main.temp, 10));
	}

	const handleFormSubmit = (value: string) => {
		setCity(value);
		setShowForm(false);
	};

	setTemperature(city);

	async function setWeather(city: string) {
		const data = await getWeatherDate(city);
		const Mist = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'];
		let src = data.weather[0].main;
		if (Mist.includes(src)) {
			src = 'Mist';
		}

		setBg(src);
	}

	useEffect(() => {
		setWeather(city);
	}, [city]);

	const Form = () => {
		if (showForm) {
			setShowForm(false);
		} else {
			setShowForm(true);
		}
	};

	return (
		<div className={'bg-cover flex justify-center items-center h-screen flex-col space-y-7 bg-zinc-200 '}
			style={{
				backgroundImage: `url(/images/${bg}.jpg)`,
			}}>
			<div className='flex  items-center flex-col space-y-7 bg-black/10 backdrop-blur-sm shadow-clock p-5 rounded-lg'>

				<div className='flex items-center space-x-5'>
					<div className='flex flex-col justify-center items-center shadow-black shadow-md bg-brown-800 p-4 space-y-4 rounded'>
						<div className='flex items-center gap-6'>
							<h3 className='text-7xl font-light text-zinc-600'>{temp}°C</h3>
							<button className='bg-blue-500 rounded-full p-2 shadow-md shadow-neutral-900' onClick={Form}>
								<Info className='text-white'/>
							</button>

						</div>
						<h2 className='text-zinc-100 text-lg '>{city}</h2>
					</div>
					{showForm
            && <CityForm onSubmit={handleFormSubmit} />
					}
				</div>

				<Week/>
				<Clock/>
			</div>
		</div>

	);
}
