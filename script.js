let divList = []

let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
    let divSquare = document.createElement("div")
    divSquare.classList.add("square")
    divList.push(divSquare)
}

divList.forEach(divSquare => {
    divSquare.addEventListener("mouseover", e => {
        divSquare.classList.add("colorChange")
    })
})

container.append(...divList)