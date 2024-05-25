const plus = document.querySelector('#plus')
const total = document.querySelector('#total')
const minus = document.querySelector('#minus')
const reset = document.querySelector('#reset')
const random = document.querySelector('#random')
let count = 0


plus.onclick = () => {
    if (count < 10) {
        count++
        total.innerHTML = count

    }
}

minus.onclick = () => {
    if (count > -5) {
        count--
        total.innerHTML = count

    }
}

reset.onclick = () => {
    count = 0
    total.innerHTML = count
}

random.onclick = () => {
    count = Math.floor(Math.random() * 10)
    total.innerHTML = count

}
