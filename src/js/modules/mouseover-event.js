function mousEvent() {
	document.addEventListener('DOMContentLoaded', () => {
		const mobLists = document.querySelectorAll('.mob-list')
		for (const mobList of mobLists) {
			mobList.addEventListener('mouseover', () => {
				// mobList.style.color = '#F2BE22'
				mobList.classList.add('yellow')
			})

			mobList.addEventListener('mouseout', () => {
				// mobList.style.color = ''
				mobList.classList.remove('yellow')
			})
		}
	})
}
export default mousEvent
