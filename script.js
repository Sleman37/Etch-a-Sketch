let divList = []

let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
    let divSquare = document.createElement("div")
    divSquare.classList.add("square")
    divList.push(divSquare)
}


container.append(...divList)