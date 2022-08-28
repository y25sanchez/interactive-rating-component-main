const submit = document.getElementById('submit')
const thankYou = document.querySelector('.container__thankyou')
const ratingContainer = document.querySelector('.container__rating')
const score = document.getElementById('score')
const rating1 = document.querySelector('.rating1')
const rating2 = document.querySelector('.rating2')
const rating3 = document.querySelector('.rating3')
const rating4 = document.querySelector('.rating4')
const rating5 = document.querySelector('.rating5')


rating1.addEventListener('click', (e) => {
    score.innerText = rating1.innerText
    complete()
    e.stopPropagation
})
rating2.addEventListener('click', (e) => {
    score.innerText = rating2.innerText
    complete()
    e.stopPropagation
})
rating3.addEventListener('click', (e) => {
    score.innerText = rating3.innerText
    complete()
    e.stopPropagation
})
rating4.addEventListener('click', (e) => {
    score.innerText = rating4.innerText
    complete()
    e.stopPropagation
})
rating5.addEventListener('click', (e) => {
    score.innerText = rating5.innerText
    complete()
    e.stopPropagation
})


const complete = () => {
    submit.addEventListener('click', (e) => {
        ratingContainer.classList.add('display_none')
        thankYou.classList.add('display_flex')
        e.stopPropagation() 
    })
}