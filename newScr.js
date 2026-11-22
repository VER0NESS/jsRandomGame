"use strict"
const isNum = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}
const createGame = function() {
    const secretNumber = Math.floor(Math.random() * 100) + 1
    let attempts = 10
    const guessStep = function() {
        const input = prompt("Угадай число от 1 до 100")
        if (input === null) {
            alert("Игра окончена")
            return
        }
        if (input.trim() === "" || !isNum(input)) {
            alert("Введи число!")
            return guessStep()
        }
        const userNumber = Number(input.trim());
        attempts--
        if (userNumber === secretNumber) {
            const playAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
            if (playAgain) {
                return createGame()()
            }
            alert("Игра окончена")
            return
        }
        if (attempts <= 0) {
            const playAgain = confirm("Попытки закончились, хотите сыграть еще?")
            if (playAgain) {
                return createGame()()
            }
            alert("Игра окончена")
            return
        }
        if (userNumber > secretNumber) {
            alert(`Загаданное число меньше, осталось попыток ${attempts}`)
        } else {
            alert(`Загаданное число больше, осталось попыток ${attempts}`)
        }
        return guessStep()
    }
    return guessStep
}
const startGame = createGame()
startGame()