
function showInput(){

    const inputBlock = document.querySelector(".center-block")
    const main = document.querySelector(".main")
    const button = document.querySelector(".button")
    const name = document.querySelector("#name")
    const span = document.querySelector(".span")
    const content = document.querySelector(".header-content-container")
    const bottomBlock = document.querySelector(".block-down")

    button.addEventListener("click", function(){
        inputBlock.classList.add("close-block")
        content.classList.add("show-content")
        main.classList.add("show-main")
        
        bottomBlock.classList.add("change-position")

        span.innerHTML = `${name.value}`
        console.log(name.value)
    })
}
showInput()
