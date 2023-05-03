export interface Action {
	selector: string
	func(target: Element): void
}

const Pylon = {
	action: (actions: Action[]): void => {
		document.addEventListener('DOMContentLoaded', () => {
			for (const action of actions) {
				const targets = document.querySelectorAll(action.selector)
				targets.forEach((target) => {
					try {
						action.func(target)
					} catch (e) {
						console.error(e)
					}
				})
			}
		})
	},
}

export default Pylon
