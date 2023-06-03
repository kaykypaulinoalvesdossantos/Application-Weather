/* eslint-disable react/react-in-jsx-scope */
import {Search} from 'lucide-react';
import {useState} from 'react';

type FormProps = {
	onSubmit: (formValue: string) => void;
};

export default function CityForm({onSubmit}: any) {
	const [value, setValue] = useState<string>('erro');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		onSubmit(value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<form className='bg-blue-500 flex items-center justify-center p-7 space-x-4 rounded shadow-black shadow-md' onSubmit={handleSubmit}>
			<label htmlFor='city' className='text-lg text-zinc-100'>Local:</label>
			<input type='text' name='city' className='rounded p-1 outline-none' placeholder='São Paulo' onChange={handleChange}></input>
			<button type='submit' className='bg-blue-800 p-2 rounded-full text-zinc-100' >
				<Search/>
			</button>
		</form>
	);
}
