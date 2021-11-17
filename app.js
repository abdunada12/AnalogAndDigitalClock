setInterval(showTime, 1000)



const hoursHand = document.querySelector('.hour')
const minutesHand = document.querySelector('.minute')
const secondsHand = document.querySelector('.second')
const sec = document.querySelector('.sec')
const min = document.querySelector('.min')
const hr = document.querySelector('.hr')

function showTime(){
    
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 60

    let seconds = currentDate.getSeconds()
    let minutes = currentDate.getMinutes()
    let hours = currentDate.getHours()


    setRotation(secondsHand, secondsRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hoursHand, hoursRatio)

    setNumber(sec, seconds)
    setNumber(min, minutes)
    setNumber(hr, hours)



}

function setRotation(element, value){
    element.style.setProperty('--rotation', value * 360)
}
function setNumber(element, value){
    element.innerHTML = `${value}`
}

showTime()