/* eslint-disable react/react-in-jsx-scope */
'use client';

import Weather from '@/components/weather';
import CityProvider from '@/context/cityContext';

export default function Home() {
	return (
		<CityProvider>
			<Weather/>
		</CityProvider>
	);
}
