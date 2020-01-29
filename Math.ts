export function cuadrado(numero: number){
    return numero*numero;
}

export function cubo(numero: number){
    return numero*numero*numero;
}

export function raizTrinomioPo(nA: number, nB: number, nC: number){
    return (-nB+Math.sqrt(cuadrado(nB)-4*nA*nC))/2*nA;
}

export function raizTrinomioNe(nA: number, nB: number, nC: number){
    return (-nB-Math.sqrt(cuadrado(nB)-4*nA*nC))/2*nA;
}

export function potencia(numero: number, potencia: number){
    let nuevo = numero;
    for (let i = 1; i < potencia; i++){
        nuevo*=numero
    }
    return nuevo;
}




