	function choose() {
	let name = prompt("What is your name?");
	let tea = prompt("What is your favorite tea?");
	
    if (tea ==="green") {
            alert(name+"! 🌈Green tea is super for your health! ");
            } else {
            alert(name+"! 🎏Drink this tea carefully... ");
            }
		}
	
	let chooseButton = document.querySelector(".choose-button");
	chooseButton.addEventListener("click", choose);
	