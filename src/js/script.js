let time = '2023-04-10T00:54:00'
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

const matchDay = (days,hours,minutes,seconds) => {
    let currentDay = Date.parse(new Date())
    let result = Date.parse(time) - currentDay
    days.textContent = Math.floor(result / 1000 / 60 / 60 /24)
    hours.textContent = Math.floor(result / 1000 / 60 / 60) % 24
    minutes.textContent = Math.floor(result / 1000 / 60) % 60
    seconds.textContent = Math.floor(result / 1000) % 60

    let interval = setInterval(() => {
        matchDay(days,hours,minutes,seconds)
    },1000)
    if (result < 0) {
        clearInterval(interval)
        days.textContent = "00"
        hours.textContent = "00"
        minutes.textContent = "00"
        seconds.textContent = "00"
    }
}
matchDay(days,hours,minutes,seconds)


//     let matchDate = Date.parse(time) - Date.parse(new Date())
//     let getDay = Math.floor((matchDate) / 1000 / 60 / 60 / 24)
//     let getHours = Math.floor((matchDate / 1000 /60 / 60) % 24)
//     let getMinutes = Math.floor((matchDate / 1000 / 60) % 60)
//     let getSeconds = Math.floor((matchDate / 1000) % 60)
//
//
// days.textContent = getDay
// hours.textContent = getHours
// minutes.textContent = getMinutes
// seconds.textContent = getSeconds

