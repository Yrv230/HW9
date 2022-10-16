const aAndBData = ['Иван', 'Иванов', 'Отдел разроботки', 'Программист', 2000,];
function aFunc(emp) {
    let [name, surname, department, position, salary] = emp;

    console.log(`a)${name}, ${surname}, ${department}, ${position}, ${salary}.`);
}

aFunc(aAndBData);

function bFunc(emp) {
    let [name, surname, info] = emp;

    console.log(`b)${name}, ${surname}, ${info}.`);
}

bFunc(aAndBData);

const Cdata = ['Иван', 'Иванов', 'Отдел разроботки'];

function cFunc(emp) {
    let [name, surname, departament, position] = emp;

    position == undefined ? position = 'Junior' : position = emp[3];
    
    console.log(`c)${name}, ${surname}, ${departament}, ${position}.`);
}

cFunc(Cdata)

const dData = {
    color: 'red',
    width: 400,
    height: 500
}

function dFunc(option) {

    let {color, width, height} = option;

    console.log(`d)${color}, ${width}, ${height}.`);
}

dFunc(dData);