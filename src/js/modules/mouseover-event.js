function mousEvent () {
    const block = document.querySelectorAll(".block")
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "black";
	  });
}
export default mousEvent;