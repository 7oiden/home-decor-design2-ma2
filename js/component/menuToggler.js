const hamburgerIcon = document.querySelector("#hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");


hamburgerIcon.onclick = function() {

   if ((dropdownMenu.style.display === "block")) {
      dropdownMenu.style.display = "none";
   } else {
   dropdownMenu.style.display = "block"
   }
}

console.log("hi");