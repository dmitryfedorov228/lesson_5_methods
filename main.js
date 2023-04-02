// let str = '5'

//! console.log(str, 'STR')

//! METHODS - заранее заготовленные функции 

// Преобразование в число

//? let numStr = +str // 1  способ преобразовать в число
//? let numStr = Number(str) // 2 способ преобразовать в число - быстрее всех
//? let numStr = parseInt(str) // 3 способ преобразовать в число

//! console.log(numStr, 'NUM STR')

// Преобразование в строку

//? let parsedStr = numStr.toString() // 1 способ преобразовать в строку
//? let parsedStr = String(numStr) // 2 способ преобразовать в строку - быстрее всех
//? let parsedStr = `${numStr}` // 3 способ преобразовать в строку

//! console.log(parsedStr, 'STRING STR')

//! ATTRIBUTES - свойства объекта описывающие его

// console.log(str.length)



//! STRING METHOD

// let str = 'somestr'

// console.log(str, 'INITIAL')

// //? toUpperCase - делает с большой буквы все что есть в строке

// console.log(str.toUpperCase(), 'toUpperCase')

// //? toLowerCase - делает с маленькой буквы все что есть в строке

// console.log(str.toLowerCase(), 'toLowerCase')

// //? concat - конкатенирует две строки (объединяет)

// console.log(str.concat('someStr2', 'concat'))

// //? trim - удаляет пробелы в конце строки

// const endSpaceStr = str.concat('    ') // 'somestr    '

// console.log(endSpaceStr.trim(), 'trim')

// //? replace - заменяет что-то на что-то replace(то что нужно заменить, то на что нужно заменить)

// console.log(str.replace('o', 'a'), 'replace')

// //? replaceAll - заменяет что-то на что-то replace(то что нужно заменить во всей строке, то на что нужно заменить)

// console.log(str.replaceAll('s', 'c'), 'replaceAll')

// //? slice - копирут от какого-то индекса до какого то индекса

// console.log(str.slice(0, 3), 'slice')

// //? split - превращает в массив (приминимает сепаратор)

// console.log(str.split(''), 'split') // разделит по символьно

// //? includes - ищет совпадение (возвращает либо true либо false)

// console.log(str.includes('z'), 'includes') // false
// console.log(str.includes('mes'), 'includes') // true 



//! NUMBER METHOD

// let num = 100.000000

// //? toString - превращает в строку

// console.log(num.toString(), 'toString')

// //? toFixed - показывает долю числа (после точки)

// console.log(num.toFixed(2), 'toFixed')



//! MATH METHOD

// let num = 5.1

// //? Math.round(num) - округляет в большую сторону 5.67 => 6

// console.log(Math.round(num), 'round') // 6

// //? Math.floor(num) - округляет в меньшую сторону 5.67 => 5

// console.log(Math.floor(num), 'floor') // 5

// //? Math.random(num) - рандомное число

// console.log(Math.round(Math.random() * 10), 'round')



//! CLASSES METHOD


// //? Boolean

// console.log(Boolean(5), 'Boolean') // true

// //? String

// console.log(String(5), 'String') // '5' - string

// //? Number

// console.log(Number('5'), 'Number') // 5 - number

// //? Array

// console.log(Array(5), 'Array') // [,,,,] - empty x5




//! ARRAY METHOD (простые)

// const arr = [1,2,3,4,5]


// //? PUSH - добавляет в конец массива

// arr.push(6)

// console.log(arr, 'PUSH') // [1,2,3,4,5,6]

// //? POP - вырезает с конца массива

// arr.pop()

// console.log(arr, 'POP') //

// //? UNSHIFT -  добавляет в начало массива

// arr.unshift(0)

// console.log(arr, 'UNSHIFT')

// //? SHIFT - вырезает с начала массива

// arr.shift()

// console.log(arr, 'SHIFT')

// //? CONCAT - конкатенирует массивы

// const newArr = arr.concat([6,7,8,9,10]) // [1,2,3,4,5,6,7,8,9,10]

// console.log(newArr, 'concat') // [1,2,3,4,5,6,7,8,9,10]

// //? SILCE - копирут от какого-то индекса до какого то индекса

// console.log(newArr.slice(0, 8), 'slice')

// //? SPLICE - вырезает  от какого-то индекса, 
// //? а вторым передается сколько нужно вырезать, 
// //? также последующие передаваемые элемнты будут добавлены

// newArr.splice(4, 2, 500, 600)

// console.log(newArr, 'splice')

// //? INCLUDES - ищет совпадения среди элементов

// console.log(newArr.includes(500), 'includes') // true

// //? JOIN - превращает в строку каким то разделителем (сепаратор)

// const arrString = newArr.join('-') // 1-2-3-4-500-600-7-8-9-10

// console.log(arrString, 'join')

// //? INDEXOF - ищет индекс какого то элемента по значению

// console.log(newArr.indexOf(500), 'indexOf')

// //? FLAT - вытаскивает все элменты на один уровень

// const flatedArr = [1,2,3,[1,2,3, [1,2,3, [1,2,3]]]]

// console.log(flatedArr.flat(), 'flat')

// //? REVERSE - переворачивает (зеркалит) массив

// const reversedArr = [1,2,3,4,5]

// console.log(reversedArr.reverse())