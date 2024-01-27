import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { poppins } from './fonts'
import './globals.scss'

export const metadata: Metadata = {
	title: 'My Market',
	description: 'Test function NEXT',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
