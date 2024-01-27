import { Card } from '@/components/Card/Card'
import styles from './page.module.scss'
import { cards } from './products.data'

export default function MarketPage() {
	return (
		<main className={styles.main}>
			<h3>Products</h3>
			<div className={styles.cardWrapper}>
				{cards.map(card => {
					return <Card key={card.description} {...card} />
				})}
			</div>
		</main>
	)
}
