function map(array, func) {
    const x = []

    for(const i in array) {
        x.push(func(array[i]))
    }
    return x
};

function reduce(array, func, starting) {
    let i = (!!starting) ? starting : array[0]
    let x = (!!starting) ? 0 : 1

    for (; x < array.length; x++) {
        i = func(array[x], i)
    }
    return i
}