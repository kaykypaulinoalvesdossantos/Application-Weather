const key = '6fffbdd731bba702555a90ee00c1708e';

export async function getWeatherDate(city: string) {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`);

	return res.json();
}

