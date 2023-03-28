//Задание 1
alert('Задание #1')
let number = prompt('Введите ваше число')
if (number >= 1 && number <= 10) {
    alert('это число относится к первой декаде')
} else if (number >= 11 && number <= 20) {
    alert('это число относится к второй декаде')
} else if (number >= 21 && number <= 31) {
    alert('это число относится к третей декаде')
} else {
    alert('go home')
}
console.log(number);

//Задание 2
alert('Задание #2')
let name = 'Alex'
let account = 7777
let money = 10000

let askname = prompt('Введите ваше имя').trim()

if (askname === name) {
    let askacc = +prompt('Введите ваш счет')
    if (askacc === account) {
        alert('Добро пожаловать')
        let askmoney = +prompt('Сколько хотите обналичить')
        if (askmoney <= money) {
            alert('У вас на балансе осталось = ' + (money - askmoney));
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Неправильный счет')
    }
} else {
    alert('Пользователь не найден')
}


//Задание 3
alert('Задание #3')

let names = 'A'
let age = 20
let cash = 100

let asknames = prompt('Как вас зовут?').slice(0, 1).toLocaleUpperCase()
if (asknames === names) {
    alert('Ваши данные подходят')
    let askage = prompt('Сколько вам лет?')
    if (askage >= 20 && askage <= 40) {
        alert('Добро пожаловать')
        let askmoney = prompt('Сколько у вас денег')
        if (cash <= askmoney) {
            alert('Welcome')
            let askpeople = prompt('Сколько людей хотят с вами тусить?')
            if (askpeople = true) {
                alert('Хорошего отдыха')
            } else {
                alert('bad luck')
            }
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('go home')
    }
} else {
    alert('Ваше имя не подходит')
}
