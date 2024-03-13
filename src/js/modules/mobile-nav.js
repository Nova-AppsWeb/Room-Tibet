function mobileBurger() {
	document.addEventListener("DOMContentLoaded", () => {
	  const burgerMenu = document.querySelector(".mob-burger");
	  const menu = document.querySelector(".mob-menu");
	  const btnClose = document.querySelector(".close");
  
	  burgerMenu.addEventListener("click", () => {
		menu.classList.toggle("mob-menu--active");
		document.body.classList.toggle("no-scroll");
	  });
  
	  btnClose.addEventListener("click", () => {
		menu.classList.toggle("mob-menu--active");
	  });
	});
  }
  export default mobileBurger;
  