function mobileBurger() {
	document.addEventListener('DOMContentLoaded', () => {
		const burgerMenu = document.querySelector('.mob-burger')
		const menu = document.querySelector('.mob-menu')
		const btnClose = document.querySelector('.close')

		burgerMenu.addEventListener('click', () => {
			menu.classList.toggle('mob-menu--active')
			document.body.classList.add('no-scroll')
		})

		btnClose.addEventListener('click', () => {
			menu.classList.toggle('mob-menu--active')
			document.body.classList.remove('no-scroll')
		})
	})
}
export default mobileBurger
