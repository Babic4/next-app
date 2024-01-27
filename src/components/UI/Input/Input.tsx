'use client'

import styles from './Input.module.scss'

interface InputProps {
	error?: boolean
	min?: number
	[x: string]: any
}

export const Input = ({ error, min, ...rest }: InputProps) => {
	return (
		<div className={styles.boxInput}>
			<input
				{...rest}
				className={`${styles.input} ${error ? styles.error : ''}`}
			/>
			{min ? <span className={styles.rules}>min: {min}</span> : ''}
		</div>
	)
}
