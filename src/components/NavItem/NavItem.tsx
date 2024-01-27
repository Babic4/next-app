'use client'

import { INavItem } from '@/interfaces/Interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavItem.module.scss'

interface NavItemProps {
	navItem: INavItem
}

export const NavItem = ({ navItem }: NavItemProps) => {
	const pathname = usePathname()

	return (
		<Link
			key={navItem.link}
			href={navItem.link}
			className={`${styles.link} ${
				pathname === navItem.link ? styles.active : ''
			}`}
		>
			{navItem.title}
		</Link>
	)
}
