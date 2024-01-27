'use client'

import { useRouter } from 'next/navigation'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	padding?: string
	typeStyle?: string
	width?: string
	[x: string]: any
}

export const Button = ({
	children,
	width,
	typeStyle,
	padding,
	path,
	...props
}: ButtonProps) => {
	const router = useRouter()

	function changePath() {
		router.push(`${path}`)
	}

	const myStyle: {
		width: string | undefined
		padding: string | undefined
	} = {
		width: width ? `${width}px` : undefined,
		padding: padding,
	}

	return (
		<button
			style={myStyle}
			className={`${styles.button} ${styles[`${typeStyle}`]}`}
			onClick={path ? changePath : undefined}
			{...props}
		>
			{children}
		</button>
	)
}
