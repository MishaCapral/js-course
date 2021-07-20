//NUMBER----------------------------------------------------

// const num = 42;
// const float = 42.21;
// const pow = 10e3;

// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("Math.pow(2, 53)-1", Math.pow(2, 53) - 1);
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log("1/0", 1 / 0);
// console.log("NaN", NaN); //typeof= NaN
// console.log("2/undefined = ", 2 / undefined);
// const weird = 2 / undefined;
// console.log(isNaN(weird));
// console.log(isFinite(Infinity));

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(parseInt(stringFloat) + 2);
// console.log(parseFloat(stringFloat) + 2);

// console.log(0.4 + 0.2); //0.6000000001
// console.log((2 / 5) + (1 / 5));//0.6000000001
// console.log((0.4 + 0.2).toFixed(1))//0.6 but string
// console.log(+(0.4 + 0.2).toFixed(1))


//BIGINT--------------------------------------------------

// console.log( 900719925474099199999n);// BigInt 23232n
// console.log( 900719925474099199999n - 90071992547409919n )

// //console.log(10n - 4) //error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // = 2n NOT 2,4n

//MATH----------------------------------------------------

// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))//корень из
// console.log(Math.pow(5,2))// возвести в степень
// console.log(Math.abs(-42))// модуль
// console.log(Math.max(42, 12, 11 , 144))//мах из
// console.log(Math.min(11, 2, 477))
// console.log(Math.floor(4.9))//округляет в меншую сторону 
// console.log(Math.ceil(4.9))//округляет в большую степень
// console.log(Math.trunc(4.9))//удаляет дроби
// console.log(Math.sin(15))
// console.log(Math.random())

//EXAMPLE

// function getRandomBetween(min , max ){
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42))
