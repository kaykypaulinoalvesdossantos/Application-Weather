/* eslint-disable react/react-in-jsx-scope */
import './globals.css';
import {Open_Sans} from 'next/font/google';

// eslint-disable-next-line new-cap, @typescript-eslint/naming-convention
const open_Sans = Open_Sans({subsets: ['latin']});

export const metadata = {
	title: 'Application Weather',
	description: 'Application Weather',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br'>
			<body className={open_Sans.className}>{children}</body>
		</html>
	);
}
