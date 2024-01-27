import { Poppins } from 'next/font/google'

export const poppins = Poppins({
	weight: ['400', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--var-poppins',
})
