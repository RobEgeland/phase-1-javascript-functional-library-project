function myEach(collection, callback) {
    let objArray = collection
    if(typeof objArray === 'object') {
        objArray = Object.values(collection)
    }
    for(let i = 0; i < objArray.length; i++) {
        callback(objArray[i])
    }
    return collection
}

function myMap(collection, callback) {
    let newArray = []
    if(typeof collection === 'object') {
        collection = Object.values(collection)
    }
    for(let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    if(typeof collection === 'object') {
        collection = Object.values(collection)
    }
    if(acc === undefined) {
        acc = collection[0]
    }
    if(acc === collection[0]) {
        for(let i = 1; i < collection.length; i++) {  
            acc = callback(acc, collection[i], collection)
        }
    }else{
        for(let i = 0; i < collection.length; i++) {  
        acc = callback(acc, collection[i], collection)
    }
    }
    return acc
}

function myFind(collection, predicate) {
    if(typeof collection === 'object') {
        collection = Object.values(collection)
    }
    for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i]) === true) {
            return collection[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let trueArr = []
    if(typeof collection === 'object') {
        collection = Object.values(collection)
    }

    for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i]) === true) {
            trueArr.push(collection[i])
        }
    }
    return trueArr
}

function mySize(collection) {
    let sum = 0
    if(typeof collection === 'object') {
        collection = Object.keys(collection)
    }
    for(let i = 0; i < collection.length; i++) {
        sum += 1
    }
    return sum
}

function myFirst(array, n) {
    let newArr = []
    if(n === undefined) {
        return array[0]
    }

    for(let i = 0; i < n; i++) {
        newArr.push(array[i])
    }
    return newArr
}

function myLast(array, n) {
    if(n === undefined) {
        return array[array.length - 1]
    }
    return array.slice(-n)    
}

function myKeys(object) {
    let newArr = undefined
    newArr = Object.keys(object)
    return newArr
}

function myValues(object) {
    let objArr = undefined
    objArr = Object.values(object)
    return objArr
}