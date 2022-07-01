const plus = document.querySelector("#plus")
const reset = document.querySelector("#reset")
const minus = document.querySelector("#minus")
const result = document.querySelector("#result")

plus.onclick = () => {
    result.innerHTML = result.value +=1
    if (result.value > 0) {
        result.style.color = "lightgreen"
    }
    if (result.value == 0) {
        result.style.color = "black"
    }
}
reset.onclick = () => {
    result.innerHTML = result.value = 0
    result.style.color = "black"
}
minus.onclick = () => {
    result.innerHTML = result.value -=1
    if (result.value < 0) {
        result.style.color = "red"
    }
    if (result.value == 0) {
        result.style.color = "black"
    }
}

