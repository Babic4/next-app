import { ContactForm } from '@/components/ContactForm/ContactForm'
import styles from './page.module.scss'

export default function ContactUsPage() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<ContactForm />
			</div>
		</main>
	)
}
