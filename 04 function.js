//ФУНКЦИИ-------------------------------------------------
//функции это объекты!!

//FUNCTION DECLARATION------------------------------------
//Можно переносить куда хочешь, и вызывать откуда хочешь
// function greet(name){
//   console.log('Hello ' + name)
// }
// greet('Misha')



//FUNCTION EXPRESSION-------------------------------------
//можно вызвать только после объявления

// const greet2 = function greet2(name){
//   console.log('Hello 2 ' + name)
// }
// greet2('Misha')

// console.log(typeof(greet))//function 
// console.dir(greet)

//АНОНИМНЫЕ ФУНКЦИИ---------------------------------------

// let counter = 0;
// const interval = setInterval(function(){//setTimeout
// if(counter === 2){
// clearInterval(interval)//clearTimeout
// }
//   console.log(++counter)
// }, 1000)

//СТРЕЛОЧНЫЕ ФУНКЦИИ--------------------------------------
//

// function greet(name){         //обычная функц
//     console.log('Hello ' + name)
//   }
//   greet('Misha')

//   function greet3(){        //обычная пустая функц
//     console.log('Hello') 
//   }
//   greet3('Misha')


//   //Стрелочная функц () => {}
//   const arrow = (name) => {console.log('Hello ' + name)}
//   arrow('Misha')

//   //стреелочная сокращенно =>
//   const arrow2 = name => console.log('Hello ' + name)
//   arrow2('Misha')

//   const pow2 = num => {
//     return num **2
//   }
//   console.log(pow2(2))

//ПАРАМЕТРЫ ПО УМОЛЧАНИЮ--------------------------------

//   const sum = (a,b) => a + b
//   console.log(sum(41, 1))//42

//   const sum1 = (a,b) => a + b
//   console.log(sum1(41)) //Nan

//   const sum2 = (a,b = 4) => a + b
//   console.log(sum2(41))//44

//   const sum3 = (a,b = a*2) => a + b
//   console.log(sum3(41))//123

//   function sumAll(...all){     //...ALL
// let result = 0
// for(let num of all){
// result+=num
// }
// return result
//   }
//   const res = sumAll(1, 2, 3, 4, 5)
//   console.log(res)

//ЗАМЫКАНИЕ-----------------------------------------------

// function createMember(name) {
//   return function(lastName){
//     console.log(name +' '+ lastName)
//   }
// }

// const logWithLastName =  createMember('Misha')
// console.log(logWithLastName('Kek'))


// function Cars (markCar){
//   return function(modelCar){
//     console.log(markCar + ' ' + modelCar)
//   }
// }

// const CallCar = Cars('Ford')
// console.log(CallCar('Kuga'))
// console.log(CallCar('Fiesta'))
