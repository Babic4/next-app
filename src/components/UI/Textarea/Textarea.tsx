import styles from './Textarea.module.scss'

interface TextareaProps {
	error?: boolean
	min?: number
	[x: string]: any
}

export const Textarea = ({ error, min, ...rest }: TextareaProps) => {
	return (
		<div className={styles.boxTextarea}>
			<textarea
				{...rest}
				className={`${styles.textarea} ${error ? styles.error : ''}`}
			/>
			{min ? <span className={styles.rules}>min: {min}</span> : ''}
		</div>
	)
}
