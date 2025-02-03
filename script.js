let divList = []

let btn = document.querySelector(".btn")
let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
    let divSquare = document.createElement("div")
    divSquare.classList.add("square")
    divList.push(divSquare)
}


// event listener of button that removes current grid and creates new one
btn.addEventListener("click", e => {
    let newGrid = parseInt(prompt("Enter the size of your grid"))
    if (typeof (newGrid) === "number") {
        // let squares = document.querySelectorAll(".square")
        // squares.forEach((square) => {
        //     square.remove()
        // })
        if (newGrid > 100) {
            alert("Please pick a number smaller than 100")
        }
        else {
            let calculateWidth = 100 / (newGrid + 1)
            container.innerHTML = '' //another way to remove all inner children
            divList = []
            for (let i = 0; i < newGrid * newGrid; i++) {
                let divSquare = document.createElement("div")
                divSquare.classList.add("square")
                divSquare.style.flex = "1 0 " + calculateWidth + "%"
                divList.push(divSquare)
            }
            divList.forEach(divSquare => {
                divSquare.addEventListener("mouseover", e => {
                    let red = Math.floor(Math.random() * 256)
                    let green = Math.floor(Math.random() * 256)
                    let blue = Math.floor(Math.random() * 256)
                    divSquare.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
                })
            })
            container.append(...divList)
        }

    }


})

divList.forEach(divSquare => {
    divSquare.addEventListener("mouseover", e => {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        divSquare.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
    })
})

container.append(...divList)