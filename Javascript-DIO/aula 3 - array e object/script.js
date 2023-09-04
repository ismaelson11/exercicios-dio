//o que são vetores ou arrays

//como declarar uma array
//let array = ['string', 1, true]
//console.log(array)

//pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3']]
//console.log(array2[2])

//forEach
//array2.forEach(function(item, index){console.log(item, index)});

//push
//array2.push('novo item')
//console.log(array2)

//pop
//array2.pop()
//console.log(array2)

//unshift
//array2.unshift('novo item no inicio')
//console.log(array2)

//shift
//array2.shift()
//console.log(array2)

//indexOf
//console.log(array2.indexOf(true))

//splice
//array2.splice(0, 3)
//console.log(array2)

//slice
//let novoArray = array2.slice(0, 3);
//console.log(novoArray)

let object = {
    string: 'string da variavel object',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno:{
        objectInterno: 'objeto interno'
    }
}

//console.log(object)

//var string = object.string
//console.log(string)

//var arrayInterno = object.array
//console.log(arrayInterno)

var{string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)