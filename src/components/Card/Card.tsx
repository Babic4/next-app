import { ICard } from '@/interfaces/Interfaces'
import Image from 'next/image'
import { Button } from '../UI/Button/Button'
import styles from './Card.module.scss'

export const Card = ({ id, title, price, description, url }: ICard) => {
	return (
		<div className={styles.cardBox}>
			<Image
				className={styles.image}
				src={url}
				quality={100}
				width={500}
				height={625}
				alt='Picture of the author'
			/>
			<div className={styles.infoBox}>
				<h4 className={styles.title}>{title}</h4>
				<div className={styles.description}>{description}</div>
				<div className={styles.boxBottom}>
					<div className={styles.rice}>{price} $</div>
					<Button
						typeStyle='white-black'
						padding='0.9rem 1rem 0.7rem'
						path={`products/${id}`}
					>
						Buy
					</Button>
				</div>
			</div>
		</div>
	)
}
