const numbers = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const mainMsg = document.querySelector('.main')
const onceAgain = document.querySelector('#onceAgain')

runAnimation()

function resetDOM() {
    counter.classList.remove('inactive')
    mainMsg.classList.remove('active')

    numbers.forEach((num) => {
        num.classList.value = ''
    })

    numbers[0].classList.add('active')
}

function runAnimation() {
    numbers.forEach((num, idx) => {
        const nextToLast = numbers.length - 1

        num.addEventListener('going', (e) => {
            if(e.animationName === 'coming' && idx !== nextToLast) {
                num.classList.remove('active')
                num.classList.add('inactive')
            }
            else if(e.animationName === 'going' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('coming')
            }
            else {
                counter.classList.add('active')
                mainMsg.classList.add('inactive')
            }
        })
    })
}

onceAgain.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})