interface INavItem {
	link: string
	title: string
}

interface ICard {
	id: number
	url: string
	title: string
	price: string
	description: string
}

export type { ICard, INavItem }
