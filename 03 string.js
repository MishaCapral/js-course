// const name = 'Misha'
// const age = 22

//const output = 'Hello my name is ' + name + ' and my age is ' + age 
// function myAge(){
// return age
// }

//ОБРАТНЫЕ КАВЫЧКИ `` -------------------------------------

//const output = `Hello, my name ${name} and my age ${myAge()}`
//console.log(output)

// const output = `
// <div>This is div</div>
// <p> one p</p>
// `
// console.log(output)

// const name1 = 'Misha'

// console.log(name1.length)
// console.log(name1.toUpperCase())//верхний регистр 
// console.log(name1.toLowerCase())//нижний регистр
// console.log(name1.charAt(2))//что за буква на втором месте 0 1 2 
// console.log(name1.indexOf('sha'))//на кaком месте кусок текста
// console.log(name1.startsWith('Mi'))//статрукт ли текст с указаного отрывка true/false
// console.log(name1.toLowerCase().startsWith('mi'))
// console.log(name1.repeat(3))//repeat

// const string = '    password     '
// console.log(string)
// console.log(string.trim())//удаляет пробелы
// console.log(string.trimLeft())//удаляет пробелы лево/право

//АЛЬТЕРНАТИВНАЯ ЗАПИСЬ-----------------------------------

// function logPerson(s, name, age){
//   if(age < 0){
//     age = 'not born'
//   }
//   return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`
// }
// const personName = 'Misha'
// const personAge = 22

// const output = logPerson`имя: ${personName} возраст: ${personAge} !!`
// console.log(output)