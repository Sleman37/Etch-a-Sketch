let divList = []

let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
    let divSquare = document.createElement("div")
    divSquare.style = "border: solid; height: 25px; width: 25px;"
    divList.push(divSquare)
}


container.append(...divList)