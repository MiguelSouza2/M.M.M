// DECLARAÇÃO DOS ITENS
const controls =
    document.querySelectorAll(".control");
let currentIten = 0;
const items =
    document.querySelectorAll(".item");
const maxItems = items.length;
// DECLARAÇÃO DOS EVENTOS
controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft =
            control.classList.contains("arrow-left")

        if (isLeft) {
            currentIten -= 1;
        } else {
            currentIten += 1;
        }
        if (currentIten >= maxItems) {
            currentIten = 0;
        }
        if (currentIten < 0) {
            currentIten = maxItems - 1;
        }

        items.forEach(item => item.classList.remove("current-item"));
        items[currentIten].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        });
        items[currentIten].classList.add("current-item");

        console.log("control clicked", isLeft, currentIten);
    })
})
