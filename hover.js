const miDiv = document.getElementsByTagName("img");
const miDivhover = document.getElementsByClassName("position-absolute");

console.log(miDiv)
console.log(miDivhover)

miDiv.addEventListener("mouseenter", () => {
    miDivhover.style.display = "none";
});

miDiv.addEventListener("mouseleave", () => {
    miDivhover.style.display = "block";
});