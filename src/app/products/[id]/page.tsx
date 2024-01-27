import { Button } from '@/components/UI/Button/Button'
import { ICard } from '@/interfaces/Interfaces'
import Image from 'next/image'
import { cards } from '../products.data'
import styles from './page.module.scss'

export default function ProductPage({ params }: { params: { id: number } }) {
	const selectedProduct: ICard | undefined = cards.find(
		card => params.id == card.id
	)

	// async function handlerClick() {
	// 	'use server'
	// 	console.log('click')
	// }

	return (
		<main className={styles.main}>
			<div className={styles.boxProduct}>
				<div className={styles.boxImage}>
					<Image
						src={selectedProduct?.url || '/image/first.jpg'}
						quality={100}
						width={500}
						height={625}
						alt='Picture of the author'
					/>
				</div>
				<div className={styles.boxInfo}>
					<h3 className={styles.title}>{selectedProduct?.title}</h3>
					<div className={styles.description}>
						{selectedProduct?.description}
					</div>
					<div className={styles.boxDown}>
						<div className={styles.price}>{selectedProduct?.price} $</div>
						<Button
							width='100'
							padding='0.9rem 1rem 0.7rem'
							typeStyle='black-white'
							path={`/contact-us?title=${selectedProduct?.title}`}
						>
							Buy
						</Button>
					</div>
				</div>
			</div>
		</main>
	)
}
