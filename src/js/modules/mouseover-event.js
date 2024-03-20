function mousEvent () {
    const mobLists = document.querySelectorAll('.mob-list');
    for (const mobList of mobLists) {
        mobList.addEventListener('mouseover', () => {
            mobList.style.color = '#F2BE22';
        });
        
        mobList.addEventListener('mouseout', () => {
            mobList.style.color = '';
        });
    }
}
export default mousEvent;