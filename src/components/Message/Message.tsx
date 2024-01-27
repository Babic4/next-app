'use client'
import styles from './Message.module.scss'

interface MessageProps {
	text: string
	type: string
	showMessage: boolean
	setTrigger: (arg0: boolean) => void
}

export const Message = ({
	text,
	showMessage,
	type,
	setTrigger,
}: MessageProps) => {
	// useEffect(() => {
	// 	setTimeout(() => setTrigger(false), 3000)
	// })

	return showMessage ? (
		<div
			className={styles.background}
			onClick={() => {
				setTrigger(false)
			}}
		>
			<div className={`${styles.boxMessage} ${styles[type]}`}>{text}</div>
			<div className={`${styles.message} ${styles[type]}`}>{text}</div>
		</div>
	) : (
		''
	)
}
