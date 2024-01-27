import { NavItem } from '@/components/NavItem/NavItem'
import styles from './Header.module.scss'
import { MENU } from './Menu.data'

export default function Header() {
	return (
		<div className={styles.boxHeader}>
			<header className={styles.header}>
				<nav>
					{MENU.map(item => {
						return <NavItem key={item.title} navItem={item} />
					})}
				</nav>
			</header>
		</div>
	)
}
