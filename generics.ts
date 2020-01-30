
const myNumber = 32
const myString = "Hola mundo"
function returnSame<t>(variable: t) {
    return variable
}

type genericFunction<T> = (parametro: T) => T

const resultadoP = returnSame(myNumber)
const stringResult = returnSame(myString)


