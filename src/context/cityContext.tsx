/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useState} from 'react';

type CityContextProps = {
	city: string;
	setCity: (city: string) => void;
};

export const CityContext = createContext<CityContextProps>({
	city: 'São Paulo',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setCity() {},
});

export default function CityProvider({children}: any) {
	const [city, setCity] = useState<string>('São Paulo');

	const handleSetCity = (newCity: string) => {
		setCity(newCity);
	};

	return (
		<CityContext.Provider value={{city, setCity: handleSetCity}}>
			{children}
		</CityContext.Provider>
	);
}

export const cityAuth = (): CityContextProps => {
	const context = useContext(CityContext);

	return context;
};

